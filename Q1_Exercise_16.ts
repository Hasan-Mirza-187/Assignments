let guestInvitation : string[] = ["Hasan","Haseeb", "Usman"];
printInvitation(guestInvitation);

let notAvailable: string = "Haseeb";
console.log(`Sorry, ${notAvailable} won't be able to make to the dinner.`);
let index : number = guestInvitation.indexOf("Haseeb");
if(index != -1){
    guestInvitation[index]= "Amir";
    console.log(`New invitation list as as follows:`);
    printInvitation(guestInvitation);
}
console.log(`Bigger dinner table available. More guests are welcome.`);
guestInvitation.unshift("Sidra");
guestInvitation.push("Umair");
let noOfGuests:  number = guestInvitation.length;
let midPoint: number = Math.floor(noOfGuests/2);
guestInvitation.splice(midPoint,0,"Ejaz");
printInvitation(guestInvitation);

console.log(`Sorry for inconvience. Only two guests are allowed.`);
let removedGuest : string | undefined = "";

let removeCounter : number = guestInvitation.length;
for (let index = 0; index < removeCounter-2; index++) {
    removedGuest = guestInvitation.pop();
    console.log(`Sorry, we cannot invite "${removedGuest}" to dinner.`);
}
//console.log(`Dear "${guestInvitation[0]}" and "${guestInvitation[1]}" you are still invited at dinner.`);
printInvitation(guestInvitation);
removeCounter  = guestInvitation.length;
for (let index = 0; index < removeCounter; index++) {
    removedGuest = guestInvitation.pop();
    if(removedGuest === undefined){
        console.log(`No more Guests left...`);
    }
    else{
        console.log(`Sorry, we cannot invite "${removedGuest}" to dinner.`);
    }   
}
removedGuest = guestInvitation.pop();
if(removedGuest == undefined){
    console.log(`No more Guests left...`);
}

/*   *********************************************************   */
export function printInvitation(printArray : string[]) : void {
    for (let index = 0; index < printArray.length; index++) {
        console.log(`Dear ${printArray[index]}! You are invited for dinner at our house.`);
}

}