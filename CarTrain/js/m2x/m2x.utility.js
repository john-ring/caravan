(function () {
    angular.module("caravan")
    .factory("m2x.Manager", Manager);

    Manager.$inject = ['$interval', 'm2x.service.status', '$filter', 'm2x.times'];

    function Manager($interval, statusService, $filter, dataTimes) {
        var leaderCallback = null;
        var followerCallback = null;
        var members = [];
        var promise = null;

        var times = dataTimes;
        var timeIndex = 0;

        var service = {
            start: start,
            stop: stop,
            setLeaderCallback: setLeaderCallback,
            setFollowerCallback: setFollowerCallback,
            setMembers: setMembers
        };

        return service;

        function getLeaderValues() {
            statusService.getStreamValues(members[0].feed, times[timeIndex]).then(function () {
                var result = statusService.latestValues[members[0].feed];
                console.log(result);
                if (leaderCallback !== null)
                    leaderCallback(members[0], result);
            });
        };

        function getFollowerValues() {
            for (var i = 1; i < members.length; i++) {
                getFollowerValue(members[i]);
            }
        };

        function getFollowerValue(member) {
            statusService.getFollowerValues(member.feed, times[timeIndex]).then(function () {
                var result = statusService.latestValues[member.feed];
                console.log(result);
                if (followerCallback !== null)
                    followerCallback(member, result);
            });
        };

        function incrementStart() {
            /*
            var date = Date.parse(seedTime);
            date.setTime(date.getTime() + 100);
            startTime = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss Z');
            */
            timeIndex++;
        };

        function start() {
            promise = $interval(function () {
                getLeaderValues();
                getFollowerValues();
                incrementStart();
            }, 500);
        };

        function stop() {
            $interval.cancel(promise);
        };

        function setMembers(newMembers) {
            members = newMembers;
        };

        function setLeaderCallback(callback) {
            leaderCallback = callback;
        };
        function setFollowerCallback(callback) {
            followerCallback = callback;
        };
    }
})();