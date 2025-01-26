const dice = document.getElementById('imgdice')
const cover = document.getElementById('square')
const button = document.getElementById('button')
button.addEventListener('click', execQuantumWork)
let diceOn = true
let randomNum
showRandomNumber()

function showRandomNumber(){
   randomNum = rng()
   dice.src = `img/Dice${randomNum}.png`
}

function execQuantumWork(){
    diceOn ? hideDice() : showDice()
}

function rng(){
    return Math.floor(Math.random() *  6) + 1
}

function showDice(){
    cover.classList.add('--hidden')
    diceOn = true;
}

function hideDice(){
    cover.classList.remove('--hidden')
    showRandomNumber()
    diceOn = false
}