import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./components/people/people.component";
import {NavResourcesComponent} from "./components/nav-resources/nav-resources.component";
import {FilmsComponent} from "./components/films/films.component";
import {PlanetsComponent} from "./components/planets/planets.component";
import {SpeciesComponent} from "./components/species/species.component";
import {StarshipsComponent} from "./components/starships/starships.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {ResourceListComponent} from "./components/resource-list/resource-list.component";

const routes: Routes = [
  { path: "", component: NavResourcesComponent, pathMatch: "full" },
  { path: "list/:resources", component: ResourceListComponent },
  { path: "list/people/people/:id", component: PeopleComponent },
  { path: "list/films/films/:id", component: FilmsComponent },
  { path: "list/planets/planets/:id", component: PlanetsComponent },
  { path: "list/species/species/:id", component: SpeciesComponent },
  { path: "list/starships/starships/:id", component: StarshipsComponent },
  { path: "list/vehicles/vehicles/:id", component: VehiclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
