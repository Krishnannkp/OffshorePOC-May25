/// <reference path="../common.r.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
namespace angularWithTS {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { 
                controller: "angularWithTS.controllers.weatherController", 
                templateUrl: "/app/views/weatherInformation.html", 
                controllerAs: "weatherInformationList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}