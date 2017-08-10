const maximumLength = 9;
let buttons = document.querySelectorAll('.action');
let outputScreen = document.querySelector('#output-screen');
let clearButton = document.querySelector('#clear-button');
let equalButton = document.querySelector('#equal-button');

clearButton.addEventListener('click', function() {
  outputScreen.innerHTML = '';
}); // clearButton.addEventListener()

buttons.forEach(function(button) {
  let buttonValue = button.value;

  button.addEventListener('click', function() {

    if (outputScreen.textContent.length < maximumLength) {
      outputScreen.textContent += buttonValue;
    } // if
  }) // button.eventListener()
}); // buttons.forEach()

equalButton.addEventListener('click', function() {
  let answer = eval(outputScreen.textContent);
  outputScreen.innerHTML = answer;
}); // equalButton.addEventListener()
