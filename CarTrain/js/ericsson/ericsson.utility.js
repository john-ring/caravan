(function () {
    angular.module("caravan")
    .factory("Ericsson", Ericsson);

    Ericsson.$inject = ['Ericsson.service.emulate', 'Ericsson.service.status', 'm2x.Manager'];

    function Ericsson(emulateService, statusService) {
        var updateFields = function (vin, status) {
            emulateService.updateFields(vin, status);
        };

        var service = {
            'updateFields': updateFields
        };

        return service;
    }
})();