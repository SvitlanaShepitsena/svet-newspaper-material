(function () {
    'use strict';

    angular.module('auth')
        .directive('svCreateArticleBtn', function (UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-create-article-btn.html',
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
