(function () {
    'use strict';

    angular.module('ad')
        .directive('svStartCampaignForm', function () {
            return {
                templateUrl: 'scripts/ad/directives/sv-start-campaign-form.html',
                scope: {},
                link: function ($scope, el, attrs) {

                    $scope.ad = {
                        name: "",
                        place: "home.top",
                        banner: ""
                    }

                    $scope.addBusinessAd = function (ad, file) {

                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file.file);
                        fileReader.onload = function (event) {
                            $scope.ad.banner = event.target.result;
                        };

                    };
                }
            };
        });
})();
