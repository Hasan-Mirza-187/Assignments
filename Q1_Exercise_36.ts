let size : string = "medium";
let message : string = "I love PIAIC.";
makeShirt(size,message)
function makeShirt(size:string, message:string) {
   console.log(`A ${size.toLocaleUpperCase()} sized shirt with meaasge: "${message}" is ready.`)
}