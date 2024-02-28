let arr = JSON.parse(localStorage.getItem("array"))!==null?JSON.parse(localStorage.getItem("array")):[];
// console.log(arr);
// let image = document.querySelector(".image")

let dropdown = document.querySelector(".dropdown-content")
let grid = document.querySelector(".grid");
let add = document.querySelector(".add")
// let link = document.querySelector("anchor");
// console.log(container.innerHTML);
// let cart = localStorage.getItem("cart")!==null?localStorage.getItem("cart"):0;
let cartNum = document.querySelector(".cart-num");
let cart = localStorage.getItem("cart")!==null?+localStorage.getItem("cart"):0;
// localStorage.setItem("cart",0)
cartNum.innerText = cart;


let categories = [];
let obj = {};
arr.forEach(e => {
    if(!(e.category in obj)){
        obj[e.category]=1;
        categories.push(e.category);
    }
    // console.log(e.image)
    let user = `<div class="flex-box" id="${e.id}">
                    <img src="./images/${e.image}" alt="" class="image">
                    <div class="name">${e.name}</div>
                    <div class="amount">${e.amount}</div>
                    <div class="category">${e.category}</div>
                    <button class="add" onclick="handleAdd(this)">ADD</button>
                </div> `
    
    grid.innerHTML += user;
});

// console.log(categories);

categories.forEach(e => {
    let anchor = `<a class="anchor" onclick="handleLink(this)">${e}</a>`
    dropdown.innerHTML+=anchor;
});

function handleLink(cat){
    grid.innerHTML ='';
    // console.log(cat);
    arr.forEach(e=>{
        if(cat.innerHTML === "All"){
            let fillUp = `<div class="flex-box" id="${e.id}">
                            <img src="./images/${e.image}" alt="" class="image">
                            <div class="name">${e.name}</div>
                            <div class="amount">${e.amount}</div>
                            <div class="category">${e.category}</div>
                            <button class="add" onclick="handleAdd(this)">ADD</button>
                        </div> `
                grid.innerHTML+=fillUp;
        }
        else if(e.category === cat.innerHTML){
            let fillUp = `<div class="flex-box" id="${e.id}">
                            <img src="./images/${e.image}" alt="" class="image">
                            <div class="name">${e.name}</div>
                            <div class="amount">${e.amount}</div>
                            <div class="category">${e.category}</div>
                            <button class="add" onclick="handleAdd(this)">ADD</button>
                        </div> `
                grid.innerHTML+=fillUp;
        }
    })
}

function handleInput(inp){
    grid.innerHTML ='';
    arr.forEach(e=>{
        if(e.name.includes(inp.value)){
            let fillUp = `<div class="flex-box" id="${e.id}">
                            <img src="./images/${e.image}" alt="" class="image">
                            <div class="name">${e.name}</div>
                            <div class="amount">${e.amount}</div>
                            <div class="category">${e.category}</div>
                            <button class="add" onclick="handleAdd(this)">ADD</button>
                        </div> `
                grid.innerHTML+=fillUp;
        }
    })
}

// function handleAdd(inp){
//     cartItem = JSON.parse(localStorage.getItem("cartItem"))!==null?JSON.parse(localStorage.getItem("cartItem")):[];
//     console.log(cartItem)
//     let parent = inp.parentElement.id;
//     const x = (cartItem.find(e=>e.id === parent))
//     if(x){
//         x.cart=x.cart+1;
//         console.log(x.cart);
//     }
//     else{
//         const element = arr.find(ele=>ele.id === parent);
//         console.log(element);
//         cartItem.push(element);
//         element.cart += +1;
//         // cart = localStorage.getItem("cart")!==null?+localStorage.getItem("cart"):0;
//         cart=cartItem.length;
//         cart=cart+1;
//         localStorage.setItem("cart",cart)
//         cartNum.innerText = cart;
//         console.log(cart);    
//         localStorage.setItem("cartItem",JSON.stringify(cartItem));
        
//     }

//     // localStorage.setItem("cartItem",cartItem);
//     // cart = localStorage.getItem("cart")!==null?+localStorage.getItem("cart"):0;
//     // cart+=+1;
//     // localStorage.setItem("cart",cart)
//     // cartNum.innerText = cart;
//     // console.log(cart);

//     // console.log(parent);
// }

function handleCart(){
    window.open(`http://127.0.0.1:5500/cart.html`,"_self")
}





let cartItem = [];
// localStorage.setItem("cartItem",JSON.stringify(cartItem));



let count = 1;
function handleAdd(inp){
    cartItem = JSON.parse(localStorage.getItem("cartItem"))!==null?JSON.parse(localStorage.getItem("cartItem")):[];
    let parent = inp.parentElement.id;
    // console.log(parent);
    const x = arr.find(e=>e.id===parent);
    // console.log(x);
    if(!(cartItem.find(e=>e.id===x.id))){
        cartItem.push(x);
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        cart = cartItem.length;
        cartNum.innerHTML = cart;
        localStorage.setItem("cart",cart);
        console.log(cartItem)
    }
    else{
        const a = (cartItem.find(e=>e.id===x.id))
        console.log(a);
        a.cart+=+1;
        localStorage.setItem("array",JSON.stringify(arr))
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        // console.log(cartItem);
    }
}