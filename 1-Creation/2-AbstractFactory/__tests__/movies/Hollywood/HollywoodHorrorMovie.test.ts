import { HollywoodHorrorMovie } from "../../../src/movies/Hollywood/HollywoodHorrorMovie";

describe("HollywoodHorrorMovie", () => {
  let movie: HollywoodHorrorMovie;

  beforeEach(() => {
    movie = new HollywoodHorrorMovie();
  });

  it("should return a valid class instance", () => {
    expect(movie).toBeInstanceOf(HollywoodHorrorMovie);
  });

  it("scary method should return the correct string", () => {
    expect(movie.scare()).toBe("Hollywood horror movie is making you scared");
  });
});
