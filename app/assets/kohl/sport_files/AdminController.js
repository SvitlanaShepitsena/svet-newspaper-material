mainControllers.controller('AdminController', [
    '$scope', '$location', '$routeParams', '$timeout', '$document', 'UtilService', 'IconService', 'TagService', 'AuthService', 'UserService', 'SiteService',
    function ($scope, $location, $routeParams, $timeout, $document, UtilService, IconService, TagService, AuthService, UserService, SiteService) {

        function init() {
            var promisePackages = SiteService.admin.getPackages();
            promisePackages.then(function (packages) {
                $scope.state.packages = packages;
                if ($scope.state.packages.length == 0) {

                } else {
                    $scope.state.selectedPackage = $scope.state.packages[0];
                    $scope.packageChange();
                }
            }, function () {

            });
        }

        var promise = AuthService.isAuthed();
        promise.then(function () {
            init();
        }, function () {
            $location.url('/login');
        });

        $scope.goToIndex = function () {
            $location.url('/');
        };

        $scope.logout = function () {
            var promise = AuthService.asyncLogout();
            promise.then(function () {
                UserService.clearCache();
                $location.url('/');
            }, function () {
                alert('Logout failed. Weird.');
            });
        };

        $scope.tags = [];

        $scope.state = {
            showTagPanel: false,
            showInvitePanel: false,
            showAddIconButton: false,
            packages: [],
            selectedPackage: null,
            loadingIcons: true
        };

        $scope.packageChange = function () {
            $scope.state.loadingIcons = true;
            var promiseIcons = IconService.admin.getIcons($scope.state.selectedPackage.id);
            $scope.icons = [];
            promiseIcons.then(function (data) {
                $scope.icons = data;
                $scope.state.loadingIcons = false;
            }, function () {
                $scope.state.loadingIcons = false;
            });
        };

        var promiseTagPermission = UserService.admin.hasPermission('5b219b2a-492a-11e4-b3cf-842b2b6cfe1b');
        promiseTagPermission.then(function (canAddTags) {
            $scope.state.showTagPanel = canAddTags;
        }, function () {

        });

        var promiseInvitePermission = UserService.admin.hasPermission('6d58a60c-492b-11e4-b3cf-842b2b6cfe1b');
        promiseInvitePermission.then(function (canInviteUsers) {
            $scope.state.showInvitePanel = canInviteUsers;
        }, function () {

        });

        var promiseAddIconsPermission = UserService.admin.hasPermission('05ed7a88-492b-11e4-b3cf-842b2b6cfe1b');
        promiseAddIconsPermission.then(function (canAddIcons) {
            $scope.state.showAddIconButton = canAddIcons;
        }, function () {

        });

        var promiseTag = TagService.admin.getTags();
        promiseTag.then(function (data) {
            $scope.tags = data;
        }, function () {

        });

        $scope.tagForm = {
            text: ''
        };

        $scope.addTag = function () {
            if (UtilService.inArray($scope.tags, $scope.tagForm.text, 'text')) {
                alert('Tag already exists.');
            } else {
                var promise = TagService.admin.addTag($scope.tagForm.text);
                promise.then(function () {
                    $scope.tagForm.text = '';
                    var promiseTags = TagService.admin.getTags();
                    promiseTags.then(function (data) {
                        $scope.tags = data;
                    }, function () {

                    });
                }, function () {

                });
            }
        };

        $scope.stats = {
            week: []
        };

        var promiseTopIconsThisWeek = IconService.admin.getTopIconsThisWeek();
        promiseTopIconsThisWeek.then(function (icons) {
            $scope.stats.week = icons;
        }, function () {

        });

        var cleanData = function (text) {
            /*text = text.replace(/-?\d+.\d+e-\d+/g, '0'); // e notation
            text = text.replace(/(\d+)\.(\d{2,})/g, function (a, b, c) {
                // 2 Decimal Rounding
                a = (Math.round(parseFloat(a) * 100) / 100).toString();
                var p = a.split('.');
                if (p.length == 1) {
                    return a;
                }
                if (p[1] == '00') {
                    return b;
                } else if (p[1] == '99' || p[1] == '98') {
                    return Math.ceil(parseFloat(a));
                } else if (p[1] == '01' || p[1] == '02') {
                    return Math.floor(parseFloat(a));
                } else if (p[1] == '50' || p[1] == '49'
                    || p[1] == '48' || p[1] == '51' || p[1] == '52') {
                    return b + '.5';
                }
                return a;
            });
            // Remove Commas
            text = text.replace(/,/g, ' ');
            // Remove Extra Space
            text = text.replace(/([a-z]) ([-])/gi, '$1$2');
            text = text.replace(/([a-z]) (\d)/gi, '$1$2');
            text = text.replace(/(\d) ([a-z])/gi, '$1$2');
            text = text.replace(/([a-z]) ([a-z])/gi, '$1$2');
            text = text.replace(/[\r\n\t]/g, '');*/
            return IconService.optimizePath(text);
        };

        $scope.cleanData = cleanData;
        
        $scope.errorData = 'M13 14L11 14L11 10L13 10M13 18L11 18L11 16L13 16M1 21L23 21L12 2L1 21Z';
        
        $scope.editForm = {
            isVisible: false,
            isDelayVisible: false,
            show: function (icon) {
                var editForm = this;

                var promiseIcon = IconService.admin.getIcon(icon.id);
                promiseIcon.then(function (data) {
                    editForm.icon.id = icon.id;
                    editForm.icon.name = data.name;
                    editForm.icon.data = data.data;
                    editForm.icon.published = data.published;
                    editForm.icon.previewData = data.data;
                    editForm.icon.description = data.description;
                    editForm.tags = data.tags;
                    editForm.user.name = data.user.name;
                    editForm.user.twitter = data.user.twitter;
                    editForm.onDataChange();
                    editForm.unusedTags = UtilService.diffArray($scope.tags, editForm.tags);
                    editForm.selectedTag = editForm.unusedTags[0];
                }, function () {

                });

                var body = $document.find('body').eq(0);
                body.addClass('modal-open');
                editForm.isDelayVisible = true;
                $timeout(function () {
                    editForm.isVisible = true;
                }, 1);
            },
            hide: function () {
                var editForm = this;
                var body = $document.find('body').eq(0);
                editForm.isVisible = false;
                $timeout(function () {
                    body.removeClass('modal-open');
                    editForm.isDelayVisible = false;
                }, 300);
            },
            togglePublishDisabled: false,
            togglePublish: function () {
                var me = this,
                    promisePublish = null;
                if (me.icon.published) {
                    promisePublish = IconService.admin.unpublish(me.icon.id);
                } else {
                    promisePublish = IconService.admin.publish(me.icon.id);
                }
                me.togglePublishDisabled = true;
                promisePublish.then(function () {
                    me.icon.published = !me.icon.published;
                    var promiseIcons = IconService.admin.getIcons($scope.state.selectedPackage.id);
                    $scope.icons = [];
                    promiseIcons.then(function (data) {
                        $scope.icons = data;
                    });
                    me.togglePublishDisabled = false;
                }, function () {
                    alert('Failed to toggle publish.');
                    me.togglePublishDisabled = false;
                });
            },
            user: {
                name: 'Error',
                twitter: 'Error'
            },
            icon: {
                id: null,
                name: 'Error',
                description: '',
                data: $scope.errorData,
                previewData: $scope.errorData
            },
            selectedTag: null,
            tags: [],
            field: {
                name: {
                    isInvalid: false
                },
                description: {
                    isInvalid: false
                },
                data: {
                    isInvalid: false
                }
            },
            unusedTags: [],
            onDataChange: function () {
                if (this.icon.data.match(/^(Z|M([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+)|C([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+)|A([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+)|[VH]([-]?\d+\.\d+|[-]?\d+)|L([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+))+$/)) {
                    $scope.form.data.$setValidity("syntax", true);
                    this.icon.previewData = this.icon.data;
                } else {
                    $scope.form.data.$setValidity("syntax", false);
                    this.icon.previewData = $scope.errorData;
                }
            },
            cleanData: function () {
                this.icon.data = cleanData(this.icon.data);
                this.onDataChange();
            },
            addTag: function () {
                var tagId = this.selectedTag.id;
                var editForm = $scope.editForm;
                var promise = IconService.addTag(this.icon.id, tagId);
                promise.then(function (tags) {
                    editForm.tags = tags;
                    editForm.unusedTags = UtilService.diffArray($scope.tags, editForm.tags);
                    editForm.selectedTag = editForm.unusedTags[0];
                }, function () {

                });
            },
            removeTag: function (tag) {
                var editForm = $scope.editForm;
                var promise = IconService.removeTag(tag.id);
                promise.then(function (tags) {
                    editForm.tags = tags;
                    editForm.unusedTags = UtilService.diffArray($scope.tags, editForm.tags);
                    editForm.selectedTag = editForm.unusedTags[0];
                }, function () {

                });
            },
            submit: function () {
                var editForm = this;

                var promise = IconService.admin.setIcon({
                    id: editForm.icon.id,
                    name: editForm.icon.name,
                    description: editForm.icon.description,
                    data: editForm.icon.data
                });
                promise.then(function () {
                    $scope.state.loadingIcons = true;
                    var promiseIcons = IconService.admin.getIcons($scope.state.selectedPackage.id);
                    $scope.icons = [];
                    promiseIcons.then(function (data) {
                        $scope.icons = data;
                        $scope.state.loadingIcons = false;
                        editForm.hide();
                    }, function () {
                        alert('failed to load list');
                        $scope.state.loadingIcons = false;
                        editForm.hide();
                    });
                }, function () {
                    alert('Failed to save. Weird.');
                });
            }
        };

        $scope.addForm = {
            isVisible: false,
            isDelayVisible: false,
            show: function () {
                var addForm = this;

                var body = $document.find('body').eq(0);
                body.addClass('modal-open');
                addForm.isDelayVisible = true;
                $timeout(function () {
                    addForm.isVisible = true;
                }, 1);
            },
            hide: function () {
                var addForm = this;
                var body = $document.find('body').eq(0);
                addForm.isVisible = false;
                $timeout(function () {
                    body.removeClass('modal-open');
                    addForm.isDelayVisible = false;
                }, 300);
            },
            user: {
                name: 'Error',
                twitter: 'Error'
            },
            icon: {
                name: '',
                description: '',
                data: '',
                previewData: $scope.errorData
            },
            field: {
                name: {
                    isInvalid: false
                },
                description: {
                    isInvalid: false
                },
                data: {
                    isInvalid: false
                }
            },
            upload: null,
            onDataChange: function () {
                if (this.icon.data.match(/^(Z|M([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+)|C([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+)|A([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+) ([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+)|[VH]([-]?\d+\.\d+|[-]?\d+)|L([-]?\d+\.\d+|[-]?\d+),([-]?\d+\.\d+|[-]?\d+))+$/)) {
                    $scope.form.data.$setValidity("syntax", true);
                    this.icon.previewData = this.icon.data;
                } else {
                    $scope.form.data.$setValidity("syntax", false);
                    this.icon.previewData = $scope.errorData;
                }
            },
            cleanData: function () {
                this.icon.data = cleanData(this.icon.data);
                this.onDataChange();
            },
            submit: function () {
                var addForm = this;

                var promise = IconService.admin.createIcon({
                    packageId: $scope.state.selectedPackage.id,
                    name: addForm.icon.name,
                    description: addForm.icon.description,
                    data: addForm.icon.data
                });
                promise.then(function () {
                    var promiseIcons = IconService.admin.getIcons($scope.state.selectedPackage.id);
                    $scope.icons = [];
                    promiseIcons.then(function (data) {
                        $scope.icons = data;
                        $scope.state.loadingIcons = false;
                        addForm.hide();
                    }, function () {
                        alert('failed to load list');
                        $scope.state.loadingIcons = false;
                        addForm.hide();
                    });
                    addForm.icon.name = '';
                    addForm.icon.description = '';
                    addForm.icon.data = '';
                    addForm.icon.previewData = $scope.errorData;
                }, function (errorMessage) {
                    alert(errorMessage);
                });
            }
        };
        $scope.$watch('addForm.upload', function (upload, oldValue) {
            if (upload === null) { return; }
            if (upload.name) {
                if (UtilService.inArray($scope.icons, upload.name, 'name')) {
                    $scope.addForm.field.name.isInvalid = true;
                }
                $scope.addForm.icon.name = upload.name;
            }
            if (upload.data && upload.data != '') {
                $scope.addForm.icon.data = upload.data;
                $scope.addForm.cleanData();
            }
        });

        $scope.inviteForm = {
            email: '',
            submit: function () {
                if (this.email == '') {
                    alert('Email required.');
                    return;
                }
                var promiseInvite = UserService.admin.inviteUser(this.email);
                promiseInvite.then(function () {
                    $scope.inviteForm.email = '';
                    alert('User Invited.');
                }, function (message) {
                    alert(message);
                });
            }
        };

    }
]);