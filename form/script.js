// const submit = document.getElementById("submit");
// submit.addEventListener("click",handleClick);

// let arr = [];

// function entry(name,balance,id){
//     this.name = name;
//     this.balance = balance;
//     this.id = id;
// }

// entry.prototype.deposit=function(amount){
//     this.balance += amount;
// }

// const button = document.getElementById("display");
// button.addEventListener("click",(event)=>{
//     event.preventDefault();
//     display();
// })

// function display(){
//     arr.forEach(element=>{
//         console.log(element);
//     })
// }

// function handleClick(event){
//     event.preventDefault();
//     const name = document.getElementById("name");
//     const balance = document.getElementById("balance");
//     const id = document.getElementById("id");
//     const secEntry = new entry(name.value, +balance.value, +id.value);
//     arr.push(secEntry);
// }

// const accountNo1 = document.getElementById("id2");
// const amount = document.getElementById("amount");

// const submitTwo = document.getElementById("amount-submit");
// submitTwo.addEventListener("click",(event)=>{
//     event.preventDefault();
//     const found = arr.find(e=>e.id === +accountNo1.value);
//     console.log(found);
//     found.deposit(+amount.value);
// })



class bankAcc{
    name;
    balance;

    constructor(name,balance,id){
        this.name = name;
        this.balance=balance;
        this.id = Date.now();
    }

    deposit(amt){
        this.balance+=amt;
    }
}

let abc = new bankAcc("abcd",1000);
console.log(abc);
abc.deposit(500);
console.log(abc);






