(function () {
	angular.module("caravan")
    .factory("m2x.services.status", Status);

	Ericsson.$inject = ['$resource', 'm2x.service.status.url', 'm2x.service.status.streams', 'm2x.key.master'];

	function Status($resource, url, streams, masterKey) {
		var resource = $resource(url, {}, {
			get: {
				method: 'GET',
				headers: { 'X-M2X-KEY': masterKey }
			}
		});

		var latestValues = {};

		var get = function (stream) {
			return resource.get({ limit: 1, streams: stream }, function (result) {
				latestValues[stream] = result;
				return result;
			});
		};
		var getStreamValues = function () {
			var promises = [];
			for (var s in streams) {
				promises.push(get(s));
			}
			return $q.deferAll(promises);
		};

		var service = {
			'get': get,
			'getStreamValues': getStreamValues,
			'latestValues': latestValues
		};
		return service;
	}
})();