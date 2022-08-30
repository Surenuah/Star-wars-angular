import { Component, OnInit } from '@angular/core';
import {ResourcesService} from "../../services/resources.service";
import {People} from "../../../models/people";
import {Planets} from "../../../models/planets";
import {Films} from "../../../models/films";
import {Species} from "../../../models/species";
import {Starships} from "../../../models/starships";
import {Vehicles} from "../../../models/vehicles";

@Component({
  selector: 'app-nav-resources',
  templateUrl: './nav-resources.component.html',
  styleUrls: ['./nav-resources.component.scss']
})
export class NavResourcesComponent implements OnInit {

  constructor(
    private resourceService: ResourcesService
  ) { }

  resources?: People[];
  selectedPerson = false;

  getHeroes(url: string): void {
    this.selectedPerson = true;
    const resource = url.split("/")[4];
    this.resourceService.getHeroes(resource).subscribe((resources: any) => {
      this.resources = resources.results;
      console.log(this.resources)
    });
  }

  ngOnInit(): void {
  }

}
