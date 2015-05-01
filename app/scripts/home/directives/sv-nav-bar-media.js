(function () {
    'use strict';

    angular.module('home')
        .directive('svNavBarMedia', function ($mdMedia) {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return $mdMedia('gt-md');
                    }, function (gtMd) {
                        if (!gtMd) {
                            el.css('height', '40px');
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
