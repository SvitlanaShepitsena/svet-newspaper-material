(function () {
    'use strict';
    angular.module('classified')
        .directive('svPostClassifiedForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-post-classified-form.html',
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.user = {
                        fname: ''
                    };
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
