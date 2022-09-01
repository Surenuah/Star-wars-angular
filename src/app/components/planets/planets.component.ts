import { Component, OnInit } from '@angular/core';
import {Planets} from "../../../models/planets";
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets?: Planets;

  constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.queryParamMap.get("resource"))));
    this.resourceService.getPlanets(resource, id).subscribe(planets => {
      this.planets = planets;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
