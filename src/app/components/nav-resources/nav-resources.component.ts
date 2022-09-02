import { Component, OnInit } from '@angular/core';
import {ResourcesService} from "../../services/resources.service";
import {People} from "../../../models/people";

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

  ngOnInit(): void {
    this.resourceService.getResources().subscribe(res => {
      this.resources = res;
    });
  }

}
