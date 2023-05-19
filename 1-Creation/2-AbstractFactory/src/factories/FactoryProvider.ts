import { AbstractMovieFactory } from "../interfaces/AbstractFactoryMovie";
import { MovieFactoryType } from "../types";
import { BollywoodMovieFactory } from "./BollywoodMovieFactory";
import { HollywoodMovieFactory } from "./HollywoodMovieFactory";

export class FactoryProvider {
  static getFactory(factoryType: MovieFactoryType): AbstractMovieFactory {
    if (factoryType === "Bollywood") {
      return new BollywoodMovieFactory();
    } else if (factoryType === "Hollywood") {
      return new HollywoodMovieFactory();
    } // continue the flow as new MovieFactoryType is added

    throw new Error("Invalid factory type"); // Congrats, you managed to have a runtime error
  }
}
