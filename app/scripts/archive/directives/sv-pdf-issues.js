(function () {
    'use strict';

    angular.module('archive')
        .directive('svPdfIssues', function () {
            return {
                replace: true,
                templateUrl: 'scripts/archive/directives/sv-pdf-issues.html',
                scope: {},
                bindToController: {
                    isSaturday: '=',
                    startIssue: '=',
                    issuesToShow: '='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    var urlStart = 'assets/archive/' + (ctrl.isSaturday ? 'saturday-plus/' : 'new-light/');
                    ctrl.issues = [];
                    for (var i = ctrl.startIssue; i <= ctrl.startIssue+ctrl.issuesToShow; i++) {
                        var issue = {
                            number: i,
                            img: faker.image.animals(100, 200),
                            url: urlStart + 'index.html'
                        };
                        ctrl.issues.push(issue);

                    }


                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
