(function () {
    'use strict';
    angular.module('events')
        .directive('svNewAfishaEventForm', function (ConnectionEventServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-new-afisha-event-form.html',
                link: function ($scope, el, attrs) {
                    if (!$scope.editState) {
                        // Scaffold Data
                        $scope.event = {
                            title: '',
                            startsAt: moment($scope.clickedDate).add(10, 'h').startOf('hour').toDate(),
                            endsAt: moment($scope.clickedDate).add(13, 'h').startOf('hour').toDate(),
                            address: '',
                            location: '',
                            locationWeb: "http://" + "" + '.com',
                            about: '',
                            tickets: 'http://www.ticketmaster.com/'
                        };
                        $scope.event.date = $scope.clickedDate;
                    } else {
                        $scope.event.date = $scope.event.startsAt;
                    }
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
                    $scope.createAfishaEvent = function (formValid) {
                        if (formValid) {
                            ConnectionEventServ.savePublicEvent($scope.event).then(function () {
                                toastr.info('Thank you for creating an event.');
                                $scope.hide();
                            });
                        }
                    };
                }
            };
        });
})();
