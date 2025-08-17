/* ======================================================
//
//   MotionA:
//
// ====================================================== */

define([ '_', 'util'],
function (_,   util) {

var totalWidth,
    windowHight,
    windowWidth,
    timer,
    speed = 2,
    step  = 40;


var MotionA = function()
{
    this.setup();
};

MotionA.prototype =
{

    setup:function(){
        this.build();

        this.start();
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

        $('.main').append('<div class="motionA__word text-0"><p class="texture">'+ text +'</p></div>');
        $('.main').append('<div class="motionA__word text-1"><p class="texture">'+ text +'</p></div>');

        windowHight = $(window).height();
        windowWidth = $(window).width();
        $('.motionA__word').css('font-size', windowHight + 'px');
        $('.motionA__word').css('height', windowHight*0.5 + 'px');

        $('.text-1').css('top', windowHight*0.5 + 'px');
        $('.text-1 p').css('top', -windowHight*0.5 + 'px');

        totalWidth = $('.motionA__word').width();

        $('.text-0 .texture').css('background-image', 'url("./assets/img/p0.png")');
        $('.text-0 .texture').css('animation', 'moveTexture 1s infinite linear');

        $('.text-1 .texture').css('background-image', 'url("./assets/img/p2.png")');
        $('.text-1 .texture').css('animation', 'moveTexture 1s infinite linear');
    },

    start:function(){
        timer = setInterval(this.run.bind(this), 1000/60);
    },

    stop:function(){
        if(timer) {
            clearInterval(timer);
            timer = null;
        }
    },

    run:function(){
        var posx  = $('.text-0').offset().left;
        posx -= speed;
        $('.text-0').css('left', posx + 'px');
        $('.text-1').css('left', posx + step + 'px');

        if(posx < -totalWidth){
            $('.text-0').css('left', windowWidth + 'px');
            $('.text-1').css('left', windowWidth + 'px');
        }
    },

    update:function(val){
        var index = val % 3;
        switch(index){
            case 0:
                this.changeSpeed();
                break;
            case 1:
                this.changeStep();
                break;
            case 2:
                this.changeTexture();
                break;
        }
    },

    changeSpeed:function(){
        var rnd  = 300;
        var step = Math.round( Math.random()*rnd) - rnd*0.5;
        var posx = $('.text-0').offset().left + step;
        $('.text-0').css('left', posx + 'px');
    },

    changeStep:function(){
        var rnd = 500;
        step    = Math.round( Math.random()*rnd) - rnd*0.5;
    },

    changeTexture:function(){
        var text_0_p = Math.round( Math.random()*TEXTURE_NUM);
        var text_1_p = Math.round( Math.random()*TEXTURE_NUM);

        $('.text-0 .texture').css('background-image', 'url("./assets/img/p' + text_0_p + '.png")');
        $('.text-0 .texture').css('animation', 'moveTexture 1s infinite linear');

        $('.text-1 .texture').css('background-image', 'url("./assets/img/p' + text_1_p + '.png")');
        $('.text-1 .texture').css('animation', 'moveTexture 1s infinite linear');
    },
};

return {
     MotionA: MotionA
}
});
