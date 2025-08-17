/* ======================================================
//
//   MotionB:
//
// ====================================================== */

define([ '_', 'util'],
function (_,   util) {

var textArray,
    textDomArray,
    textIndex,
    textMax,
    windowHight,
    windowWidth,
    timer;

var MotionB = function()
{
    this.setup();
};

MotionB.prototype =
{

    setup:function(){
        this.build();

        // this.start();
    },

    reset:function(){
        $('.main').empty();

        this.stop();
    },

    onResize:function(){
        this.reset();

        this.setup();
    },

    build:function(){
        textArray    = [];
        textDomArray = [];
        textIndex = 0;

        var text = textManager.getText();
        textArray = text.split(" ");
        textArray = _.shuffle(textArray);
        textMax   = textArray.length;

        this.run();
    },

    start:function(){
        timer = setInterval(this.run.bind(this), 1000);
    },

    stop:function(){
        if(timer) {
            clearInterval(timer);
            timer = null;
        }
    },

    run:function(){
        this.buildText();
    },

    update:function(val){
        var index = val % 2;
        switch(index){
            case 0:
                this.buildText();
                break;
            case 1:
                if(textDomArray.length != 0){
                    this.removeText();
                }else{
                    this.buildText();
                }
                break;
        }
    },

    buildText:function(){
        textIndex++;

        var index = textIndex%textMax;
        var id    = 'text' + textIndex;
        var $text = $('<div class="motionB__word ' + id + '""><p class="texture">'+ textArray[index] +'</p></div>');
        $('.main').append($text);

        windowWidth = $(window).width();
        $('.motionB__word').css('font-size', windowWidth * 0.30 + 'px');

        var text_0_p = Math.round( Math.random()*TEXTURE_NUM);

        $('.'+ id + ' .texture').css('background-image', 'url("./assets/img/p' + text_0_p + '.png")');
        $('.'+ id + ' .texture').css('animation', 'moveTexture 1s infinite linear');

        textDomArray.push($text);
    },

    removeText:function(){
        var $tmp = textDomArray.shift();
        $tmp.remove();
    },
};

return {
    MotionB: MotionB
}
});
