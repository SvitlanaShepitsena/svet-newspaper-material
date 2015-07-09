(function () {
    'use strict';
    angular.module('events')
        .directive('svOneEvent', function (userAuth, EventServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event.html',
                scope: {
                    event: '=',
                    hide: '&dialogHide'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    $scope.isRegistered = userAuth.profile && !!_.find($scope.event.users, {userName: userAuth.profile.userName});
                    console.log($scope.isRegistered);
                    $scope.isDialog = function () {
                        return attrs.dialogHide;
                    };
                    $scope.registerToEvent = function () {
                        EventServ.joinUser(userAuth, $scope.event).then(function () {
                            toastr.info('You have joined event');
                            $scope.isRegistered = true;
                        })
                    };
                    $scope.unRegisterFromEvent = function () {
                        EventServ.unlinkUser(userAuth, $scope.event.$id).then(function () {
                            toastr.warning('You have unlinked from  event');
                            $scope.isRegistered = false;
                        })
                    };
                }
            };
        });
})();
