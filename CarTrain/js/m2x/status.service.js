(function () {
	angular.module("caravan")
    .factory("m2x.service.status", Status);

	Status.$inject = ['$q', '$resource', 'm2x.service.status.url', 'm2x.service.status.streams', 'm2x.service.status.followerStreams', 'm2x.key.master'];

	function Status($q, $resource, url, streams, followerStreams, masterKey) {
		var resource = resource = $resource(url, {}, {
			get: {
				method: 'GET',
				headers: { 'X-M2X-KEY': masterKey }
			}
		});
		var latestValues = {};
		var service = {
			get: get,
			getStreamValues: getStreamValues,
			getFollowerValues: getFollowerValues,
			latestValues: latestValues
		};
		return service;

		function get(feed, stream) {
			if (!latestValues.hasOwnProperty(feed)) latestValues[feed] = {};
			return resource.get({ limit: 1, feed: feed, stream: stream }, function (result) {
				latestValues[feed][stream] = (result.values.length > 0) ? result.values[0].value : null;
				return result;
			}, function (error) {
				console.log(error);
			});
		};
		function getStreamValues(feed) {
			var promises = [];
			for (var s in streams) {
				promises.push(get(feed, streams[s]));
			}
			return $q.all(promises);
		};
		function getFollowerValues(feed) {
			var promises = [];
			for (var s in followerStreams) {
				promises.push(get(feed, streams[s]));
			}
			return $q.all(promises);
		};
	}
})();