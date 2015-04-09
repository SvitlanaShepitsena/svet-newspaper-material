(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function (EventServ, $rootScope) {
            return {
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.joinEvent = function () {

                    }
                },

                link: function ($scope, el, attrs) {
                    $rootScope.$watch('user', function (user) {
                        $scope.user = user;

                    })
                }
            };
        });
})();
