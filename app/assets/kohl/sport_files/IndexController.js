mainControllers.controller('IndexController', [
    '$scope', '$location', '$route', '$log', '$routeParams', '$document', '$timeout', '$sce', '$http', '$modal', 'IconService', 'AuthService', 'CommentService', 'ContributorService', 'TagService', 'SiteService',
    function ($scope, $location, $route, $log, $routeParams, $document, $timeout, $sce, $http, $modal, IconService, AuthService, CommentService, ContributorService, TagService, SiteService) {
        
        var standardColor = '#6F6F6F';

        var colors = [
            '#F44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
            '#3F51B5',
            '#2196F3',
            '#03A9F4',
            '#00BCD4',
            '#009688',
            '#4CAF50',
            '#8BC34A',
            '#CDDC39',
            '#FFEB3B',
            '#FFC107',
            '#FF9800',
            '#FF5722',
            '#795548',
            '#9E9E9E',
            '#607D8B'
        ];

        $scope.isColored = true;
        $scope.toggleColor = function () {
            if ($scope.isColored) {
                angular.forEach($scope.icons, function (icon) {
                    var i = Math.floor(Math.random() * colors.length);
                    icon.color = colors[i];
                });
            } else {
                angular.forEach($scope.icons, function (icon) {
                    icon.color = standardColor;
                });
            }
            $scope.isColored = !$scope.isColored;
        };

        $scope.goToHome = function () {
            $location.url('/');
            $scope.state.isFiltered = false;
        };

        $scope.goToHistory = function () {
            $location.url('/history');
        };

        $scope.goToLogin = function () {
            var promise = AuthService.isAuthed();
            promise.then(function () {
                $location.url('/admin');
            }, function () {
                $location.url('/login');
            });
        };

        $scope.toggleHowToHelp = function () {
            $scope.state.search.isCollapsed = true;
            $scope.state.isTagFilterVisible = false;
            $scope.state.isContributorFilterVisible = false;
            $scope.state.isAddIconsVisible = !$scope.state.isAddIconsVisible;
        };

        $scope.viewGitHub = function () {
            window.location = 'https://github.com/Templarian/MaterialDesign';
        };

        $scope.goToGettingStarted = function () {
            $location.url('/getting-started');
        };

        $scope.goToStyle = function () {
            $location.url('/style');
        };

        $scope.goToCustom = function () {
            $location.url('/custom');
        };

        $scope.goToDownload = function () {
            var modalInstance = $modal.open({
                templateUrl: 'download.html',
                controller: 'XamlViewerController',
                size: 'lg',
                resolve: {
                    icon: function () {
                        return null;
                    }
                }
            });
            //window.location = 'https://github.com/Templarian/MaterialDesign/archive/master.zip';
        };

        $scope.donate = function () {
            window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A7485AUJF2E9G';
        };

        $scope.filterCommunity = function () {
            if ($location.url() == '/tag/community') {
                $location.url('/');
            } else {
                $location.url('/tag/community');
            }
        };

        $scope.goToTag = function (tagText) {
            $location.url('/tag/' + tagText.replace(' ', '-'));
        };

        $scope.goToContributor = function (name) {
            $location.url('/contributor/' + name.replace(/ /g, '-').replace(/\./g, ''));
        };
        
        $scope.state = {
            selected: {
                name: 'Loading...',
                size: 24,
                iconCount: 0
            },
            totalIcons: '-',
            packageId: null,
            search: {
                text: '',
                isCollapsed: true,
                isFocused: false,
                isTagsLoading: true,
                isTagsCollapsed: true,
                filterTag: '',
                toggle: function ($event) {
                    this.isCollapsed = !this.isCollapsed;
                    $scope.state.isAddIconsVisible = false;
                    $scope.state.isContributorFilterVisible = false;
                    if (!this.isCollapsed) {
                        $scope.state.search.isFocused = true;
                        var promise = TagService.getTags();
                        promise.then(function (tags) {
                            $scope.tags = tags;
                            $scope.state.search.isTagsLoading = false;
                        }, function () {

                        });
                    }
                    if ($event) {
                        $event.preventDefault();
                    }
                },
                shortcut: function () {
                    this.isCollapsed = true;
                    this.toggle();
                    this.isTagsCollapsed = true;
                },
                toggleTags: function ($event) {
                    this.isTagsCollapsed = !this.isTagsCollapsed;
                    if ($event) {
                        $event.preventDefault();
                    }
                },
                keyDown: function ($event) {
                    if ($event.keyCode == 27) {
                        this.toggle($event);
                    } else if ($event.keyCode == 9) {
                        this.toggleTags($event);
                    } else if (!(($event.keyCode >= 37 && $event.keyCode <= 90) || $event.keyCode == 8 || $event.keyCode == 189)) {
                        $event.preventDefault();
                    }
                },
                keyUp: function () {
                    if (this.text.length > 0) {
                        this.isTagsCollapsed = true;
                    }
                },
                blur: function () {
                    ga('send', {
                        'hitType': 'event',           // Required.
                        'eventCategory': 'search',    // Required.
                        'eventAction': 'blur',        // Required.
                        'eventLabel': this.text
                    });
                }
            },
            contributors: {
                isLoading: true
            },
            isLoadingIcons: true,
            isSearchFilterFocused: false,
            isFiltered: false,
            isSearchFilterVisible: false,
            isTagFilterVisible: false,
            isContributorFilterVisible: false,
            isAddIconsVisible: false,
            isContributorPage: false,
            isTagPage: false,
            tag: ''
        };

        $scope.removeFilters = function () {
            $scope.state.search.text = '';
            $scope.state.search.isCollapsed = true;
            $location.url('/');
        }

        $scope.tags = [];
        $scope.contributors = [];
        $scope.contributor = {
            name: '...',
            twitter: '...',
            avatar: null,
            description: '...',
            website: '',
            github: '',
            count: 0
        };

        var promisePackages = SiteService.getPackages();
        promisePackages.then(function (packages) {
            if (packages.length == 0) {
                $log.error('No icon packages assigned to domain.');
            } else if (packages.length == 1) {
                $scope.state.packageId = packages[0].id;
                $scope.state.totalIcons = packages[0].iconCount;
                $scope.state.size = packages[0].size;
                loadIcons();
            } else {
                $log.warn('Multiple icon packages assigned to domain not supported.');
            }
        }, function () {

        });


        $scope.icons = [];

        var originalPath = $route.current.originalPath;

        function loadIcons () {
            var promise = null;
            if (originalPath == '/contributor/:name') {
                promise = IconService.getIconsByUser($scope.state.packageId, $routeParams.name);
                $scope.state.isContributorPage = true;
                $scope.state.isFiltered = true;
                var contributorPromise = ContributorService.getContributorByName($routeParams.name);
                contributorPromise.then(function (data) {
                    $scope.contributor = data;
                }, function () {
                
                });
            } else if (originalPath == '/tag/:tag') {
                $scope.state.isTagPage = true;
                if ($routeParams.tag == 'community') {
                    var promise = IconService.getIconsByTag($scope.state.packageId, 'community');
                    $scope.state.isFiltered = true;
                    $scope.state.tag = 'Community';
                } else {
                    promise = IconService.getIconsByTag($scope.state.packageId, $routeParams.tag);
                    $scope.state.isFiltered = true;
                    $scope.state.tag = $routeParams.tag;
                }
            } else if (originalPath == '/icon/:icon') {
                promise = IconService.getIconsByName($scope.state.packageId, $routeParams.icon);
                $scope.state.isFiltered = true;
            } else {
                promise = IconService.getIcons($scope.state.packageId);
            }
            promise.then(function (data) {
                $scope.icons = data.icons;
                angular.forEach($scope.icons, function (icon) {
                    icon.color = standardColor;
                });
                $scope.state.isLoadingIcons = false;
                if (originalPath == '/icon/:name') {
                    for (var i = 0; i < $scope.icons.length; i++) {
                        if ($scope.icons[i].name == $routeParams.name) {
                            $scope.viewIcon($scope.icons[i]);
                            return;
                        }
                    }
                
                }
            });
        }

        $scope.viewIcon = function (icon) {
            $modal.open({
                templateUrl: 'icon.html',
                controller: 'IconViewController',
                windowClass: 'viewForm',
                size: 'lg',
                resolve: {
                    icon: function () {
                        return {
                            id: icon.id,
                            name: icon.name,
                            description: '...',
                            data: icon.data,
                            aliases: icon.aliases,
                            user: {
                                name: icon.user.name,
                                twitter: '...',
                                email: ''
                            }
                        };
                    }
                }
            });
        };

        $scope.commentForm = {
            isVisible: false,
            isDelayVisible: false,
            show: function (icon) {
                icon = icon || $scope.viewForm.icon;
                var commentForm = this,
                    viewForm = $scope.viewForm;;
                
                commentForm.id = icon.id;
                commentForm.isVisible = false;
                commentForm.buttonMessage = '...';

                if (icon.id != viewForm.icon.id) {
                    viewForm.comments = [];
                    var promise = IconService.getIcon(icon.id);
                    promise.then(function (data) {

                        for (var i = 0, c = data.comments.length; i < c; i++) {
                            viewForm.comments.push({
                                name: data.comments[i].name,
                                date: data.comments[i].date,
                                twitter: data.comments[i].twitter,
                                email: data.comments[i].email || '',
                                text: $sce.trustAsHtml('<p>' + data.comments[i].text.split(/\r?\n/).join('</p><p>') + '</p>'),
                                isAuthor: data.comments[i].isAuthor
                            });
                            if (data.comments.length == 0) {
                                commentForm.buttonMessage = "Be the first to leave feedback for this icon";
                            } else {
                                commentForm.buttonMessage = "Leave Feedback";
                            }
                        }
                    }, function () {});
                }
                var body = $document.find('body').eq(0);
                body.addClass('modal-open');
                commentForm.isDelayVisible = true;
                $timeout(function () {
                    commentForm.isVisible = true;
                }, 1);
            },
            hide: function () {
                var commentForm = this;
                var body = $document.find('body').eq(0);
                commentForm.isVisible = false;
                $timeout(function () {
                    body.removeClass('modal-open');
                    commentForm.isDelayVisible = false;
                }, 300);
            },
            id: null,
            name: '',
            twitter: '',
            email: '',
            text: '',
            field: {
                name: {
                    isInvalid: false
                },
                twitter: {
                    isInvalid: false
                },
                email: {
                    isInvalid: false
                },
                text: {
                    isInvalid: false
                }
            },
            submit: function () {
                var viewForm = $scope.viewForm,
                    commentForm = this;
                commentForm.text = commentForm.text.replace('@', '');
                var promise = CommentService.addComment({
                    id: commentForm.id,
                    name: commentForm.name,
                    twitter: commentForm.twitter,
                    email: commentForm.email,
                    text: commentForm.text
                });
                promise.then(function () {
                    viewForm.comments.push({
                        name: commentForm.name,
                        twitter: commentForm.twitter,
                        date: 'Now',
                        text: $sce.trustAsHtml('<p>' + commentForm.text.split(/\r?\n/).join('</p><p>') + '</p>'),
                        isAuthor: true
                    });
                    commentForm.name = '';
                    commentForm.twitter = '';
                    commentForm.email = '';
                    commentForm.text = '';
                    commentForm.field.name.isInvalid = false;
                    commentForm.field.twitter.isInvalid = false;
                    commentForm.field.email.isInvalid = false;
                    commentForm.field.text.isInvalid = false;
                    commentForm.isVisible = false;
                }, function () {
                    alert('Failed to send comment.');
                });
            }
        };

        $scope.goToGitHubIssues = function () {
            window.location = 'https://github.com/Templarian/MaterialDesign/issues';
        };

        var updatePreview = function () {

        };

        $scope.fontForm = {
            icons: []
        };

        $scope.menuOptions = [
            ['Download .PNG 24x24', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $itemScope.icon.id;
            }],
            ['Download .PNG 36x36', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $itemScope.icon.id + '/36';
            }],
            ['Download .PNG 48x48', function ($itemScope) {
                window.location = '/api/download/icon/png/' + $itemScope.icon.id + '/48';
            }],
            null,
            ['Download .SVG Compressed', function ($itemScope) {
                window.location = '/api/download/icon/svg/' + $itemScope.icon.id;
            }],
            ['Download .SVG Webfont', function ($itemScope) {
                window.location = '/api/download/icon/svgwebfont/' + $itemScope.icon.id;
            }],
            ['Download .XML Vector Drawable', function ($itemScope) {
                window.location = '/api/download/icon/vectordrawable/' + $itemScope.icon.id;
            }],
            ['Download .XAML', function ($itemScope) {
                window.location = '/api/download/icon/xaml/' + $itemScope.icon.id;
            }],
            null,
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
            null,
            ['Add to Font Subset', function ($itemScope) {
                alert('Coming soon...');
            }],
            null,
            ['View Comments', function ($itemScope) {
                $scope.commentForm.show($itemScope.icon);
            }]
        ];

        $scope.viewContributorFilters = function () {
            $scope.state.isAddIconsVisible = false;
            $scope.state.isTagFilterVisible = false;
            $scope.state.search.isCollapsed = true;
            $scope.state.isContributorFilterVisible = !$scope.state.isContributorFilterVisible;
            var promise = ContributorService.getContributors($scope.state.packageId);
            promise.then(function (contributors) {
                $scope.state.contributors.isLoading = false;
                $scope.contributors = contributors;
            }, function () {

            });
        };

        $scope.contributorContext = [
            ['View Profile', function ($itemScope) {
                $scope.goToContributor($itemScope.contributor.name);
            }]
        ];

    }
]);