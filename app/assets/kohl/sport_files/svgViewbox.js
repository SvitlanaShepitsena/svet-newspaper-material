mainApp.directive('svgViewbox', function () {
    return {
        link: function (scope, element, attrs) {
            attrs.$observe('svgViewbox', function (value) {
                element.get(0).setAttribute("viewBox", value);
            });
        }
    };
});