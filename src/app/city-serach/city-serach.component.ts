import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-city-serach',
  templateUrl: './city-serach.component.html',
  styleUrls: ['./city-serach.component.css']
})
export class CitySerachComponent implements OnInit {

  search = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
