const ordinalNumbers : number[] = [1,2,3,4,5,6,7,8,9];
for (let index = 0; index < ordinalNumbers.length; index++) {
    if (ordinalNumbers[index]%10==1) {
        console.log(`${ordinalNumbers[index]}st`);
    } else{
        if (ordinalNumbers[index]%10==2) {
            console.log(`${ordinalNumbers[index]}nd`);
         } else {
            if (ordinalNumbers[index]%10==3) {
                console.log(`${ordinalNumbers[index]}rd`);
            } else {
                console.log(`${ordinalNumbers[index]}th`);
            }
            
        }
    }
    
}