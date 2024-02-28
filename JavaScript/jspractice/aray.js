//ARRAYS
let arr = [1,2,3,4];


//JS allows al datatypes in same array
let arr2=[1,2,"abcd",4];


//push pop

arr.push("abcd");     //push at last
console.log(arr);
arr.pop();            //pop from last
console.log(arr);

arr.pop(2);
console.log(arr);
arr.unshift("xyz");   //push at begin
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();          //pop from begin
console.log(arr);



//slice splice
//splice changes array whereas slice makes new array
//shallow copy makes new copy, deep copy makes changes to original...


//slice(starting index, ending index)
let x = arr.slice(0,2);
console.log(x);


//splice(on which index to do the work, how many elements to delete from there, what to add there,what to add there,what to add there)
let y = arr.splice(2,0,"a","b","c");
console.log(x);
