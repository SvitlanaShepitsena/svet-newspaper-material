(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserPersonalInfo', function (UserServ, toastr, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-personal-info.html',
                link: function ($scope, el, attrs) {
                    $scope.props = UserServ.selectPublicProperties(CurrentUserServ.get());
                    $scope.saveUserProperty = function (property) {
                        UserServ.saveUserProperty(property, CurrentUserServ.get().key).then(function (success) {
                            toastr.success('Saved');
                        })
                    };
                }
            };
        });
})();
