(function () {
    'use strict';
    angular.module('classified')
        .directive('svPostClassifiedForm', function (ClassifiedServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-post-classified-form.html',
                link: function ($scope, el, attrs) {

                    $scope.sections = ClassifiedServ.getSections();

                    $scope.selectDropDown = function (section) {
                        $scope.cl.section = section.$value;
                    };
                    $scope.isInvalid = function (field) {
                        if ($scope.classifiedForm[field].$invalid) {
                            return $scope.classifiedForm.$submitted || $scope.classifiedForm[field].$touched
                        } else {
                            return false;
                        }
                    };
                    $scope.cancelAddition = function () {
                        $scope.addState = false;
                    };
                    $scope.postClassified = function () {
                        if ($scope.classifiedForm.$invalid) {
                            toastr.warning('Please fill required fields');
                            return;
                        }
                        $scope.cl.timestamp =


                        ClassifiedServ.addCl($scope.cl).then(function (uid) {
                            toastr.info('Your classified ad has been placed.Thank you')
                            $scope.resetForm();
                            $scope.populateForm();
                            $scope.addState = false;
                        });
                    };
                    $scope.resetForm = function () {
                        $scope.cl = {
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
                    $scope.populateForm = function () {
                        $scope.cl = {
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
                    };
                    $scope.populateForm();
                }
            };
        });
})();
