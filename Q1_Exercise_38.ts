describeCity("Lahore");
describeCity("Multan");
describeCity("London","UK");
function describeCity(city:string, country:string = "Pakistan") {
   console.log(`${city} is in "${country}".`)
}