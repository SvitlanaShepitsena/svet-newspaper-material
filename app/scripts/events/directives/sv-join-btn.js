(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function (EventServ, $rootScope, toastr, $state) {
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
                            $state.go('app.field-event', {year: 2015});
                        })

                    }

                    var eventUsers = EventServ.getUsersRef(ctrl.eventKey);
                    eventUsers.$loaded().then(function () {
                        var foundUser = _.find(eventUsers, {'id': $rootScope.user.id});
                        ctrl.isUserJoined = foundUser ? true : false;
                    });

                    //eventUsers.$watch(function (event) {
                    //    var foundUser = _.find(eventUsers, {id: $rootScope.user.id});
                    //    ctrl.isUserJoined = foundUser ? true : false;
                    //})
                },

                link: function ($scope, el, attrs) {
                    $rootScope.$watch('user', function (user) {
                        $scope.user = user;

                    });
                }
            };
        });
})();
