(function () {
    'use strict';
    angular.module('common')
        .directive('svLumxButton', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-lumx-button.html',
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
