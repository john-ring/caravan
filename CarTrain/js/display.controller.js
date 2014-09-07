(function () {
    angular.module("caravan")
    .controller("DisplayController", DisplayController);

    DisplayController.$inject = ["Caravan"];

    function DisplayController(Caravan) {
        var vm = this;
        vm.caravan = Caravan;
    };
})();