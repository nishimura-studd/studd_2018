/*##################################################################################################
#
# モーションタイポグラフィ
#
##################################################################################################*/
define([
    '_',
    'util',
    '../request',
    'views/state'
],
function (
    _,
    util,
    Request,
    State
) {

    var MOTION_NUM = 4,
        state,
        stateIndex = 0,
        timer;
        isDebug = false;

    var Page_1 = function(){
        this.init();
    };

    Page_1.prototype = {

        init:function(){
            this.build();

            // フッター表示
            $('footer').fadeIn(600);
        },

        /**
         * 表示
         */
        show:function(){
            $('.page_1').show();
        },

        /**
         * 非表示
         */
        hide:function(){
            $('.page_1').hide();
        },

        /* ======================================================
        //
        //   トップ生成
        //
        // ====================================================== */

        build:function(){
            window.addEventListener('resize', this.onResize.bind(this) );

            this.changeState();

            // timer = setInterval(this.changeState.bind(this), 1*1000);
        },

        /* ======================================================
        //
        //   リサイズ
        //
        // ====================================================== */

        onResize:function(){
            if(state) state.onResize();
        },

        /* ======================================================
        //
        //   メイン生成
        //
        // ====================================================== */

        changeState:function(){
            if(state) state.reset();

            // DEBUG
            stateIndex = 3;

            switch(stateIndex%MOTION_NUM)
            {
                case 0:
                    state = new State.MotionA.MotionA();
                    break;
                case 1:
                    state = new State.MotionB.MotionB();
                    break;
                case 2:
                    state = new State.MotionC.MotionC();
                    break;
                case 3:
                    state = new State.MotionD.MotionD();
                    break;
            }

            if(util.uaInfo().isSafari && stateIndex%MOTION_NUM == 1) {
                stateIndex++;

                this.changeState();
            }else{
                stateIndex++;
            }
        },

        /* ======================================================
        //
        //   同期
        //
        // ====================================================== */

        synchronize:function(val){
            state.update(val);
        }
    };

    return Page_1;
});
