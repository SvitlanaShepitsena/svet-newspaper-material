(function () {
    'use strict';

    angular.module('home')
        .directive('svLangSwitch', function ($translate) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-lang-switch.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.changeLanguage = function (key) {
                        $translate.use(key);
                    };

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
