// let arr2 = localStorage.getItem("student");
// arr2 = JSON.parse(arr2);
// console.log(arr2);

function handleClick(ele){
    const output = ele.id;
    window.open(`http://127.0.0.1:5500/${output}.html`,"_self")
}