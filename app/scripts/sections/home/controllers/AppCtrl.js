(function () {
    'use strict';
    angular.module('sections.home')
        .controller('AppCtrl', function AppCtrl(NewsProcessServ, ArticleServ, $state, $scope, user, $rootScope, toastr) {
            $rootScope.$broadcast('user-resolved', user.profile);


            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                toastr.warning(error);
            })
            $rootScope.$on('error', function () {
                toastr.error('error');
            });
        });
})();

