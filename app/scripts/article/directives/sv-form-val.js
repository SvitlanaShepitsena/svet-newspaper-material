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
                        var radioGroups = el.find('md-radio-group');
                        var formElements= _.union(inputs,radioGroups);

                        angular.forEach(formElements, function (formElement) {
                            var fullFormElement = formName + '.' + formElement.name;
                            var fullFormElementError = fullFormElement + '.$error';
                            var messages = "<div ng-if='" + fullFormElement + ".$touched || "+formName+".$submitted' ng-messages='" + fullFormElementError + "'>" +
                                "<div ng-messages-include='scripts/common/templates/form-error-messages.html'></div>" +
                                "</div>";
                            var messagesCompilled = $compile(messages)($scope);
                            angular.element(formElement).after(messagesCompilled);
                        })
                    }
                }
            };
        });
})();
