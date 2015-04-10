(function () {
    'use strict';

    angular.module('home')
        .directive('svLangSwitch', function ($translate) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-lang-switch.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.langEng = true;

                    ctrl.changeLanguage = function (key) {
                        $translate.use(key);
                        ctrl.langEng = key == 'en';
                        console.log(ctrl.langEng);
                    };
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
