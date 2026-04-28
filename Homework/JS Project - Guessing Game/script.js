/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // maximum and minimum are inclusive
  }
let randNum = getRandomIntInclusive(1,20);

let messageObj = document.querySelector(".message");
let guessObj = document.querySelector('.guess') ;
let scoreObj = document.querySelector('.score');
let hscoreObj = document.querySelector('.highscore');
console.log(scoreObj.textContent)
console.log(hscoreObj)


function guess(){
    let userGuess = Number(guessObj);
    if (userGuess == randNum){
        messageObj = 'You win!';
        if (hscoreObj < scoreObj){
            hscoreObj = scoreObj;
            document.querySelector('.highscore').textContent = hscoreObj

        }

    }else{
        messageObj = 'Try again';
        scoreObj = scoreObj -1;


    }


}

document.querySelector()
