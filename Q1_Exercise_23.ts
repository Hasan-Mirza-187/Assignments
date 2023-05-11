export{}
let studentId : string = "LES1234";
let otherIdMultipleType : (string|number) []= [1234, "456"];
let otherIdNumberOnly : number = 1234;
let studentId2 : string = "LES1235";
let studentId3 : string = "LAS1235";

console.log(`Student ID comparison studentId=="LES1234" shoiuld be true: ${studentId=="LES1234"}`);
console.log(`Student ID comparison studentId=="LES124" shoiuld be false: ${studentId=="LES124"}`);
console.log(`Student ID comparison studentId=="les1234" shoiuld be false: ${studentId=="les1234"}`);
console.log(`Student ID comparison studentId.toLocaleLowerCase()=="les1234" shoiuld be true: ${studentId.toLocaleLowerCase()=="les1234"}`);
console.log(`Student ID comparison otherIdMultipleType[0]=="1234" shoiuld be true: ${otherIdMultipleType[0]=="1234"}`);
console.log(`Student ID comparison otherIdMultipleType[0]==="1234" shoiuld be false: ${otherIdMultipleType[0]==="1234"}`);
console.log(`Student ID comparison otherIdNumberOnly==1234 shoiuld be true: ${otherIdNumberOnly==1234}`);
console.log(`Student ID comparison studentId > studentId2 shoiuld be false: ${studentId>studentId2}`);
console.log(`Student ID comparison studentId2 > studentId3 shoiuld be true: ${studentId2>studentId3}`);
console.log(`Student ID comparison otherIdNumberOnly > 234 shoiuld be true: ${otherIdNumberOnly>234}`);
console.log(`Student ID comparison otherIdMultipleType[1] > 65 shoiuld be true: ${otherIdMultipleType[1]>65}`);