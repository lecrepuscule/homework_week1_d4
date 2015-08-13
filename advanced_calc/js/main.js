
// function runCalculator(buttonId, answerId) {
//   getInput();
//   doMath();
//   showAnswer();
// }


var basicAnswer = document.getElementById("basic-answer");

var basicButton = document.getElementById("basic-calc");

var basicInput1 = document.getElementById("basic-num-1");

var basicInput2 = document.getElementById("basic-num-2");

function getInput() {
  return [basicInput1.value, basicInput2.value];
}

var inputs = getInput();

console.log(inputs[0] + inputs[1]);

basicButton.addEventListener("click", function() {
  var inputs = getInput();
  console.log(inputs[0] + inputs[1]); basicAnswer.className = "show";
})



