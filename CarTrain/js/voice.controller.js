(function () {
    angular.module("caravan")
    .controller("VoiceListener", VoiceListener);

    VoiceListener.$inject = ["$speechRecognition", "$speechCorrection", "$speechSynthesis"];

    function VoiceListener($speechRecognition, $speechCorrection, $speechSynthesis) {
        var vm = this;

        $speechRecognition.onstart(function () {
           // $speechSynthesis.speak('How can I help you?');
        });
        $speechRecognition['en-US'] = {
            "beginCaravan": {
                "regex": /^start caravan.+/gi,
                "lang": 'en-US',
                "call": function (e) {
                    vm.beginCaravan();
                }
            }
        };

        $speechRecognition.onUtterance(function (utterance) {
            console.log(utterance); // buy a milk
        });

        vm.beginCaravan = function () {
            $speechSynthetis.speak("Beginning caravan.");
        };

        //$speechRecognition.listen();
    }
})();