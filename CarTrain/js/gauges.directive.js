(function () {
    angular.module("caravan")
    .directive("speedometer", Speedometer);

    Speedometer.$inject = [];

    function Speedometer() {
        return {
            scope: {
                ngModel: '='
            },
            restrict: 'EA',
            link: function (scope, element, attrs) {
                if (!scope.ngModel) {
                    console
                            .log('Requires a html attribute data-ng-model. This should point to the input field model controller.');
                }

                var gauge = new Gauge(element[0].firstChild, { 'mode': 'needle', 'range': { 'min': 0, 'max': 160 } });

                scope.$watch('ngModel', function (newValue) {
                    gauge.draw(scope.ngModel);
                });
            },
            template: '<canvas width="120" height="120"></canvas>'
        };
    }
})();

(function () {
    angular.module("caravan")
    .directive("tachometer", Tachometer);

    Tachometer.$inject = [];

    function Tachometer() {
        return {
            scope: {
                ngModel: '='
            },
            restrict: 'EA',
            link: function (scope, element, attrs) {
                if (!scope.ngModel) {
                    console
                            .log('Requires a html attribute data-ng-model. This should point to the input field model controller.');
                }

                var gauge = new Gauge(element[0].firstChild, { 'mode': 'needle', 'range': { 'min': 0, 'max': 7.000 } });

                scope.$watch('ngModel', function (newValue) {
                    gauge.draw(scope.ngModel);
                });
            },
            template: '<canvas width="120" height="120"></canvas>'
        };
    }
})();