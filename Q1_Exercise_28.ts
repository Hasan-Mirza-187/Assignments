let age : number = Math.floor(Math.random() * 70);
console.log(age);
if (age <2) {
    console.log(`Person is a baby.`);
}
if (age >=2 && age <4) {
    console.log(`Person is a todler.`);
}
if (age >=4 && age <13) {
    console.log(`Person is a kid.`);
}
if (age >=13 && age <20) {
    console.log(`Person is a teenager.`);
}
if (age >=20 && age <65) {
    console.log(`Person is an adult.`);
}
if (age >=65) {
    console.log(`Person is an elder.`);
}