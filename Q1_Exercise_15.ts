{
    
    let guestInvitation : string[] = ["Hasan","Haseeb", "Usman"];

for (let index = 0; index < guestInvitation.length; index++) {
    console.log(`Dear ${guestInvitation[index]}! You are invited for dinner at our house.`);
}

let notAvailable: string = "Haseeb";
console.log(`Sorry, ${notAvailable} won't be able to make to the dinner.`);
let index : number = guestInvitation.indexOf("Haseeb");
if(index != -1){
    guestInvitation[index]= "Amir";
    console.log(`New invitation list as as follows:`);
for (let index = 0; index < guestInvitation.length; index++) {
    console.log(`Dear ${guestInvitation[index]}! You are invited for dinner at our house.`);
}
}
    

}