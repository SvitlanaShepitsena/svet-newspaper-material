(function () {
    'use strict';
    angular.module('common')
        .directive('svNavBarMedia', function ($mdMedia) {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return $mdMedia('gt-md');
                    }, function (gtMd) {
                        if (!gtMd) {
                            el.css('height', '42px');
                        }
                        else {
                            el.css('height', 'auto');
                            el.css('min-height', '76px');
                        }
                    });
                }
            };
        });
})();
