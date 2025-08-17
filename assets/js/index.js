/* ======================================================
//
//   エントリーポイント
//
// ====================================================== */

// 表示モードの切り替え edit:ステップシーケンサー
var mode = "";

var stepSequencer,
    dataManager,
    textManager,
    isEdit,
    page_0,
    page_1;

require([
    '_',
    './controllers/PageManager',
    './controllers/TextManager'
],
function(
    _,
    PageManager,
    TextManager
) {

    var Index = function() {
        this.setup();
    };

    Index.prototype = {

        /**
        * 初期設定
        */
        setup: function() {
            // テキスト管理クラス生成
            textManager = new TextManager();

            // ページ生成
            pageManager = new PageManager();

            // フッター表示
            $('footer').fadeIn(600);

            // ボタン設定
            // $(".edit").click(function() {
            //     if(!isEdit){
            //         isEdit = !isEdit;

            //         pageManager.nextPage();

            //         // ラベル
            //         $(".edit").text('BACK');
            //     }else{
            //         isEdit = !isEdit;

            //         pageManager.prevPage();

            //         // ラベル
            //         $(".edit").text('EDIT');
            //     }
            // }.bind(this));
            $(".edit").hide();


            // ボタン設定
            $(".intro").click(function() {
                pageManager.init();

                $(".intro").hide();

                page_0.init();
            }.bind(this));

            // モード切り替え
            mode = this.getUrlVars()['mode'];
            if(mode == 'edit'){
                $(".intro").hide();
                pageManager.nextPage();
            }else{
                // スクロールを禁止
                window.addEventListener('touchmove', function(event) {
                    event.preventDefault();
                });
            }
        },

        getUrlVars: function() {
            var vars = [], max = 0, hash = "", array = "";
            var url = window.location.search;

            hash  = url.slice(1).split('&');
            max = hash.length;
            for (var i = 0; i < max; i++) {
                array = hash[i].split('=');
                vars.push(array[0]);
                vars[array[0]] = array[1];
            }

            return vars;
        },
    };

    new Index();
});
