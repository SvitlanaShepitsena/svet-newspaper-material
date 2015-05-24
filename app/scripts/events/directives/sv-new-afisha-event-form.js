(function () {
    'use strict';

    angular.module('events')
        .directive('svNewAfishaEventForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-new-afisha-event-form.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
