(function () {
    angular.module("caravan")
    .factory("Caravan", Caravan);

    Caravan.$inject = ['Ericsson', 'm2x.Manager'];

    function Caravan(Ericsson, m2x) {
        var updateCaravan = function (status) {
            for (var i = 0; i < caravan.members.length; i++) {
                Ericsson.updateFields(status);
            }
        };

        var members = [];
        var addCaravanMember = function (member) {
            members.push(member);
        };

        var startCaravan = function () {
            m2x.start();
        };
        var endCaravan = function () {
            m2x.stop();
        };

        var dataCallback = function (data) {
            updateCaravan(data);
        };

        m2x.setCallback = dataCallback;

        var service = {
            'startCaravan': startCaravan,
            'endCaravan': endCaravan,
            'addCaravanMember': addCaravanMember,
            'setLeader': setLeader
        };

        return service;
    }
})();