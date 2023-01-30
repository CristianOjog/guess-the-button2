const submitNumber = document.querySelector('.submitNumber');
const noButtons = document.querySelector('.noButtons');
const groupbtns = document.querySelector('.btn-group');
const lastResult = document.querySelector('.lastResult');
const card = document.querySelector('.card');

let gameOver = false;
let randomNumber;
let resetButton;
noButtons.focus();

function generateButton() {
  submitNumber.disabled = true;
  noButtons.disabled = true;
  const userInputNum = Number(noButtons.value);
  randomNumber = Math.floor(Math.random() * userInputNum) + 1;
  for (let i = 1; i <= userInputNum; ++i) {
    groupbtns.innerHTML += `<button class="button" onClick="checkClickedButton(${Number(i)})">Button</button>`;
  }
  noButtons.focus();
}

function checkClickedButton(idButton) {
  if(Number(idButton) === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
  } else {
    lastResult.textContent = '!!!GAME OVER!!!' + ` THE WINNER BUTTON WAS ${randomNumber}!`;
    lastResult.style.backgroundColor = 'red';
  }
  setGameOver();
}

function setGameOver() {
  if (!gameOver) {
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    card.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  gameOver = true;
}

function resetGame() {
  resetAll();
  gameOver = false;
}

function resetAll() {
  idButton = 0;
  lastResult.textContent = '';
  groupbtns.innerHTML = '';
  if (resetButton) {
    resetButton.remove();
  }
  lastResult.style.backgroundColor = 'white';
  submitNumber.disabled = false;
  noButtons.disabled = false;
  noButtons.value = '';
  noButtons.focus();
}