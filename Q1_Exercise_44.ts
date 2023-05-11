makeSandwich("brown bread", "egg", "chicken");
makeSandwich("brown bread", "chicken");
makeSandwich("brown bread", "chicken", "salad", "cheese", "olives", "beacon");
function makeSandwich(...ingredients:string[]|number[]) {
    console.log(`Your sandwich will contain ${ingredients.join(", ")}.`);
    
}