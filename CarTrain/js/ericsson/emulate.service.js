(function () {
    angular.module("caravan")
    .factory("Ericsson.services.status", Status);

    Ericsson.$inject = ['$q', '$resource', 'Ericsson.services.emulate.url', 'Ericsson.services.emulate.fields', 'Ericsson.services.headers.authorization'];

    function Status($q, $resource, url, fields, authorization) {
        var resource = $resource(url, {}, {
            post: {
                method: 'POST',
                headers: { 'Authorization': authorization }
            }
        });

        var updateFields = function (vin, status) {
            var promises = [];
            for (var f in fields) {
                promises.push(resource.post({ field: status[f] }, function (result) {
                    return result;
                }));
            }

            return $q.deferAll(promises);
        };

        var service = {
            'updateFields': updateFields
        };
        return service;
    }
})();