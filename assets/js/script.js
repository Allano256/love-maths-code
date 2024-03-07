//  Let all the DOM Content to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);  
            }

        })
    }
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
function runGame() {
    /* creates two random numbers */
  let num1 = Math.floor(Math.random () * 25) + 1;
  let num2 = Math.floor(Math.random () * 25) + 1;
};

function checkAnswer(){

};



function calculateCorrectAnswer(){

};

function incrementScore() {

};

function incrementWrongAnswer () {

};

function displayAdditionQuestion(){

};

function displaySubtractionQuestion(){

};

function displayMultiplicationQuestion(){

};