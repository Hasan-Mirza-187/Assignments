export {}
const userNames : string[] = ["user1", "user2", "admin", "user3", "user4"];
for (let index = 0; index < userNames.length; index++) {
    if (userNames[index]=="admin") {
        console.log(`Hello ${userNames[index]}, would you like to see a status report?`);
        
    } else {
        console.log(`Hello ${userNames[index]}, thankyou for logging again.`);
    }
}
