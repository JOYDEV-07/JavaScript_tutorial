// function myFuction(msg,n){
//     console.log(msg,n);
//     // console.log("We are learning js :");
// }

// myFuction("Hello world!",120); //argument


// function sum(a,b){
//     let s = a+b;
//     return s;
// }

// console.log(sum(10,30)); 

// sum function
// function sum(a,b){
//     return a+b;
// }

// const arrowSum= (a,b)=>{
//     console.log(a+b);
// }

// multiplication function
// function mul(a,b){
//     return a*b;
// }

// const multi = (a,b)=>{
//     console.log(a*b);
// }

// const printHello = ()=>{
//     console.log("Hello");
// }

// vowels chacker

// function vowels(msg){
//     let m = msg;
//     let l =m.length
//     let count = 0;
//     let c = m.toUpperCase();
//     for(let i=0;i<=l;i++){
//         if(c[i] === "A"){
//             count += 1;
//         }
//         else if(c[i] === "E"){
//             count += 1;
//         }
//         else if(c[i] === "I"){
//             count += 1;
//         }
//         else if(c[i] === "O"){
//             count += 1;
//         }
//         else if (c[i] === "U"){
//             count += 1;
//         }
//     }

//     return count;
// }
// let input = prompt("Enter the Name ")
// let result = vowels(input);

// console.log(result)


// using arrow function

// const vowel = (msg)=>{
//     let m = msg;
//     let l =m.length
//     let count = 0;
//     let c = m.toUpperCase();
//     for(let i=0;i<=l;i++){
//         if(c[i] === "A"){
//             count += 1;
//         }
//         else if(c[i] === "E"){
//             count += 1;
//         }
//         else if(c[i] === "I"){
//             count += 1;
//         }
//         else if(c[i] === "O"){
//             count += 1;
//         }
//         else if (c[i] === "U"){
//             count += 1;
//         }
//     }

//     return count;
// }

// let input = prompt("Enter the Name ")
// let result = vowel(input);

// console.log(result)


// function abc(){
//     console.log("Hello")
// }


// function myFun(abc){
//     return abc;
// }

// let arr = [1,2,3,4,5];

// arr.forEach((val,index)=>{
//     console.log(val,index);
// });


// let arr = [2,3,9,5,6,7,2,4];

// arr.forEach((val)=>{
//     console.log(val*val);
// })

// let nums = [67,52,39];

// let newArr = nums.map((val) =>{
//     return val * 2;
// })

// console.log(newArr);

// let arr = [1,3,4,5,6,7];

// let even = arr.filter((val)=>{
//     return val > 3;
// })

// console.log(even);


// let arr = [1,2,3,4];

// let result = arr.reduce( (res,curr) =>{
//     return res + curr;
// });

// console.log(result);

// let student = [90,91,89,81,99,78,56,98,94,70,75]

// let r = student.filter((val)=>{
//     return val > 90;
// })

// console.log(r);

let n = prompt("Enter the number :");

let arr = [] ; 

for(let i=1;i<=n;i++){
    arr[i-1] = i;
}

let result = arr.reduce((res, curr)=>{
    return res * curr;
})

console.log(result);