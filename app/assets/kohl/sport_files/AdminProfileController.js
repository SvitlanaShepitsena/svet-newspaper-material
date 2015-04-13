mainControllers.controller('AdminProfileController', [
    '$scope', 'UserService',
    function ($scope, UserService) {

        $scope.profileForm = {
            avatar: '',
            name: '',
            description: '',
            twitter: '',
            website: '',
            github: '',
            isProcessing: false,
            submit: function () {
                this.isProcessing = true;
                var promiseUpdateProfile = UserService.admin.updateProfile({
                    avatar: this.avatar,
                    name: this.name,
                    description: this.description,
                    twitter: this.twitter,
                    website: this.website,
                    github: this.github
                });
                promiseUpdateProfile.then(function () {
                    alert('Updated Profile');
                    $scope.profileForm.isProcessing = false;
                }, function (error) {
                    $scope.profileForm.isProcessing = false;
                    alert(error.message);
                    });
            }
        };

        $scope.$watch('profileForm.avatar', function (newValue, oldValue) {
            if (typeof newValue != 'string') {
                $scope.profileForm.avatar = oldValue;
            }
        });

        var promiseGetProfile = UserService.admin.getProfile();
        promiseGetProfile.then(function (profile) {
            $scope.profileForm.avatar = profile.avatar;
            $scope.profileForm.name = profile.name;
            $scope.profileForm.description = profile.description;
            $scope.profileForm.twitter = profile.twitter;
            $scope.profileForm.website = profile.website;
            $scope.profileForm.github = profile.github;
        }, function () {

        });

        $scope.permissionForm = {
            permissionGroups: [{
                id: "e2367262-4929-11e4-b3cf-842b2b6cfe1b",
                name: "Tags",
                description: "Tag Permission Group",
                permissions: [{
                    id: "5b219b2a-492a-11e4-b3cf-842b2b6cfe1b",
                    name: "Add",
                    description: "Add new tags."
                }]
            }, {
                id: "6fa35962-492a-11e4-b3cf-842b2b6cfe1b",
                name: "Icons",
                description: "Icon permission group.",
                permissions: [{
                    id: "05ed7a88-492b-11e4-b3cf-842b2b6cfe1b",
                    name: "Add",
                    description: "Add icon."
                }],
            }, {
                id: "19c949b0-492b-11e4-b3cf-842b2b6cfe1b",
                name: "Users",
                description: "User permission group.",
                permissions: [{
                    id: "6d58a60c-492b-11e4-b3cf-842b2b6cfe1b",
                    name: "Invite",
                    description: "Invite user to join."
                }, {
                    id: "fb87f40e-492c-11e4-b3cf-842b2b6cfe1b",
                    name: "Edit",
                    description: "Edit users. See list and edit fields."
                }]
            }]
        };

    }
]);