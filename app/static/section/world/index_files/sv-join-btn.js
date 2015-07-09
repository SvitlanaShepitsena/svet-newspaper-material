(function () {
    'use strict';
    angular.module('events')
        .directive('svJoinBtn', function (EventServ, userAuth, toastr, $state) {
            return {
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                require: ['svJoinBtn', '^?svEventSidenavAd', '^?svKohlEvent2015'],
                scope: {
                    titleJoin: '@',
                    titleUnlink: '@',
                    joinTip: '@',
                    unlinkTip: '@',
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
                    $scope.$watch(function () {
                        return userAuth.profile;
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                    });
                    var eventUsers = EventServ.getUsersArrayRef(ctrl.eventKey);
                    eventUsers.$loaded().then(function () {
                        if (userAuth.profile) {
                            var foundUser = _.find(eventUsers, {'id': userAuth.profile.id});
                            ctrl.isUserJoined = foundUser ? true : false;
                            eventUsers.$watch(function (event) {
                                var foundUser = _.find(eventUsers, {'id': userAuth.profile.id});
                                ctrl.isUserJoined = foundUser ? true : false;
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
