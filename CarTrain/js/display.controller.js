(function () {
    angular.module("caravan")
    .controller("Display", Display);

    Display.$inject = ["Caravan", "m2x.feed.leader", "member.status"];

    function Display(Caravan, feed, statuses) {
        var vm = this;
        vm.caravan = Caravan;

        vm.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        }

        var init = function () {
            Caravan.init();
            Caravan.setTrip({ destination: { city: "Austin", state: "TX", latitude: "", longitude: "" }, eta: 3.65 });
            Caravan.setLeader({
                "firstName": "John",
                "lastName": "Ring",
                "phoneNumber": "444-666-6799",
                "vin": "123456781235",
                "image": "/images/profile_john.png",
                "feed": feed,
                "fuelUsage": 87,
                "fuelUsageType": "success",
                "status": statuses.Leader
            });
        };

        init();
    };
})();