import {Component, OnInit} from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  styles: [`
    a {
      color: white;
      text-decoration:none;
    }
    span {
        margin: 0px 5px;
    }
  `],
  template: `
    <span *ngIf="response">
        <i class="icons wi wi-owm-{{response.weather[0].id}}"></i>
        <b class="text-uppercase">{{temp}}°</b>         
    </span>
    `,
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit{

    response:string;
    temp:number;
    today:number = Date.now();

    constructor(private _weatherService: WeatherService) {}

    getPosition(){
        this._weatherService.getPosition();
    }

    ngOnInit() {
        this._weatherService.getWeather()
        .subscribe(
        response => {
            this.response = response,
            this.temp = Math.round(response.main.temp)},
        error => console.log(error)
      );
    }

    getWeather(){
        this._weatherService.getWeather()
        .subscribe(
        response => this.response = response,
        error => console.log(error)
      );
    }

}
