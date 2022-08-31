import {People} from "./people";

export interface Planets extends People {
  name: string,
  diameter: string,
  rotation_period: string,
  orbital_period: string,
  gravity: string,
  population: string,
  climate: string,
  terrain: string,
  surface_water: string
}
