(function () {
    angular.module("caravan")
    .controller("Display", Display);

    Display.$inject = ["$window", "Caravan", "m2x.feed.leader", "member.status"];

    function Display($window, Caravan, feed, statuses) {
        var vm = this;
        vm.caravan = Caravan;

        vm.map = {
            center: {
                latitude: 33.75,
                longitude: -84.39
            },
            zoom: 8,
            events: {
                tilesloaded: function (map) {
                    $scope.$apply(function () {
                        $log.info('this is the map instance', map);
                    });
                }
            }
        }
        vm.mapOptions = {
            disableDefaultUI: true
        };
        vm.mapControls = {};

        vm.refresh = function () {
            $window.location.reload();
        };

        var init = function () {
            Caravan.init();
            Caravan.setTrip({
                destination: "Panama City Beach, FL",
                origin: "Atlanta, GA"
            });
            Caravan.directions = {
                currentDirection: {
                    distance: "20 ft", label: "Piedmont Ave."
                }
            };
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