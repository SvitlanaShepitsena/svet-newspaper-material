(function () {
    'use strict';

    angular.module('common')
        .directive('svModalWindowSizeMedia', function ($mdMedia) {
            return {
                link: function ($scope, el, attrs, ctrl) {
                    return {
                        link: function ($scope, el, attrs) {
                            console.log('run here sv-modal-window-size-media.js');
                            $scope.$watch(function () {
                                return $mdMedia('sm');
                            }, function (sm) {
                                if (sm) {

                                    el.css('min-height', '100%');
                                    el.css('min-width', '100%');
                                }
                                else {
                                    el.css('height', 'auto');
                                    el.css('width', 'auto');
                                }
                            });
                        }
                    };
                }
            };
        });
})();
