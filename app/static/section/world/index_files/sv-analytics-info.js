(function () {
    'use strict';

    angular.module('common')
        .directive('svAnalyticsInfo', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-analytics-info.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    gapi.analytics.ready(function () {

                        gapi.analytics.auth.authorize({
                            container: 'embed-api-auth-container',
                            clientid: '991720460723-mlnvtm42c5c8b2623r7ing1srdi9n326.apps.googleusercontent.com',
                        });

                        var viewSelector = new gapi.analytics.ViewSelector({
                            container: 'view-selector-container'
                        });

                        // Render the view selector to the page.
                        viewSelector.execute();

                        var dataChart = new gapi.analytics.googleCharts.DataChart({
                            query: {
                                metrics: 'ga:sessions',
                                dimensions: 'ga:date',
                                'start-date': '30daysAgo',
                                'end-date': 'yesterday'
                            },
                            chart: {
                                container: 'chart-container',
                                type: 'LINE',
                                options: {
                                    width: '100%'
                                }
                            }
                        });

                        viewSelector.on('change', function (ids) {
                            dataChart.set({query: {ids: ids}}).execute();
                        });

                    });
                }
            };
        });
})();
