(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserPersonalInfo', function (UserServ, $rootScope,toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-personal-info.html',
                link: function ($scope, el, attrs) {


                    $scope.props = UserServ.selectPublicProperties($rootScope.user);

                    $scope.saveUserProperty = function (property) {
                        UserServ.saveUserProperty(property,$rootScope.user.id).then(function (success) {
                           toastr.success('Saved') ;
                        })

                    };




                }

            };
        });
})();
