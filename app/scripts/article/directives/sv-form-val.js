(function () {
    'use strict';
    angular.module('article')
        .directive('svFormVal', function ($compile) {
            return {
                require: '?^form',
                compile: function (elTemp) {
                    return function ($scope, el, attrs, ctrl) {
                        var formName = ctrl.$name;
                        var inputs = el.find('input[required=""]');
                        angular.forEach(inputs, function (input) {
                            var fullFormElement = formName + '.' + input.name;
                            var fullFormElementError = fullFormElement + '.$error';
                            var messages = "<div ng-if='" + fullFormElement + ".$touched' ng-messages='" + fullFormElementError + "'>" + "<div ng-messages-include='scripts/common/templates/form-error-messages.html'></div>" +
                                "</div>";
                            var messagesCompilled = $compile(messages)($scope);
                            angular.element(input).after(messagesCompilled);
                        })
                    }
                }
            };
        });
})();
