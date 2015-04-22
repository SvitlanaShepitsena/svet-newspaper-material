(function () {
    'use strict';

    angular.module('auth')
        .controller('UserCtrl', function ($scope, UserGroupsServ) {
            $scope.isInGroup = function (group) {
                return UserGroupsServ.isInGroup(group);

            };
        });
})();

