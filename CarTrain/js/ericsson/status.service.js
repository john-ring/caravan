﻿(function () {
    angular.module("caravan")
    .factory("Ericsson.service.status", Status);

    Ericsson.$inject = ['$resource', 'Ericsson.service.status.url', 'Ericsson.service.headers.authorization'];

    function Status($resource, url, authorization) {
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