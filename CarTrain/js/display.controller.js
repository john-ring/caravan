﻿(function () {
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
            zoom: 8,
            events: {
                tilesloaded: function (map) {
                    $scope.$apply(function () {
                        Caravan.map = map;
                    });
                }
            }
        }
        vm.mapOptions = {
            disableDefaultUI: true
        };
        vm.mapControls = {};

        var init = function () {
            Caravan.init();
            Caravan.setTrip({ destination: "Panama City Beach, FL", origin: "Atlanta, GA" });
            Caravan.setLeader({
                "firstName": "John",
                "lastName": "Ring",
                "phoneNumber": "444-666-6799",
                "vin": "123456781235",
                "image": "/Content/images/profile_john.png",
                "feed": feed,
                "fuelUsage": 87,
                "fuelUsageType": "success",
                "status": statuses.Leader
            });
        };

        init();
    };
})();