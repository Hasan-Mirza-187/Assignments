export {}
let magiciannames : string[] = ["Magician_1", "Magician_2", "Magician_3", "Magician_4"];
showMagicians(magiciannames);

function showMagicians(nameList:string[]) {
    for (let index = 0; index < nameList.length; index++) {
        console.log(nameList[index]);
    }

}