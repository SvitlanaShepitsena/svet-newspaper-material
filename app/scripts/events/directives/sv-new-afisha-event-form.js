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
                        address: faker.address.streetAddress() + " Chicago, IL, 60634"
                    };
                    $scope.event.date = $scope.clickedDate;
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
