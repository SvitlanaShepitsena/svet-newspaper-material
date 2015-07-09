(function () {
    'use strict';
    angular.module('sections.header')
        .directive('svLangSwitch', function ($translate) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/header/directives/sv-lang-switch.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var savedLang = $translate.use();
                    $scope.langEng = savedLang == 'en';
                    $scope.changeLanguage = function (key) {
                        $translate.use(key);
                        $scope.langEng = key == 'en';
                    };
                }
            };
        });
})();
