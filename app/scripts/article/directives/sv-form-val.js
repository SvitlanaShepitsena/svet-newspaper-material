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
                        var txtareas = el.find('textarea[required=""]');

                        var formElements = _.union(inputs, txtareas);
                        angular.forEach(formElements, function (formElement) {
                            attachMessages(formElement,formElement.name);
                        });

                        var radioGroup = el.find('md-radio-group');
                        var radioGroupsName = radioGroup.attr('name');
                        attachMessages(radioGroup,radioGroupsName);


                        function attachMessages(formElement, elementName) {
                            var fullFormElement = formName + '.' + elementName;
                            var fullFormElementError = fullFormElement + '.$error';
                            var messages = "<div ng-if='" + fullFormElement + ".$touched || " + formName + ".$submitted' ng-messages='" + fullFormElementError + "'>" +
                                "<div ng-messages-include='scripts/common/templates/form-error-messages.html'></div>" +
                                "</div>";
                            var messagesCompilled = $compile(messages)($scope);
                            angular.element(formElement).after(messagesCompilled);
                        }
                    }
                }
            };
        });
})();
