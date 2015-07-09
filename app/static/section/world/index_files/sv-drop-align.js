(function () {
    'use strict';
    angular.module('auth.notifications')
        .directive('svDropAlign', function ($mdMedia) {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return $mdMedia('sm');
                    }, function (sm) {
                        if (!sm) {
                            el.removeClass("dropdown-menu--left");
                            el.addClass("dropdown-menu--right");
                            el.css({"background-color": "500px"});
                        } else {
                            console.log(' not sm');
                            //el.removeClass('dropdown-menu--right');
                        }
                    });
                }
            };
        });
})();
