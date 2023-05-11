import { toTitleCase } from "./Q1_Exercise_03";
console.log(`start`)
let city : string = "london";
let country : string = "united KIngdom";
cityCountry(city,country);

function cityCountry(city:string, country:string) {
   city = toTitleCase(city);
   country = toTitleCase(country);
   console.log(`"${city}, ${country}"`)
}