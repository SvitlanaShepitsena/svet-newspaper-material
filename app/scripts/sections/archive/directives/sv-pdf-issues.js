(function () {
    'use strict';

    angular.module('sections.archive')
        .directive('svPdfIssues', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/archive/directives/sv-pdf-issues.html',
                scope: {
                    isSaturday: '=',
                    startIssue: '=',
                    issuesToShow: '='
                },
                link: function ($scope, el, attrs) {
                    var urlStart = 'assets/archive/' + ($scope.isSaturday ? 'saturday-plus/' : 'new-light/');
                    $scope.issues = [];
                    for (var i = $scope.startIssue; i <= $scope.startIssue + $scope.issuesToShow; i++) {
                        var issue = {
                            number: i,
                            img: $scope.isSaturday ? 'saturday' : 'new-svet',
                            url: urlStart + 'index.html'
                        };
                        $scope.issues.push(issue);
                    }

                }
            };
        });
})();
