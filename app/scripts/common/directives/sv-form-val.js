(function () {
    'use strict';
    angular.module('common')
        .directive('svFormVal', function ($compile) {
            return {
                restrict: 'A',
                priority: 1300,
                /*Require another directive and inject its controller as the fourth argument to the linking function
                 */
                require: '?^form',
                compile: function (elTemp, attr) {
                    /*find required form elements with JQuery*/
                    var inputs = elTemp.find('input[required]');
                    var textAreas = elTemp.find('textarea[required]');
                    /*for Lumx Form*/
                    var compileLxElements = _.compact(_.map(inputs, function (input) {
                        var parent = angular.element(input).parent('lx-text-field');
                        if (parent.length > 0) {
                            return parent;
                        }
                    }));
                    var formElements = _.union(inputs, textAreas);
                    var formElementsNames = _.pluck(formElements, 'name');

                    var radioGroup = elTemp.find('md-radio-group');
                    /*get element name with JQuery*/
                    var radioGroupName = radioGroup.attr('name');

                    return function ($scope, el, attr, ctrl) {
                        var formName = ctrl.$name;
                        /*attached compiled message to each element of array*/
                        var attachAfterElements = compileLxElements.length > 0 ? compileLxElements : formElements;

                        angular.forEach(attachAfterElements, function (formElement, index) {
                            attachMessages(formElement, formElementsNames[index]);
                        });
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
