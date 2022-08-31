import { Component, OnInit } from '@angular/core';
import {Starships} from "../../../models/starships";
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships?: Starships;

  constructor(
    private resourceService: ResourcesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.queryParamMap.get("resource"))));
    this.resourceService.getStarships(resource, id).subscribe(starships => {
      this.starships = starships;
    });
  }

}
