(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function (EventServ, $rootScope, toastr,$state) {
            return {
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                scope: {},
                bindToController: {
                    eventKey: '@'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.joinEvent = function () {
                        EventServ.joinUser($scope.user, ctrl.eventKey).then(function () {
                            toastr.success('Thank you for joining event. See you then.');
                            $state.go('app.field-event',{year:2015});
                        })

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
