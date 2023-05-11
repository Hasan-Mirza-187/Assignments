makeShirt();
makeShirt("medium");
makeShirt("small",'I love IPAIC');
function makeShirt(size:string = "large", message:string = "I love TypeScript") {
   console.log(`A ${size.toLocaleUpperCase()} sized shirt with message: "${message}" is ready.`)
}