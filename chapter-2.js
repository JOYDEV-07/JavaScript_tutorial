// This code prints hello world
/*This is a code that prints 
hello world on our console window*/
// console.log("hello world")

// Arithmetic Operators

// let a= 5;
// let b = 2;

// console.log("a + b = ",a +b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a *b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);


// Unary operator
// let a= 5;
// let b = 2;

// console.log("a = ", a, "& b= ", b);
// a++;

// console.log("a= ", a)

// Asignment Operators 

// let a =5;
// let b = 2;

// a -= 4;
// console.log(a);

// Comparison Operators

// let a =5;
// let b = 2;

// console.log("a == b ", a != b); 


// Logical operator

// let a =6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 6;

// console.log("cond1 && con2 ", cond1 && cond2);


// conditional Statement
// if statement
// let age = 16;

// let mode = "light"
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color= "white";
// }

// console.log(color);

// if(age > 18){
//     console.log("You can vote");
// }
// if(age < 18){
//     console.log("you cannot vote")
// }


// if-else statement

// let mode =  "light";
// let color;

// if(mode === "dark"){
//     color = "dark";
// }else{
//     color = "white";
// }

// console.log(color);

// let age = 15;

// if(age >= 18){
//     console.log("vote");
// }else {
//     console.log("not vote");
// }

// odd number

// let num = 12;

// if(num%2 === 0){
//     console.log("number is even", num);
// }else{
//     console.log("number is odd", num);
// }

// else-if statement
// let age = 25;
// if(age< 18){
//     console.log("junior");
// }else if(age > 60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

// let mode = "red";
// let color;

// if(mode === "dark"){
//     color = "black"
// }else if (mode === "blue"){
//     color = "blue";
// }else if (mode === "pink"){
//     color= "pink";
// }else{
//     color="white";
// }

// console.log(color)

// tarnary operator
// let age = 20;

// age > 18 ? "adult" : "not adult";

// console.log(age);

// practics Questios

// let num = prompt("Enter the number : ");

// if(num%5 === 0){
//     console.log(`${num} This number is multiple by 5`);
// }else{
//     console.log(`${num} This number is not multiple by 5`);
// }

// practics 2

let marks = prompt("Enter marks: ");

if(marks>= 0 && marks <=49){
    console.log("Grade is F");
}else if(marks>=50 && marks <=59)
{
    console.log("Grade is D");
}else if(marks>=60 && marks<=69)
{
    console.log("Grade is C");
}else if(marks>=70 && marks<=89)
{
    console.log("Grade is B");
}else if(marks>=90 && marks<=100)
{
    console.log("Grade is A");
}


console.log("Program successfully run")