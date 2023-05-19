import { BollyWoodComedyMovie } from "../../../src/movies/Bollywood/BollywoodComedyMovie";

describe("BolllywoodComedyMovie", () => {
  let movie: BollyWoodComedyMovie;

  beforeEach(() => {
    movie = new BollyWoodComedyMovie();
  });

  it("should return a valid class instance", () => {
    expect(movie).toBeInstanceOf(BollyWoodComedyMovie);
  });

  it("fun method should return the correct string", () => {
    expect(movie.beFun()).toBe("Bollywood comedy movie is making you laugh");
  });
});
