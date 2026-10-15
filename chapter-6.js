// let heading = document.getElementById("heading")

// console.dir(heading)


// let heading_class =document.getElementsByClassName("heading");
// console.dir(heading_class);  
// console.log(heading_class);  

// let button = document.getElementById("myid");
// console.dir(button);

// let parahs =document.getElementsByTagName("p")

// console.dir(parahs);

// let elements = document.querySelector(".heading");

// console.dir(elements);

// let allElements = document.querySelectorAll(".heading");
// console.dir(allElements);

// let fristEl = document.querySelector("#myid");
// console.dir(fristEl);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + "from Apan college students";

let divs = document.querySelectorAll(".box");
// console.log(div[0]);
let ind =0;
for(div of divs){
    div.innerText = `new unique value ${ind}`;
    ind++;
}

// divs[0].innerText = "hello";
// divs[1].innerText = "World";
// divs[2].innerText = "Welcome";

