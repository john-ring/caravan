(function () {
    angular.module("caravan")
    .factory("Ericsson.service.diagnostics", Diagnostics);

    Diagnostics.$inject = ['$resource', 'Ericsson.service.diagnostics.url', 'Ericsson.service.headers.authorization'];

    function Diagnostics($resource, url, authorization) {
        var resource = $resource(url, {}, {
            get: {
                method: 'GET',
                headers: { 'Authorization': authorization }
            }
        });

        var get = function () {
            return resource.get({}, function (result) {
                return result;
            });
        };

        var service = {
            'get': get
        };
        return service;
    }
})();