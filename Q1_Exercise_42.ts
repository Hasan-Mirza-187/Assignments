export {}
let magiciannames : string[] = ["Magician_1", "Magician_2", "Magician_3", "Magician_4"];
let greatmagicians = makeGreat(magiciannames);
showMagicians(greatmagicians);

function showMagicians(nameList:string[]) {
    for (let index = 0; index < nameList.length; index++) {
        console.log(nameList[index]);
    }

}

function makeGreat(nameList:string[]) :string[]{
    for (let index = 0; index < nameList.length; index++) {
        nameList[index]="Great "+nameList[index];
    }
    return nameList;
}