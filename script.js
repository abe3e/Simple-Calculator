let num = "";
let result = 0;
const numbers = [];
let numIndex = 0;
let operator;
let append1 = 0;
let append2 = 1;


function display(nextNum) {
  const calcDisplay = document.querySelector(".result");
  if (calcDisplay.textContent.length == 12) {
    return;
  }

  if (calcDisplay.textContent == 0) {
    calcDisplay.textContent = "";
  }
  num = num + nextNum;

  calcDisplay.textContent = calcDisplay.textContent + nextNum;

}

function clearScreen() {
  num = "";
  const p = document.querySelector(".result");
  p.textContent = 0;
  result = 0;
  numIndex = 0;
  append1 = 0;
  append2 = 1;
}


function calculate(operator) {
  const calcDisplay = document.querySelector(".result");
  if (num != "") {
    numbers[numIndex] = num;
    num = "";
    numIndex++;
  }
  this.operator = operator;
  calcDisplay.textContent = calcDisplay.textContent + operator;

}

function equals() {
  const calcDisplay = document.querySelector(".result");
  numbers[numIndex] = num;
  num = "";
  numIndex++
  switch (this.operator) {
    case "+":
      result = +numbers[append1] + +numbers[append2];
      calcDisplay.textContent = result;
      break;
    case "/":
      result = +numbers[append1] / +numbers[append2];
      calcDisplay.textContent = result;
      break;
    case "x":
      result = +numbers[append1] * +numbers[append2];
      calcDisplay.textContent = result;
      break;
    case "-":
      result = +numbers[append1] - +numbers[append2];
      calcDisplay.textContent = result;
      break;

  }

  numbers[numIndex] = result;
  numIndex++;
  append1 += 2;
  append2 += 2;

}