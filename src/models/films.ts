import {People} from "./people";

export interface Films extends People {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: Date,
}
