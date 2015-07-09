(function () {
    'use strict'
    angular.module('auth.manager', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                // =Manager Profile
                .state("app.manager", {
                    url: "/manager/:uid",
                    abstract: true,
                    resolve: {
                        rights: function ($q, $stateParams, userAuth, userPromise) {
                            var routeUid = $stateParams.uid;
                            return $q(function (resolve, reject) {
                                if (userAuth.profile && userAuth.profile.role && userAuth.profile.role === 'manager' && userAuth.key === routeUid) {
                                    resolve();
                                } else {
                                    reject('You do not have enough priviliges to view that page!');
                                }
                            })
                        }
                    },
                    controller: "ManagerCtrl as manager",
                    templateUrl: "scripts/auth/manager/views/managerCtrl.html"
                })
                .state("app.manager.dashboard", {
                    url: "/dashboard",
                    controller: "ManagerDashboardCtrl as managerDashboard",
                    templateUrl: "scripts/auth/manager/views/manager-dashboardCtrl.html"
                })
                .state("app.manager.users", {
                    url: "/users",
                    controller: "ManagerUsersCtrl as managerUsers",
                    templateUrl: "scripts/auth/manager/views/manager-usersCtrl.html"
                })
                .state("app.manager.ad", {
                    url: "/advertisement",
                    controller: "ManagerAdCtrl as managerAd",
                    templateUrl: "scripts/ad/promotion/views/manager-adCtrl.html"
                })
                .state("app.manager.ad.start", {
                    url: "/manage-promotion/:id",
                    controller: "NewPromotionByManagerCtrl",
                    templateUrl: "scripts/ad/promotion/views/new-promotion-by-managerCtrl.html"
                })
//#state'
        });
})();