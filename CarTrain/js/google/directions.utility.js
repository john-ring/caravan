(function () {
    angular.module("caravan")
    .factory("google.directions", Directions);

    Directions.$inject = ['$q', '$rootScope'];

    function Directions($q, $rootScope) {
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var service = {
            getDirections: getDirections,
            setMap: setMap
        };
        return service;

        function calculateRoute(origin, destination) {
            var request = {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                }
            });
        }

        function setMap(map) {
            directionsDisplay.setMap(map);
        };

        function getDirections(origin, destination) {
            if (!$rootScope.$$phase) {
                $rootScope.$apply(function () {
                    calculateRoute(origin, destination);
                });
            } else {
                calculateRoute(origin, destination);
            }
        };
    }
})();