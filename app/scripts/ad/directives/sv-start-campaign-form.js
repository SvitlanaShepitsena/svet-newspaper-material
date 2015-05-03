(function () {
    'use strict';

    angular.module('ad')
        .directive('svStartCampaignForm', function (AdServ, $state, toastr) {
            return {
                templateUrl: 'scripts/ad/directives/sv-start-campaign-form.html',
                scope: {},
                link: function ($scope, el, attrs) {

                    $scope.ad = {
                        name: "Ad Campaign " + _.random(1, 99),
                        place: _.random(0, 1) === 1 ? "home.top":"home.middle",
                        banner: ""
                    }

                    $scope.addBusinessAd = function (ad, file) {

                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file.file);
                        fileReader.onload = function (event) {
                            $scope.ad.banner = event.target.result;

                            AdServ.saveAd($scope.ad).then(function (key) {
                                $state.go('^');
                                toastr.info('Your Ad Campaign has been saved');

                            });
                        };

                    };
                }
            };
        });
})();
