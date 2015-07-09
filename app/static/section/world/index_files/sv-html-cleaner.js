(function () {
    'use strict';

    angular.module('article')
        .directive('svHtmlCleaner', function (str) {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch('article.body', function (newValue, oldValue) {
                        if (newValue === oldValue) return;

                        var val = newValue;
                        //var val = (str(newValue, 'stripTags'));


                        var str='style="color: rgb(1, 1, 1);float: none;background-color: rgb(255, 255, 255);">';
                        str.replace(/style=".+/g)
                        //val = (str(val, 'unescapeHTML'));
                        //$scope.article.body = '<p>' + val + '<p/>';
                    });

                }
            };
        });
})();
