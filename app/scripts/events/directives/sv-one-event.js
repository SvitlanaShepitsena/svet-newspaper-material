(function () {
    'use strict';
    angular.module('events')
        .directive('svOneEvent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event.html',
                scope: {
                    event: '=',
                    hide: '&dialogHide'
                },
                link: function ($scope, el, attrs) {
                    $scope.isDialog = function () {
                        return attrs.dialogHide;
                    };
                }
            };
        });
})();
