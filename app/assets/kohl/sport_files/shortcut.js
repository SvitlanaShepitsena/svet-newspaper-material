angular.module('ui.bootstrap.shortcut', [])

.directive('shortcut', [
    '$document',
    '$rootScope',
    function ($document, $rootScope) {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var handler = function (e) {
                    var keyCode = attrs.shortcut.toUpperCase().charCodeAt(0)
                    if (attrs.shortcutCtrl == '') {
                        if (e.ctrlKey && e.keyCode == keyCode) {
                            scope.$eval(attrs.shortcut.substr(2));
                            scope.$apply();
                            e.preventDefault();
                        }
                    } else {
                        if (e.keyCode == keyCode) {
                            scope.$eval(attrs.shortcut.substr(2));
                            scope.$apply();
                            e.preventDefault();
                        }
                    }
                };
                $document.bind('keydown', handler);
                element.on('$destroy', function () {
                    $document.unbind('keydown', handler);
                });
                
            }
        };
    }
]);