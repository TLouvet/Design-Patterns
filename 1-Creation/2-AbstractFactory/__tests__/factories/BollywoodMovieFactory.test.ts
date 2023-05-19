import { BollywoodMovieFactory } from "../../src/factories/BollywoodMovieFactory";
import { BollyWoodComedyMovie } from "../../src/movies/Bollywood/BollywoodComedyMovie";
import { BollyWoodHorrorMovie } from "../../src/movies/Bollywood/BollywoodHorrorMovie";

describe("BollywoodMovieFactory", () => {
  let factory: BollywoodMovieFactory;

  beforeEach(() => {
    factory = new BollywoodMovieFactory();
  });

  it("should return a valid class instance", () => {
    expect(factory).toBeInstanceOf(BollywoodMovieFactory);
  });

  it("should return a BollyWoodComedyMovie instance", () => {
    expect(factory.getComedyMovie()).toBeInstanceOf(BollyWoodComedyMovie);
  });

  it("should return a BollyWoodHorrorMovie instance", () => {
    expect(factory.getHorrorMovie()).toBeInstanceOf(BollyWoodHorrorMovie);
  });
});
