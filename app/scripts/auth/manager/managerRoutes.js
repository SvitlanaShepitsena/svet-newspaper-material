(function () {
    'use strict'
    angular.module('auth.manager', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                // =Manager Profile
                .state("app.manager", {
                    url: "/manager/:uid",
                    abstract: true,
                    controller: "ManagerCtrl as manager",
                    templateUrl: "manager/views/managerCtrl.html"
                })
                .state("app.manager.dashboard", {
                    url: "/dashboard",
                    controller: "ManagerDashboardCtrl as managerDashboard",
                    templateUrl: "manager/views/manager-dashboardCtrl.html"
                })
                .state("app.manager.users", {
                    url: "/users",
                    controller: "ManagerUsersCtrl as managerUsers",
                    templateUrl: "manager/views/manager-usersCtrl.html"
                })
                .state("app.manager.clients", {
                    url: "/clients",
                    controller: "ManagerClientsCtrl as managerClients",
                    templateUrl: "scripts/auth/views/manager-clientsCtrl.html"
                })
                .state("app.manager.ad", {
                    url: "/advertisement",
                    controller: "ManagerAdCtrl as managerAd",
                    templateUrl: "../ad/promotion/views/manager-adCtrl.html"
                })
//#state'
        });
})();
