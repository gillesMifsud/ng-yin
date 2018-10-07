import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable() 

export class WeatherService {

    public location: Location ;
    
    coordinates;

    private url = "http://api.openweathermap.org/data/2.5/";
    private key = "&APPID=049f9edd42bc42e8cd637065d7fa5cf7";

    private url1 = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
    private url2 = "&mode=json&units=metric&lang=fr&APPID=049f9edd42bc42e8cd637065d7fa5cf7";

    private gKey = "&key=AIzaSyA2sai72BCGthE_p_SpyiqL5ZSOIDufz1Y";
    private picApi = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
        
    constructor( public http: Http) {}

    getPosition() {
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
        };

        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        return navigator.geolocation.getCurrentPosition(success, error, options);
    }

    getWeather() {
        return this.http.get(this.url + "weather?zip=67000,fr&lang=fr&units=metric" + this.key )
        .map(res => res.json());
    }

    getWeatherForecast(city, days) {
        return this.http.get(this.url + "forecast/daily?q=" + city + "&lang=fr&units=metric&cnt=" + days + this.key )
        .map(res => res.json());
    }

}