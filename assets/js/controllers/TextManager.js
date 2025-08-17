/*##################################################################################################
#
# テキスト管理クラス
#
##################################################################################################*/
define([
    '_'
],
function (
    _
) {

    var TEXT   = [
                    'Bad luck to talk on these rides Mine on the road',
                    'Your dilated eyes watch the clouds float',
                    'White Ferrari',
                    'Had a good time Sweet 16, how was I supposed to know anything?',
                    'I let you out at Central I didn\’t care to state the plain',
                    'Kept my mouth closed We\’re both so familiar',
                    'White Ferrari',
                    'Stick by me Close by me You were fine You were fine here',
                    'That\’s just a slow body You left when I forgot to speak',
                    'You left when I forgot to speak So I text the speech, lesser speeds Texas speed, yes',
                    'Basic takes its toll on me \‘Ventually, \'ventually, yes',
                    'Ah on me \'ventually, \'ventually, yes',
                    'I care for you still and I will forever That was my part of the deal, honest',
                    'We got so familiar Spending each day of the year, White Ferrari',
                    'Good times In this life, life In this life, life',
                    'One too many years Some tattooed eyelids on a facelift',
                    'Mind over matter is magic I do magic',
                    'If you think about it it\’ll be over in no time, no time And that\’s life',
                    'I\’m sure we\’re taller in another dimension',
                    'You say we\’re small and not worth the mention',
                    'Youe\’re tired of movine\’, your bodye\’s achine\’',
                    'We could vacay, there\’s places to go Clearly this isn\’t all that there is',
                    'Can\’t take what\’s been given But we\’re so okay here, we\’re doing fine Primal and naked',
                    'You dream of walls that hold us imprisoned It\’s just a skull, least that\’s what they call it',
                    'And we\’re free to roam'
                ];

    var TextManager = function(){
        this.getText();
    };

    TextManager.prototype = {

        getText:function(){
            var str = TEXT[Math.floor(Math.random()*TEXT.length)];
            return str;
        },
    };

    return TextManager;
});
