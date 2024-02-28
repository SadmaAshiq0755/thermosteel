let naam = document.getElementById("name");
let category = document.getElementById("category");
let amount = document.getElementById("amount");
let image = document.getElementById("image");
const form = document.getElementById("form")

let arr = []
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name:`${naam.value}`,
        category:`${category.value}`,   
        amount:`${amount.value}`,
        image:`${image.files[0].name}`,
        id:`${Date.now()}`,
        cart:1,
    }
    console.log(image.files[0].name);
    arr = JSON.parse(localStorage.getItem("array"))!==null?JSON.parse(localStorage.getItem("array")):[];
    // console.log(obj);
    arr.push(obj);
    localStorage.setItem("array",JSON.stringify(arr))
    form.reset();
})

function show(){
    let ar = []
    ar = JSON.parse(localStorage.getItem("array"))!==null?JSON.parse(localStorage.getItem("array")):[];
    console.log(ar);
}

function clean(){
    localStorage.clear();
}