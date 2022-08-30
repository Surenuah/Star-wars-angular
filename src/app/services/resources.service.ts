import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {People} from "../../models/people";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getHeroes(resource: string): Observable<People[]> {
    return this.http.get<People[]>(`https://swapi.dev/api/${resource}/`);
  }

  getHero(resource: string, id: number): Observable<any> {
    return this.http.get<any>(`https://swapi.dev/api/${resource}/${id}`);
  }
}
