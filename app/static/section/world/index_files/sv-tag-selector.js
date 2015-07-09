(function () {
    'use strict';
    angular.module('article')
        .directive('svTagSelector', function () {
            return {
                link: function ($scope, el, attrs) {
                    var attrsArr = attrs.svTagSelector.split(' ');
                    var tags = attrsArr.slice(1);

                    $scope.$watchCollection(function () {
                        return $scope[collection];
                    }, function (newValue, oldValue) {
                        if (newValue) {
                            $scope.filteredList= _.take(newValue,3);
                            console.log($scope.filteredList);
                        }
                    });

                }
            };
        });
})();
