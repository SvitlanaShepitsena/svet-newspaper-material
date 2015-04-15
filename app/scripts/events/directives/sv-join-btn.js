(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function (EventServ, $rootScope, toastr, $state) {
            return {
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                require: ['svJoinBtn', '^?svEventSidenavAd', '^?svKohlEvent2015'],
                scope: {},
                bindToController: {
                    eventKey: '@'
                },
                controllerAs: 'ctrl',
                controller: function svJoinBtnCtrl($scope) {
                    var ctrl = this;
                    $scope.$on('add-event-user', function () {
                        ctrl.isUserJoined = true;
                    });

                    $scope.$on('remove-event-user', function () {
                        ctrl.isUserJoined = false;
                    });
                },

                link: function ($scope, el, attrs, ctrls) {
                    var ctrl = ctrls[0];
                    var familiesContainerCtrl = ctrls[1] || ctrls[2];

                    $rootScope.$watch('user', function (user) {
                        $scope.user = user;

                    });

                    var eventUsers = EventServ.getUsersRef(ctrl.eventKey);
                    eventUsers.$loaded().then(function () {
                        familiesContainerCtrl.setRegisteredUsers(eventUsers.length);

                        if ($rootScope.user) {
                            var foundUser = _.find(eventUsers, {'id': $rootScope.user.id});
                            ctrl.isUserJoined = foundUser ? true : false;
                        }
                    });
                    ctrl.joinEvent = function () {
                        EventServ.joinUser($scope.user, ctrl.eventKey).then(function () {
                            toastr.success('Thank you for joining event. See you then.');
                            ctrl.isUserJoined = true;
                            $rootScope.$broadcast('add-event-user');

                            $state.go('app.events.field', {year: 2015});
                        })

                    },
                        ctrl.unlinkEvent = function () {
                            console.log('unlink');
                            EventServ.unlinkUser($scope.user, ctrl.eventKey).then(function () {
                                ctrl.isUserJoined = false;
                                $rootScope.$broadcast('remove-event-user');
                                toastr.warning('You were unlinked from our Event');
                                //$state.go('app.field-event', {year: 2015});
                            })

                        }
                }
            };
        });
})();
