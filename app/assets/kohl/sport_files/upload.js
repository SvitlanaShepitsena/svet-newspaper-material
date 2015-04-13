angular.module('ui.bootstrap.upload', [])

.directive("upload", ['$interpolate', function ($interpolate) {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel) {
            if (!elem.hasClass('form-control')) {
                elem.addClass('form-control');
            }
            elem.addClass('btn-file');
            elem.append('<input type="file" name="file" />');
            var input = elem.find('input');
            var $body = angular.element('body');
            var form = angular.element('<form>');
            form.css({ 'display': 'none' });
            $body.append(form);
            var isUploading = false;
            input.on('change', function () {
                if (!isUploading) {
                    form.append(input);
                    form.attr('action', $interpolate(attrs.upload));
                    form.submit();
                    attrs.$set('disabled', 'disabled');
                }
            });
            form.submit(function () {
                if (isUploading) { return false; }
                isUploading = true;
                var iframe = $('body').append('<iframe name="upload_frame"></iframe>').find('iframe');
                iframe.css({ 'display': 'none' });
                iframe.on('load', function () {
                    if (iframe.contents()[0].location.href.match(iframe.parent('form').attr('action'))) {
                        scope.$apply(function () {
                            if (typeof ngModel.$viewValue === 'undefined') {
                                throw 'upload requires ngModel';
                            }
                            var obj = angular.fromJson(iframe.contents().find('body').html().replace(/(?:<pre[^>]*>(.*)<\/pre>|(.*))/i, '$1$2'));
                            var m = null;
                            for (var error in ngModel.$error) {
                                ngModel.$setValidity(error, true);
                            }
                            if (typeof obj == 'object' && obj.error && obj.errorCode) {
                                ngModel.$setValidity(obj.errorCode, false);
                            } else {
                                ngModel.$setViewValue(obj);
                            }
                            ngModel.$setTouched();
                            ngModel.$render();
                        });
                        form.get(0).reset();
                        elem.append(input);
                        elem.removeAttr('disabled');
                        elem.trigger('blur');
                        iframe.remove();
                        isUploading = false;
                    }
                });
                form.attr({
                    'method': 'post',
                    'enctype': 'multipart/form-data',
                    'target': 'upload_frame'
                });
                form.submit();
            });
        }
    }
}]);