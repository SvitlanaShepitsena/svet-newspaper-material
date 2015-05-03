(function () {
    'use strict';

    angular.module('ad')
        .directive('svStartCampaignForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-start-campaign-form.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
