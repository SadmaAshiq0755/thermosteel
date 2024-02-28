import {add} from "./two.js"

let sum = add(1,2);
console.log(sum);


// function handleClick(){
//     console.log(5*7);
// }

const button = document.querySelector(".button");
button.addEventListener("click",()=>console.log(5*7));