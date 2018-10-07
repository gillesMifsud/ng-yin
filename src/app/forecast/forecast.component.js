"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var weather_service_1 = require('../weather/weather.service');
var round_pipe_1 = require('../pipes/round.pipe');
var ForecastComponent = (function () {
    function ForecastComponent(router, _weatherService) {
        this.router = router;
        this._weatherService = _weatherService;
        this.today = Date.now();
        this.now = new Date().toLocaleString();
        this.city = "strasbourg";
        this.days = 7;
    }
    ForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weatherService.getWeatherForecast(this.city, this.days)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    ForecastComponent.prototype.searchCity = function (city) {
        var _this = this;
        this._weatherService.getWeatherForecast(city, this.days)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    ForecastComponent.prototype.getForecast = function (city, days) {
        var _this = this;
        this._weatherService.getWeatherForecast(city, days)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    ForecastComponent = __decorate([
        core_1.Component({
            selector: 'forecast',
            templateUrl: '/app/forecast/forecast.component.html',
            styleUrls: ['app/forecast/forecast.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, weather_service_1.WeatherService],
            pipes: [round_pipe_1.RoundPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, weather_service_1.WeatherService])
    ], ForecastComponent);
    return ForecastComponent;
}());
exports.ForecastComponent = ForecastComponent;
//# sourceMappingURL=forecast.component.js.map