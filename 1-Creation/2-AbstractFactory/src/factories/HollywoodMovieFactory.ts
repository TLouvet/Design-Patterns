import { AbstractMovieFactory } from "../interfaces/AbstractFactoryMovie";
import { HollywoodComedyMovie } from "../movies/Hollywood/HollywoodComedyMovie";
import { HollywoodHorrorMovie } from "../movies/Hollywood/HollywoodHorrorMovie";

export class HollywoodMovieFactory implements AbstractMovieFactory {
  getComedyMovie() {
    return new HollywoodComedyMovie();
  }

  getHorrorMovie() {
    return new HollywoodHorrorMovie();
  }
}
