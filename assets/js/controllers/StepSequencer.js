/*##################################################################################################
#
# ステップシーケンサー
#
##################################################################################################*/
define([
    '_',
    'Tone'
],
function (
    _,
    Tone
) {

    var synths = [];

    var StepSequencer = function(){

    };

    StepSequencer.prototype = {

        setup:function(){
            if (Tone.context.state !== 'running') {
                Tone.context.resume();
            };

            // 音源生成
            _.each(SYNTHS.synths, function(synth){
                var temp = new Tone.Synth();
                temp.oscillator.type = synth.type;
                synths.push(temp);
            });

            var gain = new Tone.Gain(0.6);
            gain.toMaster();

            _.each(synths, function(synth){
                synth.connect(gain);
            });

            // シーケンサー設定
            var rows  = document.body.querySelectorAll('.step-sequencer > div'),
                index = 0;

            function repeat(time) {
                var step = index % 16;
                for(let i = 0; i < rows.length; i++) {
                    var row   = rows[i],
                        pad   = row.querySelector(`div:nth-child(${step + 2})`);//labelはskipするので2から
                        synth = synths[i],
                        id    = $(row).attr('id').split('_')[1],
                        note  = _.findWhere(SYNTHS.synths, {id:id}).note;

                    if($(pad).hasClass('on')) {
                        synth.triggerAttackRelease(note, '8n', time);

                        page_1.synchronize(i)
                    }

                    // 再生位置
                    $(pad).addClass('current');

                    var pad_index = (step == 0) ? 17 : step + 1;
                    var pad_prev = row.querySelector(`div:nth-child(${pad_index})`);
                    $(pad_prev).removeClass('current');
                }

                // 2小節ごとにトリガー
                if(index % 32 == 0 ) {
                    if(mode != 'edit') page_0.randomize();

                    page_1.changeState();
                }

              index++;
            }

            Tone.Transport.scheduleRepeat(repeat, '16n');
        },

        start:function(){
            Tone.Transport.start();
        },

        stop:function(){
            Tone.Transport.stop();
        },

        test:function(id){
            var note = _.findWhere(SYNTHS.synths, {id:id}).note;
            synths[id].triggerAttackRelease(note, '16n');
        },
    };

    return StepSequencer;
});
