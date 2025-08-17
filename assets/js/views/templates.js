/*##################################################################################################
#
# 読み込むテンプレートをまとめる
#
##################################################################################################*/
define([
    '_'
    ,'text!./templates/step-sequencer__row.html'
],
function (
    _
    ,stepSequencerRowTml
) {

    return {
         stepSequencerRowTml : _.template(stepSequencerRowTml)
    };
});
