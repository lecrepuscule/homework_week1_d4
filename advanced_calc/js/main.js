
// function runCalculator(feature) {
//   getInput();
//   doMath();
//   showAnswer();
// }


var requiredIds = {
  Basic: {
    firstNumber: "basic-num-1",
    secondNumber: "basic-num-2",
    operator: "basic-operation"
  },
  Trip: {
    distance: "trip-distance",
    mpg: "trip-mpg",
    cpg: "trip-cost",
    speed: "trip-speed"
  },
  BMI: {
    measurement: "bmi-units",
    weight: "bmi-mass",
    height: "bmi-height"
  },
  Morgage: {
    principal: "mortgage-loan",
    interestRate: "mortgage-apr",
    term: "mortgage-term"
  }
};

function runBasicCalculator () {

  firstNum = document.getElementById(requiredIds.Basic.operator).value;
  operator = document.getElementById(requiredIds.Basic.operator).value;
  secondNum = document.getElementById(requiredIds.Basic.operator).value;
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



