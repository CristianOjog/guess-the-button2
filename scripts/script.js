const submitNumber = document.querySelector('.submitNumber');
const noButtons = document.querySelector('.noButtons');
const groupbtns = document.querySelector('.btn-group');
const lastResult = document.querySelector('.lastResult');

let randomNumber;
let resetButton;
let idButton = 0;
noButtons.focus();

function generateButton() {
  submitNumber.disabled = true;
  noButtons.disabled = true;
  const userInputNum = Number(noButtons.value);
  randomNumber = randomNumber = Math.floor(Math.random() * userInputNum) + 1;
  for (let i = 0; i < userInputNum; ++i) {
    let newBtn = document.createElement('button');
    newBtn.innerText="Button";
    newBtn.className = 'button';
    newBtn.id = ++idButton;
    groupbtns.appendChild(newBtn);
  }
  
  noButtons.focus();
}

submitNumber.addEventListener('click', generateButton);

groupbtns.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  
  if (!isButton) {
    return;
  } else if(Number(event.target.id) === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    setGameOver();
  } else {
    lastResult.textContent = '!!!GAME OVER!!!' + ` THE WINNER BUTTON WAS ${randomNumber}!`;
    lastResult.style.backgroundColor = 'red';
    setGameOver();
  }
});

function setGameOver() {
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.querySelector('.card').append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  idButton = 0;
  lastResult.textContent = '';
  for (let i = 0; i < Number(noButtons.value); ++i) {
    document.querySelector('.button').remove(document.querySelector('.button'));
  }
  resetButton.parentNode.removeChild(resetButton);
  lastResult.style.backgroundColor = 'white';
  submitNumber.disabled = false;
  noButtons.disabled = false;
  noButtons.value = '';
  noButtons.focus();
}
