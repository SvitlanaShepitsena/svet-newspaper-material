mainControllers.controller('CustomController', [
    '$scope', '$location', 'IconService',
    function ($scope, $location, IconService) {

        $scope.goToHome = function () {
            $location.url('/');
        };

        $scope.viewGitHub = function () {
            window.location = 'https://github.com/Templarian/MaterialDesign';
        };

        $scope.donate = function () {
            window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A7485AUJF2E9G';
        };

        $scope.customForm = {
            icons: [null]
        };

        $scope.downloadPackage = function (pack) {
            var promise = IconService.setCustomIcon($scope.customForm);
            promise.then(function () {
                window.location = '/api/download/package/00000000-0000-0000-0000-000000000000/' + pack;
            }, function () {
                alert('Sorry, retrieving download package has failed. Please try again.');
            });
        };

        $scope.customFormat = {
            start: 'Name,Author,Data\r\n',
            end: '',
            format: '{name},{author},"{data}"\r\n',
            download: function (packageId) {
                window.location = '/api/custom/' + packageId +
                    '?format=' + encodeURIComponent(this.format) +
                    (this.start == '' ? '' : '&start=' + encodeURIComponent(this.start)) +
                    (this.end == '' ? '' : '&end=' + encodeURIComponent(this.end));
            }
        };

    }
]);