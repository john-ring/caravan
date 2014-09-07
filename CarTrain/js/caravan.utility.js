(function () {
    angular.module("caravan")
    .factory("Caravan", Caravan);

    Caravan.$inject = ['Ericsson', 'm2x.Manager', "$speechSynthesis", "google.directions"];

    function Caravan(Ericsson, m2x, $speechSynthesis, Directions) {
        var service = {
            startCaravan: startCaravan,
            endCaravan: endCaravan,
            addCaravanMember: addCaravanMember,
            setLeader: setLeader,
            memberRows: [],
            setTrip: setTrip,
            trip: null,
            members: [],
            init: init,
            map: null,
            isRunning: false,
            directions: null,
            leaderData: null
        };

        return service;

        function init() {
            m2x.setLeaderCallback(leaderCallback);
            m2x.setFollowerCallback(followerCallback);
        };

        function updateCaravan(status) {
            service.leaderData = status;
            service.leaderData.rpm = service.leaderData.rpm / 1000;
            for (var i = 1; i < service.members.length; i++) {
                Ericsson.updateFields(service.members[i], status);
            }
        };

        function addCaravanMember(member) {
            $speechSynthesis.speak("Adding " + member.firstName + " " + member.lastName + " to the caravan.");
            service.members.push(member);
            updateMemberRows();
        };

        function updateMemberRows() {
            m2x.setMembers(service.members);
            var newRows = [];
            var currentIndex = 0;
            var columnCount = 2;
            for (var i = 0; i < service.members.length; i++) {
                if (i % columnCount === 0) {
                    newRows.push([]);
                }
                newRows[currentIndex].push(service.members[i]);
                if (i % columnCount === columnCount - 1) {
                    currentIndex++;
                }
            }
            service.memberRows = newRows;
        };

        function updateDirections() {
            service.trip = Directions.getDirections(service.trip.origin, service.trip.destination)
        };

        function startCaravan() {
            updateDirections();
            //$speechSynthesis.speak("Starting caravan.");
            m2x.start();
            service.isRunning = true;
        };
        function endCaravan() {
            $speechSynthesis.speak("Ending caravan.");
            m2x.stop();
            service.isRunning = false;
        };
        function setLeader(leader) {
            service.members.splice(0, 0, leader);
            updateMemberRows();
        }
        function rateFuelUsage(value) {
            var type = "";
            if (value < 25) {
                type = 'success';
            } else if (value < 50) {
                type = 'info';
            } else if (value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }
            return type;
        };
        function leaderCallback(member, data) {
            member.fuel_usage = data.fuel_usage;
            member.fuelUsageType = rateFuelUsage(member.fuel_usage);
            updateCaravan(data);
        };
        function followerCallback(member, data) {
            member.fuel_usage = data.fuel_usage;
            member.fuelUsageType = rateFuelUsage(member.fuel_usage);
        };

        function setTrip(newTrip) {
            service.trip = newTrip;
        };

        function beginCoupling(member) {
        };

        function setMap(newMap) {
            map = newMap;
            Directions.setMap(map);
        }

        init();
    }
})();