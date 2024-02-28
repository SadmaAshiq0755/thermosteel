const element = document.querySelector(".box");
const line = document.getElementById("line-div");
// const output = document.querySelector(".output");
const container = document.querySelector(".container")
const body = document.querySelector("body")
// const sol = div.getBoundingClientRect()
// console.log(line);

// console.log(div.scrollTop);

// div.addEventListener("scroll",(event) => {
//     console.log("hello")
//     console.log(div.scrollTop)
// });


// var element = document.getElementById('target');

// Get a rect object
// The rect has all the data we want
// console.log(rect);
// output.innerHTML = `scrollTop: ${div.scrollTop} <br>
//                         scrollLeft: ${div.scrollLeft} `;

// alert(window.scrollX + window.scrollY);
// container.addEventListener("scroll",(event)=>{
//     // var rect = line.getBoundingClientRect();
//     // console.log(rect);
//     // if(rect.top<=200){
//     //     console.log("found");
//     // }
//     console.log("hello")
// })

// body.addEventListener("scroll",(event)=>{
// })



function handleScroll(){
    // console.log("hello world")
    var rect = line.getBoundingClientRect();
    if(rect.bottom>=200){
        console.log("found");
        const x = rect.bottom-500;
        line.style.height = x + "px";
    }
    // console.log(window.scrollY)
}

