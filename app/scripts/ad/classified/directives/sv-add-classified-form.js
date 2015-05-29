(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svAddClassifiedForm', function (ClassifiedServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-add-classified-form.html',
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
                            description: ''
                        };
                    };
                    $scope.populateForm = function (cl) {
                        if (cl) {
                            $scope.clCopy = angular.copy(cl);
                        }
                        if (!cl) {
                            $scope.clCopy = {
                                name: faker.internet.userName(),
                                phone: faker.phone.phoneNumber(),
                                email: faker.internet.email(),
                                section: '',
                                city: faker.address.city(),
                                state: faker.address.state(),
                                title: faker.lorem.sentence(),
                                price: faker.finance.amount(),
                                description: faker.lorem.paragraph(2)
                            };
                        }
                    };
                    $scope.populateForm();
                }
            };
        });
})();
