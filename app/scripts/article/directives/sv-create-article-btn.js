(function () {
    'use strict';

    angular.module('auth')
        .directive('svCreateArticleBtn', function (UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'sv-create-article-btn.html',
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
