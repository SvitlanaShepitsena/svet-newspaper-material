mainServices.service('HistoryService', [
    '$http', '$q',
    function ($http, $q) {

        this.getChanges = function (packageId) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/history/' + packageId,
                cache: true
            }).
            success(function (data, status, headers, config) {
                angular.forEach(data, function (change) {
                    change.canDiff = false;
                    if (change.modification == '66B9FA99-1FAA-4D8F-B87F-B6F3CA444624') {
                        change.icon.data = 'M5.12,5L5.93,4H17.93L18.87,5M12,17.5L6.5,12H10V10H14V12H17.5L12,17.5M20.54,5.23L19.15,3.55C18.88,3.21 18.47,3 18,3H6C5.53,3 5.12,3.21 4.84,3.55L3.46,5.23C3.17,5.57 3,6 3,6.5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V6.5C21,6 20.83,5.57 20.54,5.23Z';
                        change.icon.color = '#E3F2FD';
                        change.canReport = false;
                    } else if (change.modification == 'AFFE875E-01BC-4A34-9BE3-27625A155B28') {
                        change.text = "Created `" + change.icon.name + "`";
                        change.icon.color = '#E8F5E9';
                        change.canReport = true;
                    } else if (change.modification == 'B4DEB3A8-A146-4086-9D7B-B67842A9CCB8') {
                        change.icon.data = 'M20,11H4V8H20M20,13H13V12H20M20,15H13V14H20M20,17H13V16H20M20,19H13V18H20M12,19H4V12H12M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z';
                        change.icon.color = '#FFFDE7';
                        change.canReport = false;
                    } else if (change.modification == 'B1CE1713-A18A-4E9D-9E26-D0B4E44A1FAC') {
                        change.text = "Removed `" + change.icon.name + "`";
                        change.icon.color = '#FFEBEE';
                        change.canReport = false;
                    } else if (change.modification == '1506F66B-CC2A-4575-A20A-DC138628977A') {
                        change.icon.data = change.iconDataAfter;
                        change.text = "Modified `" + change.icon.name + "`";
                        change.icon.color = '#EDE7F6';
                        change.canReport = true;
                        change.canDiff = true;
                    } else if (change.modification == 'F7B6D49B-A86F-49AC-AF92-6B9D0DF6188B') {
                        change.text = "Renamed `" + change.iconNameBefore + "` to `" + change.iconNameAfter + "`";
                        change.icon.color = '#FFF';
                        change.canReport = true;
                    } else {
                        change.icon.color = '#FFF';
                        change.canReport = true;
                    }
                    change.text = change.text.replace(/`(.+?)`/g, "<code>$1</code>").replace(/\[([^\]]+)\]\(([^\)]+)\)/, '<a href="$2">$1</a>');
                });
                deferred.resolve(data);
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

    }
]);