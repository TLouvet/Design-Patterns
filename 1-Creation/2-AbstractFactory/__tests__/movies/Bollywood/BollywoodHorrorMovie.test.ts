import { BollyWoodHorrorMovie } from "../../../src/movies/Bollywood/BollywoodHorrorMovie";

describe("BolllywoodHorrorMovie", () => {
  let movie: BollyWoodHorrorMovie;

  beforeEach(() => {
    movie = new BollyWoodHorrorMovie();
  });

  it("should return a valid class instance", () => {
    expect(movie).toBeInstanceOf(BollyWoodHorrorMovie);
  });

  it("scary method should return the correct string", () => {
    expect(movie.scare()).toBe("Bollywood horror movie is making you scared");
  });
});
