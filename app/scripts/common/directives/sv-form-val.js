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
                    var inputs = elTemp.find('input[required]');
                    var compileLxElms = _.map(inputs, function (input) {

                        var parent = angular.element(input).parent('lx-text-field');
                        return parent;

                    });

                    var textAreas = elTemp.find('textarea[required]');
                    var fElements = _.union(inputs, textAreas);

                    var inputNames = _.pluck(fElements, 'name');
                    return function ($scope, el, attr, ctrl) {
                        var formName = ctrl.$name;
                        /*find required form elements with JQuery*/
                        var inputs = el.find('input[required=""]');
                        var txtareas = el.find('textarea[required=""]');

                        /*combine two arrays in one with Lodash method*/
                        var formElements = _.union(inputs, txtareas, compileLxElms);
                        /*attached compiled message to each element of array*/
                        angular.forEach(formElements, function (formElement, index) {
                            attachMessages(formElement, inputNames[index]);
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
