import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {People} from "../../models/people";
import {Films} from "../../models/films";
import {Planets} from "../../models/planets";
import {Species} from "../../models/species";
import {Starships} from "../../models/starships";
import {Vehicles} from "../../models/vehicles";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getCategory(resource: string): Observable<any> {
    return this.http.get<any>(`https://swapi.dev/api/${resource}/`);
  }

  getPeople(resource: string, id: number): Observable<People> {
    return this.http.get<People>(`https://swapi.dev/api/${resource}/${id}`);
  }

  getFilms(resource: string, id: number): Observable<Films> {
    return this.http.get<Films>(`https://swapi.dev/api/${resource}/${id}`);
  }

  getPlanets(resource: string, id: number): Observable<Planets> {
    return this.http.get<Planets>(`https://swapi.dev/api/${resource}/${id}`);
  }

  getSpecies(resource: string, id: number): Observable<Species> {
    return this.http.get<Species>(`https://swapi.dev/api/${resource}/${id}`);
  }

  getStarships(resource: string, id: number): Observable<Starships> {
    return this.http.get<Starships>(`https://swapi.dev/api/${resource}/${id}`);
  }

  getVehicles(resource: string, id: number): Observable<Vehicles> {
    return this.http.get<Vehicles>(`https://swapi.dev/api/${resource}/${id}`);
  }
}
