// Looping numbers Using a for loop
//  Challenge 1
// for(let i = 1; i<=10;i++){
//     console.log(i);
// }
// for(let i = 1; i<=20;i++){
//     console.log(i)
// }

// for(let i = 1; i<=50;i++){
//     console.log(i)
// }

// Challenge 2 : Summing Numbers Using a While Loop
// let sum =0;
// let i = 1;
// while(i<=5){
//     sum+=i;
//     i++;
// }
// console.log("The sum is: " + sum);

//  Mini Project: Number Manipulation program
// Prompt user for a number

// let userNumber = parseInt(prompt("Enter a number: "));
// if(!isNaN(userNumber) && userNumber>0){
//     // Using a Loop to print numbers
//     console.log("Counting from 1 to " + userNumber + ":");
//     for(let i =1; i<=userNumber;i++){
//         console.log(i);

//     }

// // Using while loop to calculate the sum
// let sum = 0;
// let i =1;
// while(i <= userNumber){
//     sum += i;
//     i++;
// }
// console.log("The sum of numbers from 1 to " + userNumber + ' ' + "is:" + sum);
// }
// else{
//     console.log("Please enter a valid positive number.");
// }

// Bonus Features: Input Validation
// let userNumber = parseInt(prompt("Enter a positive number:"));

// // Prompt the user until a valid positive number is entered
// while(isNaN(userNumber) || userNumber <= 0) {
//     userNumber = parseInt(prompt("Invalid input! Please enter a valid positive number:"));
// }

// // Print numbers from 1 to userNumber
// console.log("Counting from 1 to " + userNumber + ":");
// for (let i = 1; i <= userNumber; i++) {
//     console.log(i);
// }

// // Using a while loop to calculate the sum of numbers from 1 to userNumber
// let sum = 0;
// let i = 1;
// while (i <= userNumber) {
//     sum += i;
//     i++; 
// }

// console.log("The sum of numbers from 1 to " + userNumber + " is: " + sum);



// Multiplication Challenge

let userNumber = parseInt(prompt("Enter a positive number:"));

// Prompt the user until a valid positive number is entered
while (isNaN(userNumber) || userNumber <= 0) {
    userNumber = parseInt(prompt("Invalid input! Please enter a valid positive number:"));
}

// Print numbers from 1 to userNumber
console.log("Counting from 1 to " + userNumber + ":");
for (let i = 1; i <= userNumber; i++) {
    console.log(i);
}

// Using a while loop to calculate the product (factorial) of numbers from 1 to userNumber
let product = 1; // Start with 1 since it's the multiplicative identity
let i = 1;
while (i <= userNumber) {
    product *= i; // Multiply each number
    i++; 
}

console.log("The product (factorial) of numbers from 1 to " + userNumber + " is: " + product);
