(function () {
    'use strict';
    angular.module('common')
        .directive('svFormVal', function ($compile) {
            return {
                restrict: 'A',
                priority: 100,
                require: '?^form',
                compile: function (elTemp, attr) {
                    /*find required form elements with JQuery*/
                    var inputs = elTemp.find('input');
                    var textAreas = elTemp.find('textarea[required]');

                    var formElements = _.union(inputs, textAreas);
                    var formElementsNames = _.pluck(formElements, 'name');
                    /*for Lumx Form*/
                    /*find inputs with parent lx-text-field*/
                    var lxTextFields = _.compact(_.map(inputs, function (input) {
                        var parent = angular.element(input).parent('lx-text-field');
                        if (parent.length > 0) {
                            return parent;
                        }
                    }));
                    /*for Angular Material Radio-Group*/
                    var radioGroup = elTemp.find('md-radio-group');
                    /*get element name with JQuery*/
                    var radioGroupName = radioGroup.attr('name');
                    /*for Angular Material md-select*/
                    var mdDropdown = elTemp.find('md-select');
                    var mdDropdownName = mdDropdown.attr('name');
                    var breakPoint = 1;
                    return function ($scope, el, attr, ctrl) {
                        var formName = ctrl.$name;
                        var requiredElements = lxTextFields.length > 0 ? lxTextFields : formElements;
                        angular.forEach(requiredElements, function (formElement, index) {
                            attachMessages(formElement, formElementsNames[index]);
                        });
                        attachMessages(radioGroup, radioGroupName);
                        attachMessages(mdDropdown, mdDropdownName);
                        function attachMessages(formElement, elementName) {
                            var appFormElement = formName + '.' + elementName;
                            var appFormElementTouched = appFormElement + '.$touched';
                            var appFormElementError = appFormElement + '.$error';
                            var appFormSubmitted = formName + '.$submitted';
                            /*create validation message*/
                            var message = "<div ng-if='" + appFormElementTouched + "|| " + appFormSubmitted +
                                "'ng-messages='" + appFormElementError + "'>" +
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
