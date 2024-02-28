// function add(){
//     console.log(arguments);
//     let x=0;
//     for(i=0;i<arguments.length;i++){
//         x+=arguments[i];
//     }
//     console.log(x);
// }

// function add(total, num){
//     console.log(arguments);
//     return total+num;
// }


// No hoisting allowed as function stored in variable
x(200,300);

var x = function(a,b){
    x = a+b;
    console.log(x);
}

console.log(x(a,b)); //Gives undefined as function doesn't return anything


//Fat Arrow function: var = (arguments)=>{Definition}

let test = (a,b)=>{
    x = a+b;
    return x;
}

//single line in function acts as a return type and doesn't require curly braces
let test5 = (a,b)=>x=a+b;

//we can also remove parenthesis if we have only single argument.
let test6 = a => x+=a;


//array looping

