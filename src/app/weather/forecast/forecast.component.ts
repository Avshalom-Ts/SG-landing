import { Component } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent {
  constructor(forecastService: ForecastService) {
    forecastService.getForecast().subscribe((weatherResponse) => {
      console.log(weatherResponse);
    });
  }
}
