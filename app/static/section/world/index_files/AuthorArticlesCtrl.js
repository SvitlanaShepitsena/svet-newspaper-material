(function () {
    'use strict';
    angular.module('auth.user')
        .controller('AuthorArticlesCtrl', function ($scope, userAuth) {

            $scope.user = userAuth.profile;
        });
})();

