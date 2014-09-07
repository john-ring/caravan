(function () {
    angular.module("caravan")
    .controller("Buttons", Buttons);

    Buttons.$inject = ["Caravan", "Friends"];

    function Buttons(Caravan, Friends) {
        var vm = this;

        vm.startCaravan = function () {
            Caravan.startCaravan();
        };
        vm.stopCaravan = function () {
            Caravan.endCaravan();
        };
        vm.addMember = function () {
            Caravan.addCaravanMember(Friends.getNext());
            if (!Caravan.isRunning)
                Caravan.startCaravan();
        };
    };
})();