import { HollywoodMovieFactory } from "../../src/factories/HollywoodMovieFactory";
import { HollywoodComedyMovie } from "../../src/movies/Hollywood/HollywoodComedyMovie";
import { HollywoodHorrorMovie } from "../../src/movies/Hollywood/HollywoodHorrorMovie";

describe("HollywoodMovieFactory", () => {
  let factory: HollywoodMovieFactory;

  beforeEach(() => {
    factory = new HollywoodMovieFactory();
  });

  it("should return a valid class instance", () => {
    expect(factory).toBeInstanceOf(HollywoodMovieFactory);
  });

  it("should return a HollywoodComedyMovie instance", () => {
    expect(factory.getComedyMovie()).toBeInstanceOf(HollywoodComedyMovie);
  });

  it("should return a HollywoodHorrorMovie instance", () => {
    expect(factory.getHorrorMovie()).toBeInstanceOf(HollywoodHorrorMovie);
  });
});
