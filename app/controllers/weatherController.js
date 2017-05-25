/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var controllers;
    (function (controllers) {
        var weatherController = (function () {
            function weatherController(weatherService) {
                var _this = this;
                this.weatherService = weatherService;
                this.WI = {};
                this.getWeatherInfo = function (searchLocation) {
                    _this.weatherService.getWeatherInfo(searchLocation).then(function (data) {
                        _this.WI.astronomy = data.query.results.channel.astronomy;
                        _this.WI.atmosphere = data.query.results.channel.atmosphere;
                        _this.WI.forecast = data.query.results.channel.item.forecast;
                        _this.WI.location = data.query.results.channel.location;
                    });
                };
                this.weatherService = weatherService;
            }
            return weatherController;
        }());
        weatherController.$inject = ["angularWithTS.Services.weatherService"];
        controllers.weatherController = weatherController;
        angular.module("angularWithTS").controller("angularWithTS.controllers.weatherController", weatherController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=weatherController.js.map