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
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.url = "http://api.openweathermap.org/data/2.5/";
        this.key = "&APPID=049f9edd42bc42e8cd637065d7fa5cf7";
        this.url1 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
        this.url2 = "&mode=json&units=metric&lang=fr&APPID=049f9edd42bc42e8cd637065d7fa5cf7";
        this.gKey = "&key=AIzaSyA2sai72BCGthE_p_SpyiqL5ZSOIDufz1Y";
        this.picApi = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
    }
    WeatherService.prototype.getPosition = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        function success(pos) {
            var crd = pos.coords;
            this.lat = crd.latitude;
            this.long = crd.longitude;
            console.log('Position actuelle:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('Plus ou moins ' + crd.accuracy + ' metres.');
        }
        ;
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        ;
        return navigator.geolocation.getCurrentPosition(success, error, options);
    };
    WeatherService.prototype.getWeather = function () {
        return this.http.get(this.url + "weather?zip=67000,fr&lang=fr&units=metric" + this.key)
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.getWeatherForecast = function (city, days) {
        return this.http.get(this.url + "forecast/daily?q=" + city + "&lang=fr&units=metric&cnt=" + days + this.key)
            .map(function (res) { return res.json(); });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map