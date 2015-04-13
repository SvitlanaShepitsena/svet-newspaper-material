mainControllers.controller('IconViewController', [
    '$scope', '$location', '$modal', '$modalInstance', 'IconService', 'icon',
    function ($scope, $location, $modal, $modalInstance, IconService, icon) {

        $scope.icon = {
            id: icon.id,
            name: icon.name,
            description: '...',
            data: icon.data,
            tags: [],
            comments: [],
            commentCount: 0,
            hasComments: false,
            aliases: icon.aliases,
            user: {
                name: icon.user.name,
                email: null,
                twitter: '...',
                isAuthor: false
            }
        };

        var promise = IconService.getIcon(icon.id);
        promise.then(function (data) {
            $scope.icon.user.isAuthor = data.isAuthor;
            $scope.icon.description = data.description;
            $scope.icon.user.twitter = data.user.twitter;
            $scope.icon.user.email = data.user.email || null; // Admin only
            for (var i = 0, c = data.comments.length; i < c; i++) {
                $scope.icon.comments.push({
                    name: data.comments[i].name,
                    date: data.comments[i].date,
                    twitter: data.comments[i].twitter,
                    email: data.comments[i].email || '',
                    text: $sce.trustAsHtml('<p>' + data.comments[i].text.split(/\r?\n/).join('</p><p>') + '</p>'),
                    isAuthor: data.comments[i].isAuthor
                });
            }
            $scope.icon.tags = data.tags;
            $scope.icon.commentCount = data.comments.length;
            $scope.icon.hasComments = data.comments.length > 0;
            ga('send', {
                'hitType': 'event',          // Required.
                'eventCategory': 'icon',     // Required.
                'eventAction': 'preview',    // Required.
                'eventLabel': icon.name
            });
        }, function () {
            // Handle Error
        });

        $scope.permalink = function (name) {
            $location.url('icon/' + name);
        };

        $scope.goToTag = function (tagText) {
            $location.url('/tag/' + tagText.replace(' ', '-'));
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.downloadForm = {
            isCollapsed: true,
            foreground: {
                hex: '#000000',
                opacity: 1.00
            },
            background: {
                hex: '#FFFFFF',
                opacity: 0.00
            },
            size: ''
        };

        $scope.download = {
            customized: function () {
                var url = '/api/download/' + $scope.icon.id
                                + '/' + $scope.downloadForm.foreground.hex.substring(1)
                                + '/' + $scope.downloadForm.foreground.opacity
                                + '/' + $scope.downloadForm.background.hex.substring(1)
                                + '/' + $scope.downloadForm.background.opacity;
                if ($scope.downloadForm.size != '' && parseInt($scope.downloadForm.size) < 1024) {
                    url += '/' + parseInt($scope.downloadForm.size);
                } else {
                    $scope.downloadForm.size = '24';
                }
                window.location = url;
            },
            iconPackage: function (pack) {
                window.location = '/api/download/package/' + $scope.icon.id + '/' + pack;
                ga('send', {
                    'hitType': 'event',           // Required.
                    'eventCategory': 'download',  // Required.
                    'eventAction': pack,          // Required.
                    'eventLabel': $scope.icon.name
                });
            },
            svg: function () {
                window.location = '/api/download/icon/svg/' + $scope.icon.id;
            },
            svgWebfont: function () {
                window.location = '/api/download/icon/svgwebfont/' + $scope.icon.id;
            },
            xaml: function () {
                window.location = '/api/download/icon/xaml/' + $scope.icon.id;
            },
            vectorDrawable: function () {
                window.location = '/api/download/icon/vectordrawable/' + $scope.icon.id;
            }
        };

        $scope.view = {
            vectorDrawable: function () {
                $modal.open({
                    templateUrl: 'drawableViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $scope.icon;
                        }
                    }
                });
            },
            svg: function () {
                $modal.open({
                    templateUrl: 'svgViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $scope.icon;
                        }
                    }
                });
            },
            xaml: function () {
                $modal.open({
                    templateUrl: 'xamlViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $scope.icon;
                        }
                    }
                });
            }
        };

        $modalInstance.opened.then(function () {
            // Remove this dom code once refactored
            setTimeout(function () {
                $('.picker-color-foreground').colorpicker({
                    format: 'rgba',
                    input: 'input.color',
                    color: 'rgba(0, 0, 0, 1)'
                }).on('changeColor', function (ev) {
                    $scope.$apply(function () {
                        $scope.downloadForm.foreground.hex = ev.color.toHex();
                        $scope.downloadForm.foreground.opacity = ev.color.value.a;
                    });
                });

                $('.picker-color-background').colorpicker({
                    format: 'rgba',
                    input: 'input.color',
                    color: 'rgba(255, 255, 255, 0)'
                }).on('changeColor', function (ev) {
                    $scope.$apply(function () {
                        $scope.downloadForm.background.hex = ev.color.toHex();
                        $scope.downloadForm.background.opacity = ev.color.value.a;
                    });
                });

                $('.textbox-size').tooltip({
                    trigger: 'focus',
                    title: 'x<sup>2</sup>',
                    html: true,
                    placement: 'bottom'
                });

                $('.textbox-foreground-hex').tooltip({
                    title: 'Foreground Hex'
                });

                $('.textbox-foreground-opacity').tooltip({
                    title: 'Foreground Opacity'
                });

                $('.textbox-background-hex').tooltip({
                    title: 'Background Hex'
                });

                $('.textbox-background-opacity').tooltip({
                    title: 'Background Opacity'
                });

                $('.textbox-comment-email').tooltip({
                    title: 'Only Visible to the Icon Contributor',
                    placement: 'bottom'
                });
            }, 100);
        });

        $scope.$on('$destroy', function () {
            $('.picker-color-foreground').colorpicker('destroy');
            $('.picker-color-background').colorpicker('destroy');
        });

        $scope.backgroundOpacity = [
            ['1.0', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 1;
            }],
            ['0.8', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 0.8;
            }],
            ['0.6', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 0.6;
            }],
            ['0.5', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 0.5;
            }],
            ['0.4', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 0.4;
            }],
            ['0.2', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 0.2;
            }],
            ['0.0', function ($itemScope) {
                $itemScope.downloadForm.background.opacity = 0;
            }]
        ];

        $scope.foregroundOpacity = [
            ['1.0', function ($itemScope) {
                $itemScope.downloadForm.foreground.opacity = 1;
            }],
            ['0.8', function ($itemScope) {
                $itemScope.downloadForm.foreground.opacity = 0.8;
            }],
            ['0.6', function ($itemScope) {
                $itemScope.downloadForm.foreground.opacity = 0.6;
            }],
            ['0.5', function ($itemScope) {
                $itemScope.downloadForm.foreground.opacity = 0.5;
            }],
            ['0.4', function ($itemScope) {
                $itemScope.downloadForm.foreground.opacity = 0.4;
            }],
            ['0.2', function ($itemScope) {
                $itemScope.downloadForm.foreground.opacity = 0.2;
            }]
        ];

        $scope.backgroundColors = [
            ['#000000', function ($itemScope) {
                $itemScope.downloadForm.background.hex = "#000000";
            }],
            ['#6F6F6F', function ($itemScope) {
                $itemScope.downloadForm.background.hex = "#6F6F6F";
            }],
            ['#FFFFFF', function ($itemScope) {
                $itemScope.downloadForm.background.hex = "#FFFFFF";
            }]
        ];

        $scope.foregroundColors = [
            ['#000000', function ($itemScope) {
                $itemScope.downloadForm.foreground.hex = "#000000";
            }],
            ['#6F6F6F', function ($itemScope) {
                $itemScope.downloadForm.foreground.hex = "#6F6F6F";
            }],
            ['#FFFFFF', function ($itemScope) {
                $itemScope.downloadForm.foreground.hex = "#FFFFFF";
            }]
        ];

        $scope.downloadThumbnail24 = [
            ['Download .PNG 24x24', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id;
            }],
            null,
            ['Download .PNG 36x36', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id + '/36';
            }],
            ['Download .PNG 48x48', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id + '/48';
            }],
            ['Download .SVG Compressed', function ($itemScope) {
                window.location = '/api/download/icon/svg/' + $scope.icon.id;
            }],
            ['Download .SVG Webfont', function ($itemScope) {
                window.location = '/api/download/icon/svgwebfont/' + $scope.icon.id;
            }],
            ['Download .XAML', function ($itemScope) {
                window.location = '/api/download/icon/xaml/' + $scope.icon.id;
            }],
            ['View SVG', function ($itemScope) {
                $modal.open({
                    templateUrl: 'svgViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
            ['View XAML', function ($itemScope) {
                $modal.open({
                    templateUrl: 'xamlViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
            ['View Vector Drawable', function ($itemScope) {
                $modal.open({
                    templateUrl: 'drawableViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
        ];

        $scope.downloadThumbnail36 = [
            ['Download .PNG 36x36', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id + '/36';
            }],
            null,
            ['Download .PNG 24x24', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id;
            }],
            ['Download .PNG 48x48', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id + '/48';
            }],
            ['Download .SVG Compressed', function ($itemScope) {
                window.location = '/api/download/icon/svg/' + $scope.icon.id;
            }],
            ['Download .SVG Webfont', function ($itemScope) {
                window.location = '/api/download/icon/svgwebfont/' + $scope.icon.id;
            }],
            ['Download .XAML', function ($itemScope) {
                window.location = '/api/download/icon/xaml/' + $scope.icon.id;
            }],
            ['View SVG', function ($itemScope) {
                $modal.open({
                    templateUrl: 'svgViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
            ['View XAML', function ($itemScope) {
                $modal.open({
                    templateUrl: 'xamlViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
            ['View Vector Drawable', function ($itemScope) {
                $modal.open({
                    templateUrl: 'drawableViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
        ];

        $scope.downloadThumbnail48 = [
            ['Download .PNG 48x48', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id + '/48';
            }],
            null,
            ['Download .PNG 36x36', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id + '/36';
            }],
            ['Download .PNG 24x24', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $scope.icon.id;
            }],
            ['Download .SVG Compressed', function ($itemScope) {
                window.location = '/api/download/icon/svg/' + $scope.icon.id;
            }],
            ['Download .SVG Webfont', function ($itemScope) {
                window.location = '/api/download/icon/svgwebfont/' + $scope.icon.id;
            }],
            ['Download .XAML', function ($itemScope) {
                window.location = '/api/download/icon/xaml/' + $scope.icon.id;
            }],
            ['View SVG', function ($itemScope) {
                $modal.open({
                    templateUrl: 'svgViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
            ['View XAML', function ($itemScope) {
                $modal.open({
                    templateUrl: 'xamlViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
            ['View Vector Drawable', function ($itemScope) {
                $modal.open({
                    templateUrl: 'drawableViewer.html',
                    controller: 'XamlViewerController',
                    size: 'lg',
                    resolve: {
                        icon: function () {
                            return $itemScope.icon;
                        }
                    }
                });
            }],
        ];


    }
]);