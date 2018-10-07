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
var http_1 = require('@angular/http');
var weather_service_1 = require('./weather.service');
var WeatherComponent = (function () {
    function WeatherComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.today = Date.now();
    }
    WeatherComponent.prototype.getPosition = function () {
        this._weatherService.getPosition();
    };
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weatherService.getWeather()
            .subscribe(function (response) {
            _this.response = response,
                _this.temp = Math.round(response.main.temp);
        }, function (error) { return console.log(error); });
    };
    WeatherComponent.prototype.getWeather = function () {
        var _this = this;
        this._weatherService.getWeather()
            .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather',
            styles: ["\n    a {\n      color: white;\n      text-decoration:none;\n    }\n    span {\n        margin: 0px 5px;\n    }\n  "],
            template: "\n    <span *ngIf=\"response\">\n        <i class=\"icons wi wi-owm-{{response.weather[0].id}}\"></i>\n        <br />\n        <b class=\"text-uppercase\">{{temp}}\u00B0</b>         \n    </span>\n    ",
            providers: [http_1.HTTP_PROVIDERS, weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map