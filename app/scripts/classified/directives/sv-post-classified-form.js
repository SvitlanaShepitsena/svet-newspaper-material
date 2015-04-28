(function () {
    'use strict';

    angular.module('classified')
        .directive('svPostClassifiedForm', function (ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-post-classified-form.html',
                link: function ($scope, el, attrs) {
                    //$scope.cl = {
                    //    name: faker.internet.userName(),
                    //    phone: faker.phone.phoneNumber(),
                    //    email: faker.internet.email(),
                    //    section:'',
                    //    city: faker.address.city(),
                    //    title: faker.hacker.noun(4),
                    //    price: faker.finance.amount(),
                    //    description: faker.lorem.paragraph(2)
                    //};

                    $scope.sections = ClassifiedServ.getSections();

                    $scope.selectDropDown = function (section) {
                        $scope.cl.section = section;
                    };

                    $scope.cl = {
                        name: '',
                        tel: '',
                        email: '',
                        city: '',
                        title: '',
                        price: '',
                        description: ''
                    };

                    $scope.isInvalid = function (field) {
                        if ($scope.classifiedForm[field].$invalid) {
                            return $scope.classifiedForm.$submitted || $scope.classifiedForm[field].$touched

                        } else{
                            return false;
                        }
                    };

                    $scope.cancelAddition = function () {
                        $scope.addState = false;

                    };
                }
            };
        });
})();
