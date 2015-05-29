(function () {
    'use strict';
    angular.module('common')
        .directive('svFormVal', function ($compile) {
            return {
                restrict: 'A',
                /*Require another directive and inject its controller as the fourth argument to the linking function
                 */
                require: '?^form',
                compile: function (elTemp, attr) {
                    return function ($scope, el, attr, ctrl) {
                        var formName = ctrl.$name;
                        /*find required form elements with JQuery*/
                        var inputs = el.find('input[required=""]');
                        var txtareas = el.find('textarea[required=""]');
                        /*combine two arrays in one with Lodash method*/
                        var formElements = _.union(inputs, txtareas);
                        /*attached compiled message to each element of array*/
                        angular.forEach(formElements, function (formElement) {
                            attachMessages(formElement, formElement.name);
                        });
                        var radioGroup = el.find('md-radio-group[required=""]');
                        /*get element name with JQuery*/
                        var radioGroupName = radioGroup.attr('name');
                        attachMessages(radioGroup, radioGroupName);
                        /**/
                        function attachMessages(formElement, elementName) {
                            var appFormElement = formName + '.' + elementName;
                            var appFormElementTouched = appFormElement + '.$touched';
                            var appFormElementError = appFormElement + '.$error';
                            var appFormSubmitted = formName + '.$submitted';
                            /*create validation message*/
                            var message = "<div ng-if='" + appFormElementTouched + "|| " +
                                appFormSubmitted + "'ng-messages='" + appFormElementError + "'>" +
                                "<div ng-messages-include='scripts/common/templates/form-error-messages.html'>" +
                                "</div>" + "</div>";
                            /**/
                            var messagesCompiled = $compile(message)($scope);
                            /*after each required form element message will be compiled*/
                            angular.element(formElement).after(messagesCompiled);
                        }
                    }
                }
            };
        });
})();
