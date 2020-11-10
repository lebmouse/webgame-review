const body = document.body;
const ball = document.querySelector('.ball')
const startBtn = document.querySelector('.start');
const numberArray = Array(45).fill().map((v,i) => i+1);
const numberShuffle = [];
let choiceNumber =[];
let stopClick = false


function makeNumber(){
for(let i = 0; 0 < numberArray.length;){
let randomNum = numberArray.splice(Math.floor(Math.random() * numberArray.length),1)[0]
numberShuffle.push(randomNum)
}
choiceNumber = numberShuffle.splice(0,6)

}

function paintingBall(ballNumber,ballColor){
    if(ballNumber < 10){
        ballColor.style.background = 'tomato'
    } else if (ballNumber < 20){
        ballColor.style.background = 'orange'
    } else if (ballNumber < 30){
        ballColor.style.background = 'green'
    } else if (ballNumber < 40){
        ballColor.style.background = 'blue'
    } else {
        ballColor.style.background = 'purple'
    }
}

function gameStart(){
    
    if(stopClick){
        return
    }
    stopClick = true;
   ball.innerHTML = '';
    makeNumber();

    for(let i = 0; i < 6; i++){
        function makeBall(j){
        setTimeout(function(){
               const number = document.createElement('div');
               number.className = 'number'
               number.textContent = choiceNumber[j]
               paintingBall(number.textContent, number);
               ball.appendChild(number)
        }, j*1000);
      } makeBall(i)
    }

    setTimeout(function(){
        const plus = document.createElement('div')
        plus.className = 'plus'
        plus.textContent = '+'
        ball.appendChild(plus)
        const bonusNumber = document.createElement('div');
        bonusNumber.className = 'bonusNumber'
        bonusNumber.textContent = numberShuffle[numberShuffle.length - 1]
        paintingBall(bonusNumber.textContent, bonusNumber)
        ball.appendChild(bonusNumber); 
        stopClick = false;
    },6000); 

}

startBtn.addEventListener('click',gameStart)
