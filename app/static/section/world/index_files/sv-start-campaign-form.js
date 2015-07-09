(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svStartCampaignForm', function (AdServ, $state, toastr, userAuth, UsersServ) {
            return {
                templateUrl: 'scripts/ad/promotion/directives/sv-start-campaign-form.html',
                scope: {
                    id: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    if ($scope.user.isManager()) {
                        UsersServ.allCustomersList().then(function (customers) {
                            $scope.customers = customers;
                        })
                    }
                    if (!$scope.id) {
                        $scope.ad = {
                            name: "Campaign Name " + _.random(1, 99),
                            banner: ""
                        }
                    }
                    else {
                        $scope.ad = AdServ.getObj($scope.id);
                    }
                    $scope.addBusinessAd = function (ad, file, formValid) {
                        if (formValid) {
                            if (!file) {
                                if ($scope.id) {
                                    AdServ.updateAd($scope.ad).then(function (key) {
                                        $state.go('^');
                                        toastr.info('Your Ad Campaign has been saved');
                                    });
                                } else {
                                    AdServ.saveAd($scope.ad).then(function (key) {
                                        $state.go('^');
                                        toastr.info('Your Ad Campaign has been saved');
                                    });
                                }
                                return;
                            }
                            var fileReader = new FileReader();
                            fileReader.readAsDataURL(file.file);
                            fileReader.onload = function (event) {
                                $scope.ad.banner = event.target.result;
                                if ($scope.id) {
                                    AdServ.updateAd($scope.ad).then(function (key) {
                                        $state.go('^');
                                        toastr.info('Your Ad Campaign has been saved');
                                    });
                                } else {
                                    AdServ.saveAd($scope.ad, $scope.customers).then(function (key) {
                                        $state.go('^');
                                        toastr.info('Your Ad Campaign has been saved');
                                    });
                                }
                            };
                        }
                        ;
                    };
                }
            };
        });
})();
