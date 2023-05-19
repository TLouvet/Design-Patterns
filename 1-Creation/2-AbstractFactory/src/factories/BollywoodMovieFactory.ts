import { AbstractMovieFactory } from "../interfaces/AbstractFactoryMovie";
import { BollyWoodComedyMovie } from "../movies/Bollywood/BollywoodComedyMovie";
import { BollyWoodHorrorMovie } from "../movies/Bollywood/BollywoodHorrorMovie";

export class BollywoodMovieFactory implements AbstractMovieFactory {
  getComedyMovie() {
    return new BollyWoodComedyMovie();
  }

  getHorrorMovie() {
    return new BollyWoodHorrorMovie();
  }
}
