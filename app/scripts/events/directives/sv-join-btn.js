(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function (EventServ, $rootScope, toastr, $state) {
            return {
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                require: ['svJoinBtn', '^svEventSidenavAd'],
                scope: {},
                bindToController: {
                    eventKey: '@'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                },

                link: function ($scope, el, attrs, ctrls) {
                    var ctrl = ctrls[0];
                    var sideNavCtrl = ctrls[1];

                    $rootScope.$watch('user', function (user) {
                        $scope.user = user;

                    });

                    var eventUsers = EventServ.getUsersRef(ctrl.eventKey);
                    eventUsers.$loaded().then(function () {
                        sideNavCtrl.setRegisteredUsers(eventUsers.length);


                        var foundUser = _.find(eventUsers, {'id': $rootScope.user.id});
                        ctrl.isUserJoined = foundUser ? true : false;
                    });
                    ctrl.joinEvent = function () {
                        EventServ.joinUser($scope.user, ctrl.eventKey).then(function () {
                            toastr.success('Thank you for joining event. See you then.');
                            ctrl.isUserJoined = true;
                            sideNavCtrl.addOneUser();
                            $state.go('app.events.field', {year: 2015});
                        })

                    },
                        ctrl.unlinkEvent = function () {
                            console.log('unlink');
                            EventServ.unlinkUser($scope.user, ctrl.eventKey).then(function () {
                                ctrl.isUserJoined = false;
                                sideNavCtrl.substractUser();
                                toastr.warning('You were unlinked from our Event');
                                //$state.go('app.field-event', {year: 2015});
                            })

                        }
                    //eventUsers.$watch(function (event) {
                    //    var foundUser = _.find(eventUsers, {id: $rootScope.user.id});
                    //    ctrl.isUserJoined = foundUser ? true : false;
                    //})
                }
            };
        });
})();
