(function () {
    'use strict';
    angular.module('common')
        .directive('svLumxLink', function () {
            return {
                replace: true,
                templateUrl: 'sv-lumx-link.html',
                scope: {
                    linkUrl: '@',
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
