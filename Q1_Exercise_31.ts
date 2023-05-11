export {}
const userNames : string[] = ["user1", "user2", "admin", "user3", "user4"];
for (let index = 0; index < userNames.length; index++) {
    if (userNames[index]=="admin") {
        console.log(`Hello ${userNames[index]}, would you like to see a status report?`);
        
    } else {
        console.log(`Hello ${userNames[index]}, thankyou for logging again.`);
    }
}
if (userNames.length>0) {
    console.log(`User list is not empty.`);
} else {
    console.log(`We need to find some users!`);
}
let removedUser : string | undefined = "temp";
do {
    removedUser = userNames.pop();
} while (removedUser != undefined);
console.log(`We need to find some users! (2nd check)`);