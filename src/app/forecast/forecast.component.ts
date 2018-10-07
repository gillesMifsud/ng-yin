import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {WeatherService} from '../weather/weather.service';

@Component({
    selector: 'forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css'],
    providers: [WeatherService]
})

export class ForecastComponent implements OnInit {

    response: string;
    today: number = Date.now();
    now: any = new Date().toLocaleString();

    city: string;

    days: number = 5;
    temp: any;
    conditionId: number;
    bgWeatherImg: string = '/assets/img/weatherBg/wall.png';
    conditionColor: string;

    responseCod: number;
    cityExists: boolean;

    cityValid: boolean;

    constructor(public router: Router,
        private _weatherService: WeatherService) {}

    ngOnInit()
    {
        this._weatherService.getWeatherForecast(this.city = "strasbourg", this.days)
            .subscribe(
                response => {
                    this.response = response;
                    this.responseCod = response.cod;
                    this.checkCityExists(this.responseCod);
                    this.temp = response.list[0].temp.day;
                    this.conditionId = response.list[0].weather[0].id;
                    this.getCurrentHour();
                    this.setColorFromCondition(this.conditionId);
                },
                error => console.log(error)
            );
    }

    getCurrentHour()
    {
        let date = new Date();
        let currentHour = date.getHours();
        if(currentHour>=6 && currentHour<=18)
        {
            this.bgWeatherImg = "/assets/img/weatherBg/daySunny.png";
        }
        else if (currentHour>=19 && currentHour<=21)
        {
            this.bgWeatherImg = "/assets/img/weatherBg/beforeNight.png";
        }
        else
        {
            this.bgWeatherImg = "/assets/img/weatherBg/night.png";
        }
    }

    searchCity(city)
    {
        if(city>3 || isNaN(city))
        {
            this._weatherService.getWeatherForecast(city, this.days)
            .subscribe(response => {
                    this.response = response;
                    this.responseCod = response.cod;
                    this.checkCityExists(this.responseCod);
                    this.temp = response.list[0].temp.day;
                    this.conditionId = response.list[0].weather[0].id;
                    this.getCurrentHour();
                    this.setColorFromCondition(this.conditionId);
                    /*console.log(this.conditionId);*/
                },
                error => console.log(error)
            );
        }
        else
        {
          console.log("error: not a city valid or type at least 3 numbers")
        }
    }

    checkCityExists(cod)
    {
        if(cod == 200 || cod !=404)
        {
            this.cityExists = true
        }
        else this.cityExists = false;
    }

    getForecast(city, days)
    {
        this._weatherService.getWeatherForecast(city, days)
            .subscribe(
                response => this.response = response,
                error => console.log(error)
            );
    }

    setColorFromCondition(apiConditionId)
    {
        if(apiConditionId)
        {
            if(apiConditionId>=200 && apiConditionId<=232)
            {
                this.conditionColor = "thunderstorm";
            }
            else if(apiConditionId>=300 && apiConditionId<=321)
            {
                this.conditionColor = "drizzle";
            }
            else if(apiConditionId>=500 && apiConditionId<=531)
            {
                this.conditionColor = "rain";
            }
            else if(apiConditionId>=600 && apiConditionId<=622)
            {
                this.conditionColor = "snow";
            }
            else if(apiConditionId>=700 && apiConditionId<=781)
            {
                this.conditionColor = "atmosphere";
            }
            else if(apiConditionId = 800)
            {
                this.conditionColor = "clear";
            }
            else if(apiConditionId>=801 && apiConditionId<=804)
            {
                this.conditionColor = "clouds";
            }
            else if(apiConditionId>=900 && apiConditionId<=906)
            {
                this.conditionColor = "extreme";
            }
            else if(apiConditionId>=951 && apiConditionId<=962)
            {
                this.conditionColor = "additional";
            }
        }
        else
        {
            this.conditionColor = "default"
        }
        console.log(this.conditionColor);
    }

}
