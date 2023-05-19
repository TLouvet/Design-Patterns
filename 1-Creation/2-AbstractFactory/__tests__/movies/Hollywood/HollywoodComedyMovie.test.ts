import { HollywoodComedyMovie } from "../../../src/movies/Hollywood/HollywoodComedyMovie";

describe("HollywoodComedyMovie", () => {
  let movie: HollywoodComedyMovie;

  beforeEach(() => {
    movie = new HollywoodComedyMovie();
  });

  it("should return a valid class instance", () => {
    expect(movie).toBeInstanceOf(HollywoodComedyMovie);
  });

  it("fun method should return the correct string", () => {
    expect(movie.beFun()).toBe("Hollywood comedy movie is making you laugh");
  });
});
