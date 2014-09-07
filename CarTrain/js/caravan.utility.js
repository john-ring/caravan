(function () {
    angular.module("caravan")
    .factory("Caravan", Caravan);

    Caravan.$inject = ['Ericsson', 'm2x.Manager', "$speechSynthesis"];

    function Caravan(Ericsson, m2x, $speechSynthesis) {
        var service = {
            startCaravan: startCaravan,
            endCaravan: endCaravan,
            addCaravanMember: addCaravanMember,
            setLeader: setLeader,
            memberRows: [],
            setTrip: setTrip,
            trip: null,
            members: [],
            init: init
        };

        return service;

        function init() {
            m2x.setLeaderCallback(leaderCallback);
            m2x.setFollowerCallback(followerCallback);
        };

        function updateCaravan(status) {
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

        function startCaravan() {
            $speechSynthesis.speak("Starting caravan.");
            m2x.start();
        };
        function endCaravan() {
            $speechSynthesis.speak("Ending caravan.");
            m2x.stop();
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
            member.fuelUsage = data.fuelUsage;
            member.fuelUsageType = rateFuelUsage(member.fuelUsage);
            updateCaravan(data);
        };
        function followerCallback(member, data) {
            member.fuelUsage = data.fuelUsage;
            member.fuelUsageType = rateFuelUsage(member.fuelUsage);
        };

        function setTrip(newTrip) {
            service.trip = newTrip;
        };

        function beginCoupling(member) {
        };

        init();
    }
})();