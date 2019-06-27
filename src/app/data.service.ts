import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';

//injectable dependency
@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  cities = this.http.get<City[]>('/api/cities')

  public addCity(newCity: City): void {
    this.cities = this.http.post<City[]>('/api/addcity', newCity);
  }

  public uploadCity(data): void {
    this.http.post('/api/upload', data);
  }
}
