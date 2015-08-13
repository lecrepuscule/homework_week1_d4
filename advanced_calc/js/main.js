
// function runCalculator(feature) {
//   getInput();
//   doMath();
//   showAnswer();
// }


var inputDictionary = {
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
  mortgage: {
    principal: "mortgage-loan",
    interestRate: "mortgage-apr",
    term: "mortgage-term"
  }
};

var idSuffixes = {
  button: "-calc", 
  answerBox: "-answer", 
  answerText: "-answer-alert"
};

function runCalculator (feature) {

    switch (feature) {
      case "basic":
      return runBasicCalculator();
      break;

      case "mortgage":
      return runMortgageCalculator();
      break;

      case "bmi":
      return runBMICalculator();
      break;

      case "trip":
      return runTripCalculator();
      break;

      default:
      console.log("runCalculator does not have this feature!");
    }
}


function runBasicCalculator () {
  firstNum = Number(document.getElementById(inputDictionary.basic.firstNum).value);
  operator = document.getElementById(inputDictionary.basic.operator).value;
  secondNum = Number(document.getElementById(inputDictionary.basic.secondNum).value);
  return doBasicMath (operator, firstNum, secondNum);
}

function runMortgageCalculator () {
  principal = Number(document.getElementById(inputDictionary.mortgage.principal).value);
  interestRate = Number(document.getElementById(inputDictionary.mortgage.interestRate).value);
  numberOfPayments = Number(document.getElementById(inputDictionary.mortgage.term).value);
  return doMortgageCalculation(principal, interestRate, numberOfPayments);
}

function runBMICalculator() {
  var measurement = document.getElementById(inputDictionary.bmi.measurement).value;
  weight = Number(document.getElementById(inputDictionary.bmi.weight).value);
  height = Number(document.getElementById(inputDictionary.bmi.height).value);
  return doBMICalculation(weight, height, measurement);
}

function runTripCalculator() {
  distance = Number(document.getElementById(inputDictionary.trip.distance).value);
  speed = Number(document.getElementById(inputDictionary.trip.speed).value);
  milePerGallon = Number(document.getElementById(inputDictionary.trip.mpg).value);
  costPerGallon = Number(document.getElementById(inputDictionary.trip.cpg).value);
  var result = doTripCalculation(distance, speed, milePerGallon, costPerGallon);
  if (result["cost"] === "infinite") {
    alert("The speed is too high for the given Fuel Efficiency in mpg!");
  }
  else {
    return ("time: " + result["time"] + " hour(s); cost: GBP" + result["cost"]);
  }
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

function doMortgageCalculation (p, ir, n) {
  var m = p * ir * Math.pow( ( 1 + ir ), n )/( Math.pow( 1 + ir, n ) - 1);
  return m;
}

function doBMICalculation(w, h, m) {
  BMI = w/Math.pow(h,2);
  (m === "imperial") ? BMI = (BMI * 703) : BMI;
  return BMI;
}

function reduceFuelEfficiency(s, mpg) {
  var overSpeed = s > 60 ? s-60 : 0;
  var mpgReduction = overSpeed * 2;
  return mpgReduction;
}

function doTripCalculation(d, s, mpg, cpg) {
  time = d/s;
  mpg -= reduceFuelEfficiency(s, mpg);
  cost = mpg <= 0 ? "infinite" : (d/mpg * cpg);
  return {"time": time, "cost": cost};
}

// function getEventIds(feature) {
//   eventIds.forEach (value, index) {
//   answer = document.getElementById(feature +"-answer");

// }


// var basicAnswer = document.getElementById("basic-answer");
// var basicButton = document.getElementById("basic-calc");
// var basicAnswerText = document.getElementById("basic-answer-alert");


// basicButton.addEventListener("click", function() {
//   basicAnswer.className = "show";
//   basicAnswerText.innerText = runCalculator("basic");
// })

// var mortgageAnswer = document.getElementById("mortgage-answer");
// var mortgageButton = document.getElementById("mortgage-calc");
// var mortgageAnswerText = document.getElementById("mortgage-answer-alert");


// mortgageButton.addEventListener("click", function() {
//   mortgageAnswer.className = "show";
//   mortgageAnswerText.innerText = runCalculator("mortgage");
// })

// var tripAnswer = document.getElementById("trip-answer");
// var tripButton = document.getElementById("trip-calc");
// var tripAnswerText = document.getElementById("trip-answer-alert");


// tripButton.addEventListener("click", function() {
//   tripAnswer.className = "show";
//   tripAnswerText.innerText = runCalculator("trip");
// })

// var bmiAnswer = document.getElementById("bmi-answer");
// var bmiButton = document.getElementById("bmi-calc");
// var bmiAnswerText = document.getElementById("bmi-answer-alert");


//   bmiButton.addEventListener("click", function() {
//   bmiAnswer.className = "show";
//   bmiAnswerText.innerText = runCalculator("bmi");
// })


///////////////////////refactored//////////////////////


function clickEvent (feature) {
  var prefix = feature;
  // var answer = document.getElementById(feature + idSuffixes.answerBox);
  // var answerText = document.getElementById(feature+idSuffixes.answerText);
  document.getElementById(prefix + idSuffixes.answerBox).className = "show";
  // var result = runCalculator(feature);
  document.getElementById(prefix + idSuffixes.answerText).innerText = runCalculator(prefix);  
} 

for (key in inputDictionary) {
  // var button = document.getElementById(key + idSuffixes.button);
  document.getElementById(key + idSuffixes.button).addEventListener("click", function(){
    event.preventDefault();
    var prefix = this.id.split("-")[0];
    clickEvent(prefix);
  })
}



var inputFields = document.getElementsByClassName("form-control");

for (i=0; i<inputFields.length; i++) {
  inputFields[i].addEventListener("focus", function(){
    answerBoxId = this.id.split("-")[0] + idSuffixes.answerBox;
    // answerBox = document.getElementById(answerBoxId);
    document.getElementById(answerBoxId).className = "hide";
    // basicAnswer.className="hide";
    // bmiAnswer.className="hide";
    // tripAnswer.className="hide";
    // mortgageAnswer.className="hide";
  })
}



