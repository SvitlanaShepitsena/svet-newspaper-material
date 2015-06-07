(function () {
    'use strict';
    angular.module('common')
        .directive('svQuickLookBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-quick-look-btn.html',
                scope: {
                    modalMethod: '&'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
