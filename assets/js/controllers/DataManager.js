/*##################################################################################################
#
# データ管理クラス
#
##################################################################################################*/
define([
    '_'
],
function (
    _
) {
    var DataManager = function(){

    };

    DataManager.prototype = {

        save:function(){
            var obj = {};

            obj.rows = [];
            _.each($('.step-sequencer__row'), function(row){
                 var objRow = {};
                 objRow.id   = $(row).attr('id').split('_')[1];
                 objRow.pads = [];
                 _.each($(row).find('div'), function(div, i){
                    if(i==0){
                        objRow.name = $(div).text();
                    }else{
                        var toggle = ($(div).hasClass('on')) ? 1 : 0;
                        objRow.pads.push(toggle);
                    }
                });
                obj.rows.push(objRow);
            });

            var setjson = JSON.stringify(obj);

            localStorage.setItem('pad', setjson);
        },
    };

    return DataManager;
});
