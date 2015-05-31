(function () {
    'use strict';
    angular.module('events')
        .directive('svOneEvent', function (userAuth, EventServ) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event.html',
                scope: {
                    event: '=',
                    hide: '&dialogHide'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    $scope.isDialog = function () {
                        return attrs.dialogHide;
                    };
                    $scope.registerToEvent = function () {
                        EventServ.joinUser(userAuth, $scope.event).then(function () {
                            alert('done');
                        })

                    };
                }
            };
        });
})();
