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
                        rights: function (user, $q, $stateParams) {
                            var routeUid = $stateParams.uid;
                            return $q(function (resolve, reject) {
                                if (user.groups && user.groups.indexOf('manager') > -1) {
                                    if (!user.uid || user.uid !== routeUid) {
                                        reject();
                                    } else {
                                        resolve();
                                    }
                                } else {
                                    reject();
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
                .state("app.manager.clients", {
                    url: "/clients",
                    controller: "ManagerClientsCtrl as managerClients",
                    templateUrl: "scripts/auth/views/manager-clientsCtrl.html"
                })
                .state("app.manager.ad", {
                    url: "/advertisement",
                    controller: "ManagerAdCtrl as managerAd",
                    templateUrl: "scripts/ad/promotion/views/manager-adCtrl.html"
                })
//#state'
        });
})();
