import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from "./components/people/people.component";
import {NavResourcesComponent} from "./components/nav-resources/nav-resources.component";
import {FilmsComponent} from "./components/films/films.component";
import {PlanetsComponent} from "./components/planets/planets.component";
import {SpeciesComponent} from "./components/species/species.component";
import {StarshipsComponent} from "./components/starships/starships.component";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";

const routes: Routes = [
  { path: "", component: NavResourcesComponent, pathMatch: "full" },
  { path: "people/:id", component: PeopleComponent },
  { path: "films/:id", component: FilmsComponent },
  { path: "planets/:id", component: PlanetsComponent },
  { path: "species/:id", component: SpeciesComponent },
  { path: "starships/:id", component: StarshipsComponent },
  { path: "vehicles/:id", component: VehiclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
