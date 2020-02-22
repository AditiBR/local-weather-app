import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-city-serach',
  templateUrl: './city-serach.component.html',
  styleUrls: ['./city-serach.component.css']
})
export class CitySerachComponent implements OnInit {

  search = new FormControl();
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((searchValue: string) => {
      if(searchValue){
        const userInput = searchValue.split(',').map(s => s.trim());
        this.weatherService.getCurrentWeather(
          userInput[0], 
          userInput.length>1 ? userInput[1]: undefined).subscribe(data => console.log(data)); 

      }
    })
  }

}
