/* ======================================================
//
//   MotionC:
//
// ====================================================== */

define([ '_', 'util'],
function (_,   util) {

var windowWidth,
    windowHight,
    textWidth,
    textHeight,
    timer;

var MotionC = function()
{
    this.setup();
};

MotionC.prototype =
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
        var text = textManager.getText();
        var $text = $('<div class="motionC__word"><p class="texture">'+ text +'</p></div>');
        $('.main').append($text);

        windowWidth = $(window).width();
        windowHight = $(window).height();
        $('.motionC__word').css('font-size', windowHight * 0.5 + 'px');

        textWidth  = $('.motionC__word').width();
        textHeight = $('.motionC__word').height();

        var text_0_p = Math.round( Math.random()*5);

        $('.texture').css('background-image', 'url("./assets/img/p' + text_0_p + '.png")');
        $('.texture').css('animation', 'moveTexture 1s infinite linear');

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
        this.changePosition();
    },

    update:function(val){
        var index = val % 2;
        switch(index){
            case 0:
                this.changePosition();
                break;
            case 1:
                this.changeTexture();
                break;
        }
    },

    changePosition:function(){
        var left = - Math.round( Math.random()*textWidth*0.5);
        var top  = - Math.round( Math.random()*textHeight*0.5);

        // $('.motionC__word').css('left', left + 'px');
        // $('.motionC__word').css('top',  top + 'px');
        $('.motionC__word').animate({left: left, top: top}, 100);
    },

    changeTexture:function(){
        var text_0_p = Math.round( Math.random()*TEXTURE_NUM);

        $('.texture').css('background-image', 'url("./assets/img/p' + text_0_p + '.png")');
        $('.texture').css('animation', 'moveTexture 1s infinite linear');
    },
};

return {
    MotionC: MotionC
}
});
