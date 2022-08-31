import { Component, OnInit } from '@angular/core';
import {Vehicles} from "../../../models/vehicles";
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles?: Vehicles;

  constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.queryParamMap.get("resource"))));
    this.resourceService.getVehicles(resource, id).subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

}
