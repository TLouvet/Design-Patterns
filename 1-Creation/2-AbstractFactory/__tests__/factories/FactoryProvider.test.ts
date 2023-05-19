import { BollywoodMovieFactory } from "../../src/factories/BollywoodMovieFactory";
import { FactoryProvider } from "../../src/factories/FactoryProvider";
import { HollywoodMovieFactory } from "../../src/factories/HollywoodMovieFactory";
import { MovieFactoryType } from "../../src/types";

describe("FactoryProvider", () => {
  it("should return a valid class instance", () => {
    expect(FactoryProvider.getFactory("Bollywood")).toBeInstanceOf(
      BollywoodMovieFactory
    );
    expect(FactoryProvider.getFactory("Hollywood")).toBeInstanceOf(
      HollywoodMovieFactory
    );
  });

  it("should throw an error if an invalid factory type is passed", () => {
    expect(() =>
      FactoryProvider.getFactory("Invalid" as MovieFactoryType)
    ).toThrowError("Invalid factory type");
  });
});
