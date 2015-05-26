(function () {
    'use strict';
    angular.module('events')
        .directive('svNewAfishaEventForm', function (ConnectionEventServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-new-afisha-event-form.html',
                link: function ($scope, el, attrs) {
                    // Scaffold Data
                    $scope.event = {
                        title: "New Event #" + _.random(0, 100),
                        startsAt: moment($scope.clickedDate).add(10,'h').toDate(),
                        endsAt: moment($scope.clickedDate).add(13,'h').toDate(),
                        address: faker.address.streetAddress() + " Chicago, IL, 60634",
                        location:'Copernicus Center',
                        locationWeb:faker.internet.domainName(),
                        about:"http://"+faker.lorem.paragraph()+'.com',
                        tickets:'http://www.ticketmaster.com/'
                    };
                    $scope.event.date = $scope.clickedDate;


                    $scope.$watchCollection('$flow.files', function (images) {
                        if (!images) {
                            return;
                        }
                        if (!images.length) {
                            return
                        }
                        var lastImg = _.last(images);
                        $scope.$flow.files[0] = lastImg;
                        var file = lastImg;
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file.file);
                        fileReader.onload = function (event) {
                            $scope.event.img = event.target.result;
                        };
                    });


                    $scope.createAfishaEvent = function () {
                        ConnectionEventServ.savePublicEvent($scope.event).then(function () {
                            toastr.info('Thank you for event addition.');
                            $scope.hide();
                        });
                    };
                }
            };
        });
})();
