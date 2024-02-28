const arr = new Array(9).fill(null);
let currVal = "X";

function winner(){
    if( arr[0]!==null && arr[0] == arr[1] && arr[1] == arr[2] ||
        arr[3]!==null && arr[3] == arr[4] && arr[4] == arr[5] ||
        arr[6]!==null && arr[6] == arr[7] && arr[7] == arr[8] ||
        arr[0]!==null && arr[0] == arr[3] && arr[3] == arr[6] ||
        arr[1]!==null && arr[1] == arr[4] && arr[4] == arr[7] ||
        arr[2]!==null && arr[2] == arr[5] && arr[5] == arr[8] ||
        arr[0]!==null && arr[0] == arr[4] && arr[4] == arr[8] ||
        arr[2]!==null && arr[2] == arr[4] && arr[4] == arr[6]
    ){
        document.write(`${currVal} is the winner`);
        return;
    }

    if(!arr.some((el)=>el===null)){
        document.write("DRAW");
        return;
    }
}


function handleClick(e){
    const currId = Number(e.id);
    if(arr[currId]!==null) return;
    arr[currId] = currVal;
    e.innerHTML = currVal;
    winner();
    currVal = currVal==="X"?"O":"X";
}

function handleRefresh(){
    location.reload();
}