import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'company-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  data: DataService;
  
  constructor(dataService : DataService) {
    this.data = dataService;
  }

  ngOnInit() {
  }

}
