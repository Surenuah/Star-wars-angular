import {People} from "./people";

export interface Starships extends People {
  name: string,
  model: string,
  starship_class: string,
  manufacturer: string,
  length: string,
  crew: string,
  passengers: string,
  hyperdrive_rating: string,
}
