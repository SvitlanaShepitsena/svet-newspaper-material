(function () {
    'use strict';

    angular.module('common')
        .controller('SectionCtrl', function ($scope,$stateParams) {
            $scope.sname = $stateParams.sname;

        });
})();

