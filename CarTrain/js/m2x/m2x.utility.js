(function () {
    angular.module("caravan")
    .factory("m2x.Manager", Manager);

    Manager.$inject = ['m2x.service.status'];

    function Manager(statusService) {
        var dataCallback = null

        var isRunning = false;
        var start = function () {
            isRunning = true;
            while (isRunning) {
                $timeout(function () {
                    statusService.get().then(function () {
                        var result = statusService.latestValues;
                        console.log("value: " + result);
                        if (dataCallback !== null)
                            dataCallback(result);
                    });
                }, 5000);
            }
        };

        var stop = function () {
            isRunning = false;
        };

        var setCallback = function (callback) {
            dataCallback = callback;
        };
        var service = {
            'start': start,
            'stop': stop,
            'setCallback': setCallback
        };

        return service;
    }
})();