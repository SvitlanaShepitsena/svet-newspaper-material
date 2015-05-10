(function () {
    'use strict';
    angular.module('common')
        .directive('svLxButton', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-lx-button.html',
                scope: {
                    bntUrl: '@',
                    methodClick: '&',
                    btnSize: '@',
                    btnType: '@',
                    btnColor: '@',
                    textColor: '@',
                    bgColor: '@',
                    btnTitle: '@',
                    iconType: '@',
                    iconName: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
