(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svS3Upload', function (Upload) {
            return {
                templateUrl: 'scripts/ad/promotion/directives/sv-s3-upload.html',
                link: function ($scope, el, attrs) {

                    $scope.$watch('files', function () {
                        $scope.upload($scope.files);
                    });

                    $scope.upload = function (files) {
                        if (files && files.length) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                Upload.upload({
                                        url: 'https://svet.com.s3.amazonaws.com/', //S3 upload url including bucket name
                                        method: 'POST',
                                        fields : {
                                            key: file.name, // the key to store the file on S3, could be file name or customized
                                            AWSAccessKeyId: "AKIAIBCXUOSMU2F4U7HA",
                                    acl: 'private', // sets the access to the uploaded file in the bucket: private or public
                                    policy: "eyJleHBpcmF0aW9uIjogIjIwMTktMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsgCiAgICB7ImJ1Y2tldCI6ICJzdmV0LmNvbSJ9LCAKICAgIFsic3RhcnRzLXdpdGgiLCAiJGtleSIsICJ1cGxvYWRzLyJdLAogICAgeyJhY2wiOiAicHVibGljIn0sCiAgICB7InN1Y2Nlc3NfYWN0aW9uX3JlZGlyZWN0IjogImh0dHA6Ly9sb2NhbGhvc3QvIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgMTA0ODU3Nl0KICBdCn0=", // base64-encoded json policy (see article below)
                                    signature: "3/fnaO8Edb7/JPZvZFq1lwtLz/Y=", // base64-encoded signature based on policy string (see article below)
                                    "Content-Type": file.type != '' ? file.type : 'application/octet-stream', // content type of the file (NotEmpty)
                                    filename: file.name // this is needed for Flash polyfill IE8-9
                            },
                            file: file,
                                }).progress(function (evt) {
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                                }).success(function (data, status, headers, config) {
                                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                                });
                            }
                        }
                    };



                }
            };
        });
})();
