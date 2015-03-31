(function () {
    'use strict';

    angular.module('classified')
        .controller('ClassifiedCtrl', function ($scope, $log) {
            var classified = this;
            var tabs = [
                    {title: 'Община', content: "Here are classified for community"},
                    {title: 'Продается', content: "Here are classified for sale."},
                    {title: 'Работа', content: "Here are classified for jobs"},
                    {title: 'Услуги', content: "Here are classified for services"},
                    {title: 'Недвижимость', content: "Here are classified for housing"},
                    {title: 'Авто', content: "Here are classified for cars"},
                    {title: 'Знакомства', content: "Here are classified for personal"}
                ],
                selected = null,
                previous = null;
            $scope.tabs = tabs;
            $scope.selectedIndex = 2;
            $scope.$watch('selectedIndex', function (current, old) {
                previous = selected;
                selected = tabs[current];
                if (old && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
                if (current)                $log.debug('Hello ' + selected.title + '!');
            });
        });
})();

