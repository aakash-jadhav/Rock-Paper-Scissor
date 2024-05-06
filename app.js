const startbtn = document.querySelector(".start")
const score = document.querySelector(".score")

score.style = "display:none"
startbtn.addEventListener("click", function () {
  console.log("clicked")
  startbtn.textContent = "Score"
  score.style = "display:flex"
  startGame()
})
console.log("Hi there")
const rock = document.querySelector(".player .rock")
const paper = document.querySelector(".player .paper")
const scissor = document.querySelector(".player .scissor")
const computerRock = document.querySelector(".cpu .rock")
const computerPaper = document.querySelector(".cpu .paper")
const computerScissor = document.querySelector(".cpu .scissor")

function computer(playerChoice) {
  let cpuChoice = Math.floor(Math.random() * 3)
  console.log(cpuChoice)
  let computerChoice = ""
  if (cpuChoice == 0) {
    computerChoice = "rock"
    computerRock.style = "background:green"
    computerPaper.style = "background:black"
    computerScissor.style = "background:black"
  } else if (cpuChoice == 1) {
    computerChoice = "paper"
    computerPaper.style = "background:green"
    computerRock.style = "background:black"
    computerScissor.style = "background:black"
  } else {
    computerChoice = "scissor"
    computerScissor.style = "background:green"
    computerRock.style = "background:black"
    computerPaper.style = "background:black"
  }
  compare(computerChoice, playerChoice)
}

let playerScore = document.querySelector(".player-score")
let cpuScore = document.querySelector(".cpu-score")
function startGame() {
  playerScore.textContent = 0
  cpuScore.textContent = 0
  rock.addEventListener("click", function () {
    console.log("Rock")
    rock.style = "background:green"
    paper.style = "background:black"
    scissor.style = "background:black"
    computer("rock")
  })
  paper.addEventListener("click", function () {
    console.log("Paper")
    paper.style = "background:green"
    rock.style = "background:black"
    scissor.style = "background:black"
    computer("paper")
  })
  scissor.addEventListener("click", function () {
    console.log("Scissor")
    scissor.style = "background:green"
    paper.style = "background:black"
    rock.style = "background:black"
    computer("scissor")
  })
}

function compare(computerChoice, playerChoice) {
  let player = parseInt(playerScore.textContent)
  let cpu = parseInt(cpuScore.textContent)
  if (computerChoice == playerChoice) {
    console.log("Draw")
    return
  } else if (computerChoice == "rock") {
    if (playerChoice == "paper") {
      console.log("Player wins")
      player += 1
    } else {
      console.log("CPU wins")
      cpu += 1
    }
  } else if (computerChoice == "paper") {
    if (playerChoice == "scissor") {
      console.log("Player wins")
      player += 1
    } else {
      console.log("CPU wins")
      cpu += 1
    }
  } else if (computerChoice == "scissor") {
    if (playerChoice == "rock") {
      console.log("Player wins")
      player += 1
    } else {
      console.log("CPU wins")
      cpu += 1
    }
  }
  playerScore.textContent = player
  cpuScore.textContent = cpu
  if (player == 5) {
    alert("Player wins")
    startbtn.textContent = "Play Again"
    player = cpu = 0
    startGame()
  } else if (cpu == 5) {
    alert("CPU wins")
    startbtn.textContent = "Play Again"
    player = cpu = 0
    startGame()
  }
}
