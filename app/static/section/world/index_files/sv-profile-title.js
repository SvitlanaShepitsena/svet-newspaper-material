(function () {
    'use strict';
    angular.module('common')
        .directive('svProfileTitle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-profile-title.html',
                scope: {
                    headerTitle: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.headerTitle= _.snakeCase(_.startCase($scope.headerTitle));
                }
            };
        });
})();
