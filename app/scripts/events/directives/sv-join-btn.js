(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function (EventServ, $rootScope, toastr, $state) {
            return {
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                require: ['svJoinBtn', '^?svEventSidenavAd', '^?svKohlEvent2015'],
                scope: {
                    titleJoin: '@',
                    titleUnlink: '@',
                    btnSize: '@'
                },
                bindToController: {
                    eventKey: '@'
                },
                controllerAs: 'ctrl',
                controller: function svJoinBtnCtrl($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs, ctrls) {
                    var ctrl = ctrls[0];

                    $rootScope.$watch('user', function (user) {
                        $scope.user = user;

                    });

                    var eventUsers = EventServ.getUsersArrayRef(ctrl.eventKey);
                    eventUsers.$loaded().then(function () {
                        if ($rootScope.user) {

                            var foundUser = _.find(eventUsers, {'id': $rootScope.user.id});
                            ctrl.isUserJoined = foundUser ? true : false;
                            eventUsers.$watch(function (event) {
                                if (event.event === 'child_removed'&&event.key == $rootScope.user.id) {
                                    ctrl.isUserJoined = false;

                                }
                                if (event.event === 'child_added'&&event.key == $rootScope.user.id) {
                                    ctrl.isUserJoined = true;

                                }
                            })
                        }
                    });
                    ctrl.joinEvent = function () {
                        EventServ.joinUser($scope.user, ctrl.eventKey).then(function () {
                            toastr.success('Thank you for joining event. See you then.');

                            $state.go('app.events.field', {year: 2015});
                        })

                    },
                        ctrl.unlinkEvent = function () {
                            EventServ.unlinkUser($scope.user, ctrl.eventKey).then(function () {

                                toastr.warning('You were unlinked from our Event');
                            })

                        }
                }
            };
        });
})();
