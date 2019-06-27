import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { DataService } from '../data.service';

@Component({
  selector: 'city-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  public newCity: City;
  data: DataService;

  constructor(dataService : DataService) {
    this.data = dataService;
  }

  ngOnInit() {
    this.newCity = new City();
  }

  addCity(addForm) : void{
    if(addForm.valid){
      var cityToAdd = this.newCity;
      this.newCity = new City();
      this.data.addCity(cityToAdd);
    } else {
      console.error("Add city form is invalid");
    }
  }

}
