var varChoices = ["Rock", "Paper", "Scissor"];
var randChoice = function() {
    return varChoices[Math.floor(Math.random()*varChoices.length)];
} 
var myScore = {
  Wins: 0,
  Loss: 0,
  Ties: 0
};

function play(myChoice) {
// collect information
//   var myChoice = prompt("Please enter your choice R, P, S");
//  var myChoice = randChoice();
// let computer choose
  var compChoice = randChoice();
  console.log(myChoice + " vs " + compChoice);
  document.getElementById("txtComp").value=compChoice;

//Compare
 if (myChoice === compChoice) {
    console.log("TIE, computer chose "+compChoice);
    myScore.Ties++;
  } 
  //if playing Rock
  else if (myChoice === "Rock")
  {
     if (compChoice === "Paper") 
      {
        console.log("LOST, computer chose Paper");
        myScore.Loss++;
      } else {
        console.log("WIN, computer chose Scissor");
        myScore.Wins++;
      }
  }
  //if playing Paper
  else if (myChoice === "Paper")
  {
     if (compChoice === "Scissor") 
      {
        console.log("LOST, computer chose Scissor");
        myScore.Loss++;
      } else {
        console.log("WIN, computer chose Rock");
        myScore.Wins++;
      }
  } //if playing Scissor
  else if (myChoice === "Scissor")
  {
     if (compChoice === "Rock") 
      {
        console.log("LOST, computer chose Rock");
        myScore.Loss++;
      } else {
        console.log("WIN, computer chose Paper");
        myScore.Wins++;
      }
  }
}

function game(myChoice) {
// do {
  play(myChoice);
  console.log(myScore);

//   var contPlay = prompt("Continue Playing? y/n");
//   if (contPlay=="y") {contPlay=true;} else {contPlay=false;}
// } while(contPlay);

}

function resetScore() {
  myScore.Wins=0;
  myScore.Loss=0;
  myScore.Ties=0;
}
