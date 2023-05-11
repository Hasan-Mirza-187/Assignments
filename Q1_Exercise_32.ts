const currentUsers : string[] = ["user1", "user2", "aDmin", "user3", "user4", "useR7"];
const newUsers : string[] = ["User1", "user5", "admin", "User2", "user7"];
let userNameMatch : Boolean = false;
for (let index = 0; index < newUsers.length; index++) {
    for (let innerIndex = 0; innerIndex < currentUsers.length; innerIndex++) {
        if (newUsers[index].toLocaleLowerCase() == currentUsers[innerIndex].toLocaleLowerCase()) {
            console.log(`"${newUsers[index]}" is not available. Please enter a new username.`);
            userNameMatch = true;
            break;
            
        } else {
            userNameMatch = false;
        }
       
    }
    if (userNameMatch == false) {
        console.log(`"${newUsers[index]}" is available.`);
    }
}