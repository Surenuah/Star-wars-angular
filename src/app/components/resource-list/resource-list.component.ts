import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ResourcesService} from "../../services/resources.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {

  @Input() resources?: any;

  constructor(
    private resourceService: ResourcesService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const resource = JSON.parse(decodeURIComponent(JSON.stringify(this.route.snapshot.paramMap.get("resources"))));
    this.resourceService.getCategory(resource).subscribe(resources => {
      this.resources = resources.results;
    })
  }

  goBack(): void {
    this.location.back();
  }
}
