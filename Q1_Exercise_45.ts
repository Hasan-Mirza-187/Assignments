let car_1 = carDetails("Toyota", "Corolla");
let car_2 = carDetails("Honda", "Civic");
let car_3 = carDetails("Honda", "Civic", "make", 2022, "color", "white");

// type car = {manufactrer:string, model:string, [otherDetails:string|number]:string|number};

function carDetails(manufactrer:string, model:string, ...otherDetails:string[]|number[]):car{
 const carOut:car = {manufactrer:manufactrer, model:model};
for (let index = 0; index < otherDetails.length; index++) {
    if (index%2==0) {
        carOut[otherDetails[index]] = otherDetails[index+1];    
    } 
    return carOut;
}
}