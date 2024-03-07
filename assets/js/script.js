//  Let all the DOM Content to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
                // alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                //alert(`You clicked ${gameType}`);  
            }

        })
    }

    runGame("addition");
})
//This is a better way not to hard code everything

// var text = "you clicked!";
// function test(alertText) {
//     let buttons = document.getElementsByTagName("button");
    
//     for(let button of buttons){
//         button.addEventListener("click", function(){
//             if(this.getAttribute("data-type") === "submit") {
//                 alert(alertText);
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 alert(`You clicked ${gameType}`);  
//             }

//         })
//     }
// }
// document.addEventListener("DOMContentLoaded",test(text) )
   

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    /* creates two random numbers */
  let num1 = Math.floor(Math.random () * 25) + 1;
  let num2 = Math.floor(Math.random () * 25) + 1;
     
  if(gameType === "addition"){
    displayAdditionQuestion(num1,num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `unknown game type: ${gameType}. Aborting!`;
  }

};

/**Checks the answer against the first element in 
 * the returned calculateAnswer array
 */
function checkAnswer(){
      let userAnswer = parseInt(document.getElementById("answer-box").value);
      let calculatedAnswer = calculateCorrectAnswer();

      let isCorrect = userAnswer === calculatedAnswer[0];
       if(isCorrect){
        alert("hej! you got it right! :D");
       } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculateCorrectAnswer[0]}!`);
       }

       runGame(calculatedAnswer[1]); //this runs another game of the same type
};

/**Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, an returns the correct answer.
 */

function calculateCorrectAnswer(){
     let operand1 = parseInt(document.getElementById('operand1').innerText);
     let operand2 = parseInt(document.getElementById('operand2').innerText);
     let operator = document.getElementById("operator").innerText;
};

function incrementScore() {

};

function incrementWrongAnswer () {

};

function displayAdditionQuestion(operand1, operand2){
     document.getElementById('operand1').textContent = operand1;
     document.getElementById('operand2').textContent = operand2;
     document.getElementById('operator').textContent = "+";

     if(operator === '+'){
         return [ operand1, operand2, "addition"];
     } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}, Aborting!`;
     }
};

function displaySubtractionQuestion(){

};

function displayMultiplicationQuestion(){

};