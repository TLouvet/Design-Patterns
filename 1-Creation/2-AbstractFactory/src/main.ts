import { FactoryProvider } from "./factories/FactoryProvider";

const bollywoodFactory = FactoryProvider.getFactory("Bollywood");
const hollywoodFactory = FactoryProvider.getFactory("Hollywood");

const bollywoodComedyMovie = bollywoodFactory.getComedyMovie();
const bollywoodHorrorMovie = bollywoodFactory.getHorrorMovie();

const hollywoodComedyMovie = hollywoodFactory.getComedyMovie();
const hollywoodHorrorMovie = hollywoodFactory.getHorrorMovie();

console.log(bollywoodComedyMovie.beFun());
console.log(bollywoodHorrorMovie.scare());

console.log(hollywoodComedyMovie.beFun());
console.log(hollywoodHorrorMovie.scare());
