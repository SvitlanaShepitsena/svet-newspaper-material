(function () {
    'use strict';

    angular.module('common')
        .directive('svTestRepoInformer', function (domain) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-test-repo-informer.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.isTestDomain = domain === 'test';

                }
            };
        });
})();
