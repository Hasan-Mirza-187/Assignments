let placesList : string[] = ["Turkey", "United States", "China", "Australia", "Austria"];
console.log(placesList);
let tempPlaceList : string[]=[];
let tempPlace : string;
let tempPlaceList2 : string[]=[];
tempPlaceList2 = [...placesList];
tempPlaceList[0]= placesList[0];
for (let index = 0; index < placesList.length; index++) {
    tempPlaceList[index] = placesList[index];    
}
console.log(`Sorted list : ${tempPlaceList.sort()}`);
console.log(`Origional list : ${placesList}`);
console.log(tempPlaceList2);
