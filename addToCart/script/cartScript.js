let cartItem = JSON.parse(localStorage.getItem("cartItem"))!==null?JSON.parse(localStorage.getItem("cartItem")):[];
let grid = document.querySelector(".grid");
let arr = JSON.parse(localStorage.getItem("array"))!==null?JSON.parse(localStorage.getItem("array")):[];
let qty = document.querySelector(".quantity");
let cart = localStorage.getItem("cart");
let price = document.querySelector(".total-price");



function display()
{cartItem.forEach(e=>{
    // console.log(e);
    let card = `<div class="card flex-box" id="${e.id}">
                    <img src="./images/${e.image}" alt="" class="image">
                    <div class="name">${e.name}</div>
                    <div class="amount">${e.amount}</div>
                    <div class="category">${e.category}</div>
                    <button class="minus" onclick="handleMinus(this)">-</button>
                    <div class="quantity">${e.cart}</div>
                    <button class="plus" onclick="handlePlus(this)">+</button>
                </div>`
    grid.innerHTML+=card;
})}

display();

function clearCart(){
    grid.innerHTML="";
    localStorage.setItem("cart",0);

    cartItem.forEach(e=>{
        // const x = arr.find(abc=>abc.id===e.id);
        // x.cart=1;
        e.cart=1;
        localStorage.setItem("array",JSON.stringify(arr))
        console.log(cartItem);
        console.log(cartItem.length)
    })
    localStorage.setItem("cartItem","[]");
}

function handleMinus(inp){
    const parent= inp.parentElement.id;
    const x = cartItem.find(e=>e.id===parent);
    // console.log(x);
    x.cart-=1;
    if(x.cart<=0){
        console.log(inp.parentElement)
        // inp.parentElement.style.display="none";
        // cartItem.pop(x);
        cartItem = cartItem.filter(a=>a.id!==x.id);
        cart=cartItem.length;
        localStorage.setItem("cart",cart);
    }
    console.log(x.cart);
    // qty.innerHTML=x.cart;
    window.location.reload();
    localStorage.setItem("array",JSON.stringify(arr))
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
}

function handlePlus(inp){
    const parent= inp.parentElement.id;
    const x = cartItem.find(e=>e.id===parent);
    // console.log(x);
    x.cart+=1;
    console.log(x.cart);
    window.location.reload();
    localStorage.setItem("array",JSON.stringify(arr))
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
}

// console.log(cartItem);
// console.log(cartItem.length)
let total = 0;
cartItem.forEach(e=>total+=(e.amount*e.cart));
price.innerHTML = total;