(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserProfileSummary', function (UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-profile-summary.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);

                    };

                }
            };
        });
})();
