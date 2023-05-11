/* 
*************************************************************************
                            Hasan Mumtaz Mirza
                            Roll # PIAIC206850
*************************************************************************
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let personName = "Hasan mumtaz MIRza";
const lowerCaseMewssage = "The name in lowercase is: ";
const upperCaseMewssage = "The name in uppercase is: ";
const titleCaseMewssage = "The name in titlecase is: ";
let lcName = personName.toLocaleLowerCase();
let ucName = personName.toUpperCase();
let tcName = toTitleCase(personName);
console.log(lowerCaseMewssage+lcName);
console.log(upperCaseMewssage+ucName);
console.log(titleCaseMewssage+tcName);
export function toTitleCase(inputString : string): string {
    let tcName = "";
    let caseCounter = 0;
    let lcName = inputString.toLocaleLowerCase();
    for (let index = 0; index < inputString.length; index++) {
        if (lcName[index] == " ") {
            caseCounter = -1;
        }
        if (caseCounter == 0) {
            tcName = tcName + lcName[index].toUpperCase();
        }
        else{
            tcName = tcName + lcName[index];
        }
        caseCounter++;
      
    }
    return tcName;
}