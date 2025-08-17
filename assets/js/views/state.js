/* ======================================================
//
//   templates - 読み込むテンプレートをまとめる
//
// ====================================================== */

define([
     './state/MotionA'
    ,'./state/MotionB'
    ,'./state/MotionC'
    ,'./state/MotionD'
],
function (
     MotionA
    ,MotionB
    ,MotionC
    ,MotionD
) {

    return {
         MotionA : MotionA
        ,MotionB : MotionB
        ,MotionC : MotionC
        ,MotionD : MotionD
    };
});
