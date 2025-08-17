/* ======================================================
//
//   MotionD:
//
// ====================================================== */

define([ '_', 'util'],
function (_,   util) {

var windowWidth,
    windowHight,
    timer;

var MotionD = function()
{
    this.setup();
};

MotionD.prototype =
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
        $('.main').append('<div class="motionD__word"></div>');

        this.buildText();
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
        var index = val % 3;
        switch(index){
            case 0:
                this.buildText();
                break;
            case 1:
                this.changeTexture();
                break;
            case 2:
                this.changeTexture();
                break;
        }
    },

    buildText:function(){
        $('.motionD__word').empty();

        var font_size_max = (util.isPC()) ? 200 : 100;
        var font_size_min = (util.isPC()) ? 60 : 30;

        var text = textManager.getText();
        var text_0_p  = Math.round( Math.random()*TEXTURE_NUM);
        var font_size = Math.round( Math.random()*font_size_max) + font_size_min;

        for(var i = 0; i < 500; i++){
            $('.motionD__word').append('<span class="texture">'+ text +'</span>');
        }

        $('.motionD__word').css('font-size', font_size + 'px');

        $('.motionD__word .texture').css('background-image', 'url("./assets/img/p' + text_0_p + '.png")');
        $('.motionD__word .texture').css('animation', 'moveTexture 1s infinite linear');
    },

    changeTexture:function(){
        var text_0_p = Math.round( Math.random()*TEXTURE_NUM);

        $('.texture').css('background-image', 'url("./assets/img/p' + text_0_p + '.png")');
        $('.texture').css('animation', 'moveTexture 1s infinite linear');
    },
};

return {
    MotionD: MotionD
}
});
