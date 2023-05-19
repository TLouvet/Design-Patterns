import { ComedyMovie } from "./ComedyMovie";
import { HorrorMovie } from "./HorrorMovie";

export interface AbstractMovieFactory {
  getComedyMovie(): ComedyMovie;

  getHorrorMovie(): HorrorMovie;
}
