export {}
let magiciannames : string[] = ["Magician_1", "Magician_2", "Magician_3", "Magician_4"];
let greatmagicians = makeGreat(magiciannames);
console.log(`Original Array:`);
showMagicians(magiciannames);
console.log(`Modified Array:`);
showMagicians(greatmagicians);

function showMagicians(nameList:string[]) {
    for (let index = 0; index < nameList.length; index++) {
        console.log(nameList[index]);
    }

}

function makeGreat(nameList:string[]) :string[]{
    let copyNames:string[]=[];
    for (let index = 0; index < nameList.length; index++) {
        copyNames[index]="Great "+nameList[index];
    }
    return copyNames;
}