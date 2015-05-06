(function () {
    'use strict';

    angular.module('common')
        .controller('SectionCtrl', function ($scope,$stateParams) {
            $scope.sectionName = $stateParams.sectionName;
            console.log($scope.sectionName);

        });
})();

