(function () {
    'use strict';
    angular.module('sections.home')
        .controller('AppCtrl', function AppCtrl(NewsProcessServ, userPromise, ArticleServ, $state, $scope, user, $rootScope, toastr) {
            //$scope.user=userPromise;
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                toastr.warning(error);
            })
            var currentState = _.last(_.keys($state.$current.includes));
            if (currentState.indexOf('app.user') > -1 && user.groups.indexOf('manager') > -1) {
                $state.go('app.manager.dashboard', {uid: user.uid});
            }
            if (currentState.indexOf('app.manager') > -1 && user.groups.indexOf('reader') > -1) {
                $state.go('app.user.dashboard', {uid: user.userName});
            }
            $rootScope.$on('error', function () {
                toastr.error('error');
            });
            $scope.$on('logout', function () {
                $scope.user = null;
                user = null;
            });
        });
})();

