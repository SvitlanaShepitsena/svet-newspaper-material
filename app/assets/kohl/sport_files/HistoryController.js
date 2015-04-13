mainControllers.controller('HistoryController', [
    '$scope', '$location', '$routeParams', '$modal', 'IconService', 'HistoryService', '$sce', 'SiteService',
    function ($scope, $location, $routeParams, $modal, IconService, HistoryService, $sce, SiteService) {
        
        $scope.state = {
            isLoading: true,
            size: 24,
            viewBox: '0 0 24 24',
            dates: []
        };

        $scope.goToHome = function () {
            $location.url('/');
        };

        $scope.viewGitHub = function () {
            window.location = 'https://github.com/Templarian/MaterialDesign';
        };

        $scope.donate = function () {
            window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A7485AUJF2E9G';
        };

        $scope.diffModal = function (change) {
            $modal.open({
                templateUrl: '/app/views/modal/compare.html',
                controller: 'CompareController',
                windowClass: 'modal-compare-' + $scope.state.size,
                resolve: {
                    iconDataBefore: function () {
                        return change.iconDataBefore;
                    },
                    iconDataAfter: function () {
                        return change.iconDataAfter;
                    },
                    size: function () {
                        return $scope.state.size;
                    }
                }
            });
        };

        function init(packageId) {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var promiseHistory = HistoryService.getChanges(packageId);
            promiseHistory.then(function (changes) {
                var temp = null;
                angular.forEach(changes, function (change) {
                    var date = new Date(change.date);
                    change.text = $sce.trustAsHtml(change.text);
                    if (temp != date.getDate() + date.getMonth() + date.getFullYear()) {
                        $scope.state.dates.push({
                            month: months[date.getMonth()],
                            day: date.getDate(),
                            year: date.getFullYear(),
                            changes: [change]
                        });
                        temp = date.getDate() + date.getMonth() + date.getFullYear();
                    } else {
                        $scope.state.dates[$scope.state.dates.length - 1].changes.push(change);
                    }
                });
                $scope.state.isLoading = false;
            }, function () {
                alert('Failed to load history.');
            });
        }

        var promise = SiteService.getPackage();
        promise.then(function (pack) {
            $scope.state.size = pack.size;
            $scope.state.viewBox = '0 0 ' + pack.size + ' ' + pack.size;
            init(pack.id);
        }, function () {
            alert('Failed to load selected package.');
        });
    }
]);