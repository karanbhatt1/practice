
let sum = 0
let cards = [];
let hasBlackCard = false
let isAlive = false;


let message = ""



// let age = 100
// if(age<100){
//     console.log("Not Eligible");
// } else if(age === 100){
//     console.log("Here is your birthday card from the king!");
// } else{
//     console.log("Not Eligible, you have already gotten one")
// }


let card = document.getElementById("Card"); // querySelector() can also be used.  
let sm = document.querySelector("#Sum");
let gamePlay = document.querySelector("#game_Play");
let player = {
    name:"username",
    chips:145
}

let playeru = document.getElementById("playerdata");
playeru.textContent = player.name + ": $" + player.chips;




function getRandomCard(){
    let ran = Math.floor(Math.random()*13)+1;
    if(ran===1){
        return 11;
    }else if(ran>10){
        return 10;
    }
    else{
        return ran;
    }
}

function startGame(){
    if(isAlive===false){
        isAlive=true;
        let firstCard = getRandomCard();
        let secondCard= getRandomCard();
        cards=[firstCard,secondCard];
        sum = firstCard+secondCard;
        gamePlay.textContent = "";
        
        renderGame();
    }
    else{
        mesage.textContent = "Please Select New Card.";
        gamePlay.textContent= "GAME IS NOT OVER!!";
    }
}
function renderGame(){
    card.textContent = "CARD: ";
    for(let i=0;i<cards.length;i++){
        card.textContent +=" "+cards[i];
    }
    sm.textContent = "SUM: "+ sum
    if(sum<=20){
        message = "Do you want to draw a new card?";
       
    }
    else if(sum===21){
        message = "wohoo! You've got BlackJack"; 
        gamePlay.textContent = "WANT TO PLAY AGAIN START THE GAME AGAIN!!";
        hasBlackCard = true;
        isAlive=false;
    }
    else{
        message ="you are out of the game.";
        gamePlay.textContent = "START GAME AGAIN TO PLAY!!";
        isAlive = false
    }
    console.log(message)
    mesage.textContent = message;
}
function newCard(){
    if(hasBlackCard===true && isAlive==true){
        card.textContent = "CARD: "
        sm.textContent = "SUM: "
    }
    else if(isAlive===false){
        mesage.textContent = "GAME NOT\n STARTED!";
        card.textContent = "CARD: "
        sm.textContent ="SUM: "
    }
    else{
        let card =getRandomCard();
        cards.push(card);
        sum += card ;
        renderGame();
    }
    
    
}

let mesage = document.getElementById("message");
