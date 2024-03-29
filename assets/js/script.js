//  Let all the DOM Content to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            console.log("hello world");
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
                alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
                //alert(`You clicked ${gameType}`);  
            }

        })
    }
      //Some users dont want to use the submit and want to press the "Enter key" so we add an event listener for the "key down" on the answer box.
    document.getElementById('answer-box').addEventListener("keydown", function(event){
        if(event.key === "Enter") {
            checkAnswer();
        }
    })

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
    document.getElementById("answer-box").value = ""; //Everytime we refresh the page,the answer box empties so we dont have to manually delete.

    //Set focus on cursor in box,eachtime the run game is called or page reloas...the answer box will gain focus with a cursor in place.
    document.getElementById("answer-box").focus();

    /* creates two random numbers */
  let num1 = Math.floor(Math.random () * 25) + 1;
  let num2 = Math.floor(Math.random () * 25) + 1;
     
  if(gameType === "addition"){
    displayAdditionQuestion(num1,num2);
  } else if(gameType === "multiply"){
    displayMultiplyQuestion(num1, num2);
  } else if(gameType === "subtraction"){
    displaySubtractionQuestion(num1, num2);
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
      let calculatedAnswer = calculatedCorrectAnswer();

    
      let isCorrect = userAnswer === calculatedAnswer[0];
       if(isCorrect){
        alert("hej! you got it right! :D");
        incrementScore();
       } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedCorrectAnswer[0]}!`);
        incrementWrongAnswer();
       }

       runGame(calculatedAnswer[1]); //this runs another game of the same type
};

/**Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, an returns the correct answer.
 */

function calculatedCorrectAnswer(){
     let operand1 = parseInt(document.getElementById('operand1').innerText);
     let operand2 = parseInt(document.getElementById('operand2').innerText);
     let operator = document.getElementById("operator").innerText;

     
      if(operator === "+"){
        return [operand1 + operand2, "addition"];
      }
         else if(operator === "x"){
        return [operand1 + operand2, "multiply"];
      } else if(operator === "-"){
        return [operand1, operand2, "subtraction"];
      } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}, Aborting!`;
      }
      

      
};
/**
 * Gets the current score from the DOM an increments it by 1
 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);

document.getElementById("score").innerText = ++oldScore; //Then send it back to the DOM but with  an increment.
};

/**
 * Gets the current tally of incorrect answers from the DOM an increments it by 1
 */
function incrementWrongAnswer () {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);

    document.getElementById("incorrect").innerText = ++oldScore;
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

function displaySubtractionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
     document.getElementById('operand2').textContent = operand2 > operand1 ? operand2 : operand1;
     document.getElementById('operator').textContent = "-";

     if(operator === '-'){
         return [ operand1, operand2, "subtraction"];
     } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}, Aborting!`;
     }



};

function displayMultiplyQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

    if(operator === "*"){
        return [operand1, operand2, "multiplication"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}, Aborting!`;
    }
};