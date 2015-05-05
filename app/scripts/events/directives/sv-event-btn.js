(function () {
    'use strict';

    angular.module('auth')
        .directive('svEventBtn', function () {
            return {
                replace: true,
                templateUrl: 'sv-event-btn.html',
                scope: {
                    btnTitle: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
