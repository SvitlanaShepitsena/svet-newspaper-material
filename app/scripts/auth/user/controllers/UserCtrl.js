(function () {
    'use strict';

    angular.module('auth.user')
        .controller('UserCtrl', function ($scope, UserGroupsServ) {
            $scope.isInGroup = function (group) {
                return UserGroupsServ.isInGroup(group);

            };
        });
})();

