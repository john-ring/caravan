(function () {
    angular.module("caravan")
    .factory("Ericsson.service.emulate", Emulate);

    Emulate.$inject = ['$q', '$resource', 'Ericsson.service.emulate.url', 'Ericsson.service.emulate.fields', 'Ericsson.service.headers.authorization'];

    function Emulate($q, $resource, url, fields, authorization) {
        var resource = $resource(url, {}, {
            post: {
                method: 'POST',
                headers: { 'Authorization': authorization }
            }
        });

        var updateFields = function (vin, status, fields) {
            console.log(status);

            var promises = [];
            for (var f in fields) {
                promises.push(resource.post({ field: f }, { data: status[f] }, function (result) {
                    return result;
                }, function (error) {
                    console.log(error);
                }));
            }

            return $q.all(promises);
        };

        var service = {
            'updateFields': updateFields
        };
        return service;
    }
})();