import {Component, Input, OnInit} from '@angular/core';
import {People} from "../../../models/people";

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {

  @Input() resources?: People[];

  constructor() { }

  ngOnInit(): void {
  }
}
