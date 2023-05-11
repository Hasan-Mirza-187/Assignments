const fruits : string[] = ["banana", "apple", "mango", "grapes", "peach"];
const favouriteFruits : string[] = ["pineapple", "grapes", "mango"]

if (fruits.includes("mango")) {
    console.log(`Mango is in the list.`);
}
if (fruits.includes("pear")) {
    console.log(`Prar is in the list.`);
}
if (fruits.includes("cherry")) {
    console.log(`Cherry is in the list.`);
}
if (fruits.includes("orange")) {
    console.log(`Orange is in the list.`);
}
if (fruits.includes("peach")) {
    console.log(`Peach is in the list.`);
}

for (let index = 0; index < fruits.length; index++) {
    if (favouriteFruits.includes(fruits[index])) {
        console.log(`I really like ${fruits[index]}.`)
    }
    
} 