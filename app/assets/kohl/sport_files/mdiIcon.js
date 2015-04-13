mainApp.directive('mdiIcon', [
    '$parse', '$http',
    function ($parse, $http) {
        var svgns = 'http://www.w3.org/2000/svg';
        var map = function (dom1, dom2, attrs) {
            for (var i = 0, c = attrs.length; i < c; i++) {
                dom1.setAttributeNS(null, attrs[i], dom2.getAttribute(attrs[i]) || '');
            }
        };
        var success = function (svg, element) {
            var processLinearGradients = function () {
                if (!window.linearGradientId) { window.linearGradientId = 0; }
                svg.replace(/<linear[\s\S]+?Gradient>/ig, function (match, offset, s) {
                    var linearGradientDom = angular.element(match)[0],
                        linearGradient = document.createElementNS(svgns, 'linearGradient'),
                        newLinearGradientId = 'linearGradient' + (++linearGradientId);
                    svg = svg.replace('url(#' + linearGradientDom.getAttribute('id') + ')', 'url(#' + newLinearGradientId + ')');
                    linearGradient.setAttribute('id', newLinearGradientId);
                    map(linearGradient, linearGradientDom, ['x1', 'y1', 'x2', 'y2', 'gradientTransform']);
                    var nodes = linearGradientDom.childNodes;
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].nodeName == 'STOP') {
                            var stop = document.createElementNS(svgns, 'stop');
                            map(stop, nodes[i], ['offset', 'stop-color', 'stop-opacity']);
                            linearGradient.appendChild(stop);
                        }
                    }
                    element.append(linearGradient);
                });
            };
            var processRadialGradients = function () {
                if (!window.radialGradientId) { window.radialGradientId = 0; }
                svg.replace(/<radial[\s\S]+?Gradient>/ig, function (match, offset, s) {
                    var radialGradientDom = angular.element(match)[0],
                        radialGradient = document.createElementNS(svgns, 'radialGradient'),
                        newRadialGradientId = 'radialGradient' + (++radialGradientId);
                    svg = svg.replace('url(#' + radialGradientDom.getAttribute('id') + ')', 'url(#' + newRadialGradientId + ')');
                    radialGradient.setAttribute('id', newRadialGradientId);
                    map(radialGradient, radialGradientDom, ['cx', 'cy', 'r', 'fx', 'fy']);
                    var nodes = radialGradientDom.childNodes;
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].nodeName == 'STOP') {
                            var stop = document.createElementNS(svgns, 'stop');
                            map(stop, nodes[i], ['offset', 'stop-color', 'stop-opacity']);
                            radialGradient.appendChild(stop);
                        }
                    }
                    element.append(radialGradient);
                });
            };
            var processPaths = function () {
                var layer = 0;
                svg.replace(/<path[\s\S]+?\/>/ig, function (match, offset, s) {
                    var pathDom = angular.element(match)[0],
                        path = document.createElementNS(svgns, 'path');
                    map(path, pathDom, ['fill', 'd']);
                    path.setAttribute('class', 'path-' + (++layer));
                    element.append(path);
                });
            };
            processLinearGradients();
            processRadialGradients();
            processPaths();
        };
        return {
            restrict: 'E',
            template: '<svg viewBox="0 0 24 24"></svg>',
            replace: true,
            link: function (scope, element, attrs) {
                attrs.$observe('src', function (value) {
                    if (value != '') {
                        $http.get('/' + value + '.svg').then(function (response) {
                            success(response.data, element, attrs);
                        }, function () {
                            // Error
                        });
                    }
                });
                attrs.$observe('size', function (value) {
                    if (value && value != '') {
                        element.css({
                            width: value,
                            height: value
                        });
                    }
                });
                attrs.$observe('color', function (value) {
                    if (value && value != '') {
                        // #FFFFFF or rgb(255,255,255) or rgba(255,255,255,0.2)
                        element.css({
                            width: value,
                            height: value
                        });
                    }
                });
            }
        };
    }
]);