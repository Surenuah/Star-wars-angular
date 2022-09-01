import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute} from "@angular/router";
import {People} from "../../../models/people";
import {Location} from "@angular/common";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people?: People;

  constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.queryParamMap.get("resource"))));
    this.resourceService.getPeople(resource, id).subscribe(people => {
      this.people = people;
    });
  }

  goBack(): void {
    this.location.back();
  }

}

