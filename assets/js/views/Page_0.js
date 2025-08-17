/*##################################################################################################
#
# ステップシーケンサー 
#
##################################################################################################*/
define([
     '_'
    ,'../controllers/DataManager'
    ,'../controllers/StepSequencer'    
    ,'./templates'
],
function (
     _
    ,DataManager
    ,StepSequencer
    ,templates    
) {
    /**
     * クラス定義
     */
    var Page_0 = function(){
        this.isFirst = true;
        this.isPlay  = false;

        this.setup();
    };
    Page_0.prototype = {
        /**
         * セットアップ
         */
        setup:function(){
            dataManager = new DataManager();

            stepSequencer = new StepSequencer();

            this.build();

            this.setupButton();               
        },

        /**
         * 初期化
         */
        init:function(){
            if(this.isFirst){
                stepSequencer.setup();

                stepSequencer.start();

                this.isPlay = !this.isPlay;

                this.isFirst = false;
            }              
        },

        /**
         * 表示
         */
        show:function(){
            $('.page_0').show();
        },

        /**
         * 非表示
         */
        hide:function(){
            $('.page_0').hide();             
        },

        /**
         * ボタン設定
         */
        setupButton:function(){
            $(".play").click(function() {
                if(!this.isPlay){
                    this.isPlay = !this.isPlay;

                    if(this.isFirst){
                        stepSequencer.setup();

                        stepSequencer.start();

                        this.isFirst = false;
                    }else{
                        this.start();
                    }

                    // ラベル
                    $(".play").text('STOP');
                }else{
                    this.isPlay = !this.isPlay;

                    this.stop();

                    // ラベル
                    $(".play").text('PLAY');
                }
            }.bind(this));

            $(".clear").click(function() {
                this.clear();
            }.bind(this)); 

            $(".save").click(function() {
                this.save();
            }.bind(this)); 

            $(".step-sequencer__pad").click(function(e) {
                if(!$(this).hasClass('on')){
                    $(this).addClass('on');
                }else{
                    $(this).removeClass('on');
                }
            }); 

            $(".step-sequencer__label").click(function(e) {
                if(this.isFirst){
                    stepSequencer.setup();

                    this.isFirst = false;
                }
                var id = $(e.target).closest('.step-sequencer__row').attr('id').split('_')[1];
                stepSequencer.test(id);                
            }.bind(this));                         
        },

        /**
         * 生成
         */
        build:function(){
            // 初期データ取得
            var obj = {};
            var getjson = localStorage.getItem('pad');
            if(!getjson){
                obj = DEFAULT_PADS;
            }else{
                obj = JSON.parse(getjson);
            }

            // DEBUG
            // obj = DEFAULT_PADS;

            // パッド生成
            _.each(obj.rows, function(row){
                var template = templates.stepSequencerRowTml;
                var $s = $(template(row));
                $('.step-sequencer').append($s);                
            });                        
        },

        /**
         * ランダム
         */
        randomize:function(){
            this.clear();

            var baseId = Math.floor((SYNTHS.synths.length)*Math.random());
            _.each(SYNTHS.synths, function(synth){
                if(synth.id == baseId){
                    $('#s_' + baseId + ' div:nth-child(2)').addClass('on');
                    $('#s_' + baseId + ' div:nth-child(6)').addClass('on');
                    $('#s_' + baseId + ' div:nth-child(10)').addClass('on');
                    $('#s_' + baseId + ' div:nth-child(14)').addClass('on');                    
                }else if(Math.random()*10 > 6){
                    for(var i = 2; i < 18; i++){
                        if(Math.random()*10 > 9) $('#s_' + synth.id + ' div:nth-child('+ i +')').addClass('on');
                    }
                } 

            });           
        },

        /**
         * 実行
         */
        run:function(){
            stepSequencer.run();      
        },

        /**
         * 再生
         */
        start:function(){
            stepSequencer.start();      
        },

        /**
         * 停止
         */
        stop:function(){
            stepSequencer.stop();      
        },

        /**
         * クリア
         */
        clear:function(){
            $(".step-sequencer__pad").removeClass('on');    
        },

        /**
         * 保存
         */
        save:function(){
            dataManager.save();   
        }                     
    };

    return Page_0;
});
