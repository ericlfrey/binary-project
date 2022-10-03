

const outputField = document.getElementById('output');
const inputField = document.getElementById('input');
const inputButton = document.getElementById('convert');
const clearMessage = document.getElementById('clear')
const buttonTest = () => {
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
const clearField = () => {
  document.getElementById('input').value = '';
}
const clearSpan = () => {
  document.getElementById('output').innerHTML = '';
  document.getElementById('clear').innerHTML = '';
}
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonTest();
    clearField();
  }
});
inputField.addEventListener("keypress", function (event) {
  if (event.key === "c") {
    event.preventDefault();
    clearSpan();
  }
});
inputButton.addEventListener("keypress", function (event) {
  if (event.key === "c") {
    event.preventDefault();
    clearSpan();
  }
});
