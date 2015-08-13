
// function runCalculator(feature) {
//   getInput();
//   doMath();
//   showAnswer();
// }


var inputIds = {
  basic: {
    firstNum: "basic-num-1",
    secondNum: "basic-num-2",
    operator: "basic-operation"
  },
  trip: {
    distance: "trip-distance",
    mpg: "trip-mpg",
    cpg: "trip-cost",
    speed: "trip-speed"
  },
  bmi: {
    measurement: "bmi-units",
    weight: "bmi-mass",
    height: "bmi-height"
  },
  morgage: {
    principal: "mortgage-loan",
    interestRate: "mortgage-apr",
    term: "mortgage-term"
  }
};

var eventIds = ["-calc", "-answer", "-answer-alert"];

function runBasicCalculator () {

  firstNum = Number(document.getElementById(inputIds.basic.firstNum).value);
  operator = document.getElementById(inputIds.basic.operator).value;
  secondNum = Number(document.getElementById(inputIds.basic.secondNum).value);
  return result = doBasicMath (operator, firstNum, secondNum);
}

function doBasicMath (operator, firstNum, secondNum) {

  switch (operator) {
    case "+":
    return (firstNum + secondNum);
    break;

    case "-":
    return (firstNum - secondNum);
    break;

    case "*":
    return (firstNum * secondNum);
    break;

    case "/":
    return (firstNum / secondNum);
    break;

    default:
    console.log("doBasicMath has invalid arguments!");
  }
}

// function getEventIds(feature) {
//   eventIds.forEach (value, index) {
//   answer = document.getElementById(feature +"-answer");

// }


var basicAnswer = document.getElementById("basic-answer");
var basicButton = document.getElementById("basic-calc");
var basicAnswerText = document.getElementById("basic-answer-alert");



// var basicInput1 = document.getElementById("basic-num-1");

// var basicInput2 = document.getElementById("basic-num-2");

// var basicOp = document.getElementById("basic-operation");


basicButton.addEventListener("click", function() {
  basicAnswer.className = "show";
  basicAnswerText.innerText = runBasicCalculator();
})

var inputFields = document.getElementsByClassName("form-control");
for (i=0; i<inputFields.length; i++) {
  inputFields[i].addEventListener("focus", function(){basicAnswer.className="hide";})
}


