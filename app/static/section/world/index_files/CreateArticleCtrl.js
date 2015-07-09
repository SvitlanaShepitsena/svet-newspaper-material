(function () {
    'use strict';
    angular.module('auth.user')
        .controller('CreateArticleCtrl', function ($scope, $stateParams) {
            $scope.artId = $stateParams.artId;
            $scope.artType = $stateParams.artType;
        });
})();

