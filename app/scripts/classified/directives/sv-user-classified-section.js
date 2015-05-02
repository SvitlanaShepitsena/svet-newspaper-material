(function () {
    'use strict';
    angular.module('classified')
        .directive('svUserClassifiedSection', function (CurrentUserServ, ClassifiedServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-user-classified-section.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = CurrentUserServ.get();
                    var cls = ClassifiedServ.getAllCls();
                    cls.$loaded().then(function () {
                        $scope.cls = cls;
                    })
                    $scope.removeCl = function (cl) {
                        ClassifiedServ.removeCl(cl).then(function (success) {
                            toastr.warning('Your classified removed');
                        })
                    };
                    $scope.editCl = function (cl) {
                        $scope.editState = true;
                        $scope.populateForm(cl);
                    };
                }
            };
        });
})();
