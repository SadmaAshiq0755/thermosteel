function handleClick(element){
    const user = Number(element.id);
    const computer = Math.floor(Math.random() * 3);
    if(user===computer){
        console.log("TIE");
    }
    else{
        if(user===0){
            if(computer===1){
                console.log("Computer won, computer chose paper");
            }
            else if(computer===2){
                console.log("You won, computer chose scissor");
            }
        }
        else if(user===1){
            if(computer===0){
                console.log("You won, computer chose rock");
            }
            else if(computer===2){
                console.log("Computer won, computer chose scissor");
            }
        }
        else{
            if(computer===0){
                console.log("Computer won, computer chose rock");
            }
            else if(computer===1){
                console.log("You won, computer chose paper");
            }
        }
    }
}
