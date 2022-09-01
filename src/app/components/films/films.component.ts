import { Component, OnInit } from '@angular/core';
import {Films} from "../../../models/films";
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films?: Films;

  constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.queryParamMap.get("resource"))));
    this.resourceService.getFilms(resource, id).subscribe(films => {
      this.films = films;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
