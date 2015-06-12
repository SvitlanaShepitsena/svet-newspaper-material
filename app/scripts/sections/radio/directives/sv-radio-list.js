(function () {
    'use strict';

    angular.module('sections.radio')
        .directive('svRadioList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/radio/directives/sv-radio-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {


                }
            };
        });
})();
