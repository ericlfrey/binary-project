

const outputField = document.getElementById('output');
const inputField = document.getElementById('input');
const inputButton = document.getElementById('convert');
const clearMessage = document.getElementById('clear')

const buttonPress = () => {
  const inputValue = document.getElementById('input').value;
  const binary = parseInt(inputValue).toString(2);
  if (inputValue === '' || NaN) {
    outputField.innerHTML = 'You must enter a number!'
  } else {
    outputField.innerHTML = `The Binary Equivalent of ${inputValue} is: ${binary}`;
  }

  clearMessage.innerHTML = `Press "c" to clear`
  return binary;
}

// clears the input field
const clearField = () => {
  document.getElementById('input').value = '';
}

//clears the text field and the 'clear' message
const clearSpan = () => {
  document.getElementById('output').innerHTML = '';
  document.getElementById('clear').innerHTML = '';
}

// Enter Key for Input Field
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonPress();
    clearField();
  }
});

// "c" button press to clear for the Input Field
inputField.addEventListener("keypress", function (event) {
  if (event.key === "c") {
    event.preventDefault();
    clearSpan();
  }
});

// "c" button to clear for the Button
inputButton.addEventListener("keypress", function (event) {
  if (event.key === "c") {
    event.preventDefault();
    clearSpan();
  }
});

// Enter Key for the Button
inputButton.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonPress();
  }
});

// Mouse Click for Button
inputButton.addEventListener("click", function (event) {
  event.preventDefault();
  buttonPress();
});
