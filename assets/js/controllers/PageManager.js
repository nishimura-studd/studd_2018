/*##################################################################################################
#
# ページ管理クラス
#
##################################################################################################*/
define([
    '_',
    '../views/Page_0',
    '../views/Page_1'
],
function (
    _,
    Page_0,
    Page_1
) {

    var pageId = 1;

    var PageManager = function(){
        this.setup();
    };

    PageManager.prototype = {

        /**
        * 設定
        */
        setup:function(){
            page_0 = new Page_0();

            page_1 = new Page_1();
        },

        /**
        * 初期設定
        */
        init:function(){
            this.show(pageId);
        },

        /**
        * 初期設定
        * @param {number} pageId ページID        
        */
        show:function(pageId){
            switch(pageId){
                case 0:
                    page_0.show();
                    page_1.hide();
                    break;
                case 1:
                    page_0.hide();
                    page_1.show();
                    break;
            }
        },

        /**
        * 次のページ遷移します。
        */
        nextPage:function(){
            pageId--;

            this.show(pageId);
        },

        /**
        * 前のページ遷移します。
        */
        prevPage:function(){
            pageId++;

            this.show(pageId);
        }
    };

    return PageManager;
});
