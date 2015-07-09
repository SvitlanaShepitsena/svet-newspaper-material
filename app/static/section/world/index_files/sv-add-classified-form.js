(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svAddClassifiedForm', function (ClassifiedServ, toastr, $mdDialog) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-add-classified-form.html',
                controller: function ($scope) {
                    $scope.termsConditionsClassifiedModal = function () {
                        $mdDialog.show(
                            {
                                controller: TermsConditionsClassifiedController,
                                templateUrl: 'scripts/common/views/terms-conditions-classified.html',
                            }
                        );
                    };
                    function TermsConditionsClassifiedController($scope, $mdDialog) {
                        $scope.hide = function () {
                            $mdDialog.hide();
                        };
                        $scope.cancel = function () {
                            $mdDialog.cancel();
                        };
                        $scope.answer = function (answer) {
                            $mdDialog.hide(answer);
                        };
                    }
                },
                link: function ($scope, el, attrs) {
                    $scope.sections = ClassifiedServ.getSections();
                    $scope.isInvalid = function (field) {
                        if ($scope.classifiedForm[field].$invalid) {
                            return $scope.classifiedForm.$submitted || $scope.classifiedForm[field].$touched
                        } else {
                            return false;
                        }
                    };
                    $scope.cancelAddition = function () {
                        if ($scope.editState) {
                            $scope.cl = $scope.clCopy;
                        }
                        $scope.addState = false;
                        $scope.editState = false;
                        $scope.classifiedForm.$pristine = true;
                        $scope.resetForm();
                        $scope.populateForm();
                    };
                    $scope.postClassified = function (clCopy) {
                        if ($scope.classifiedForm.$invalid) {
                            toastr.warning('Please fill required fields');
                            return;
                        }
                        clCopy.timestamp = moment().format('x');
                        if (clCopy.$id) {
                            ClassifiedServ.editCl(clCopy).then(function (uid) {
                                toastr.success('Your classified ad has been updated.Thank you')
                                $scope.resetForm();
                                $scope.populateForm();
                                $scope.addState = false;
                                $scope.editState = false;
                            });
                        } else {
                            ClassifiedServ.addCl(clCopy).then(function (uid) {
                                toastr.success('Your classified ad has been placed.Thank you')
                                $scope.resetForm();
                                $scope.populateForm();
                                $scope.addState = false;
                                $scope.editState = false;
                            });
                        }
                    };
                    $scope.resetForm = function () {
                        $scope.clCopy = {
                            name: '',
                            tel: '',
                            email: '',
                            city: '',
                            state: '',
                            title: '',
                            price: '',
                            acceptClassifiedPolicy: '',
                            description: ''
                        };
                    };
                    $scope.populateForm = function (cl) {
                        if (cl) {
                            $scope.clCopy = angular.copy(cl);
                        }
                        if (!cl) {
                            $scope.clCopy = {
                                name: '',
                                tel: '',
                                email: '',
                                city: '',
                                state: '',
                                title: '',
                                price: '',
                                acceptClassifiedPolicy: '',
                                description: ''
                            };
                        }
                    };
                    $scope.populateForm();
                }
            };
        });
})();
