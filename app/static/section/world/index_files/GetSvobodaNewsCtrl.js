(function () {
    'use strict';
    angular.module('sections.contact')
        .controller('GetSvobodaNewsCtrl', function ($scope,toastr, NewsGeneratorServ) {
            $scope.regenerate = function () {
                NewsGeneratorServ.getGenerateNewsWithImages().then(function () {
                    toastr.info('Svoboda news updated');
                });
            };
        });
})();

