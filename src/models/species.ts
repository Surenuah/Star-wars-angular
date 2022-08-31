import {People} from "./people";

export interface Species extends People {
  name: string,
  classification: string,
  designation: string,
  average_height: string,
  eye_colors: string,
  hair_colors: string,
  skin_color: string,
  language: string,
}
