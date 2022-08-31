import { Component, OnInit } from '@angular/core';
import {Species} from "../../../models/species";
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  species?: Species;

  constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.queryParamMap.get("resource"))));
    this.resourceService.getSpecies(resource, id).subscribe(species => {
      this.species = species;
    });
  }

}
