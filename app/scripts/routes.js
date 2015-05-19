(function () {
    'use strict'
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state("app", {
                    abstract: true,
                    controller: "AppCtrl as app",
                    resolve: {
                        userPromise: function (AuthenticationServ) {
                            return AuthenticationServ.checkUserStatus();
                        }
                    },
                    template: "<div ui-view=''></div>"
                })
                .state("app.sign-up", {
                    url: "/sign-up",
                    controller: "SignUpCtrl as signUp",
                    templateUrl: "scripts/auth/views/sign-upCtrl.html",
                    resolve: {
                        currentUser: function (userAuth, $q) {
                            return $q(function (resolve, reject) {
                                var isLoggedIn = !!userAuth.profile;
                                if (isLoggedIn) {
                                    reject('You are already logged in. Logout First');
                                } else {
                                    resolve();
                                }
                            })
                        }
                    }
                })
                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl as login",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html",
                    resolve: {
                        currentUser: function (userAuth, $q) {
                            return $q(function (resolve, reject) {
                                var isLoggedIn = !!userAuth.profile;
                                if (isLoggedIn) {
                                    reject('You are already logged in');
                                } else {
                                    resolve();
                                }
                            })
                        }
                    }
                })
                .state("app.home", {
                    url: "/home",
                    resolve: {
                        svetNewsPromise: function (ArticlesServ) {
                            return ArticlesServ.setHomeNewsLive();
                        }
                    },
                    controller: "HomeCtrl as home",
                    templateUrl: "scripts/sections/home/views/homeCtrl.html"
                })
                .state("app.y", {
                    url: "/y",
                    controller: "YCtrl as y",
                    templateUrl: "ad/classified/views/yCtrl.html"
                })
//#state'
        });
})();