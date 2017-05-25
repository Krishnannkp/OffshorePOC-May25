/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

namespace angularWithTS.controllers {

    export class weatherController {
        
        public WI: WeatherInfo = <WeatherInfo>{};
        static $inject = ["angularWithTS.Services.weatherService"];
        constructor(private weatherService: angularWithTS.Services.weatherService) {
            this.weatherService = weatherService;
        }

        public getWeatherInfo = (searchLocation: string) => {         
        this.weatherService.getWeatherInfo(searchLocation).then((data: any)=>
        {     
           this.WI.astronomy  = data.query.results.channel.astronomy;
           this.WI.atmosphere = data.query.results.channel.atmosphere;
           this.WI.forecast   = data.query.results.channel.item.forecast;
           this.WI.location   = data.query.results.channel.location; 
       });
        
     }          
    }    
    angular.module("angularWithTS").controller("angularWithTS.controllers.weatherController", weatherController);
}
