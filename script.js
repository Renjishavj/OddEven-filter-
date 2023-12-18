let numbers = [8, 19, 5, 6, 14, 9, 13];
let odds = numbers.filter((num) => num % 2 === 1);
let even = numbers.filter((num) => num % 2 === 0);
console.log("Odd array:",odds); 
console.log("Even array:",even);