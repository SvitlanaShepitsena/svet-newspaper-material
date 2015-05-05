(function () {
    'use strict';
    angular.module('home')
        .directive('svLangSwitch', function ($translate) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-lang-switch.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    var savedLang = $translate.use();
                    ctrl.langEng = savedLang == 'en';
                    ctrl.changeLanguage = function (key) {
                        $translate.use(key);
                        ctrl.langEng = key == 'en';
                    };
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
