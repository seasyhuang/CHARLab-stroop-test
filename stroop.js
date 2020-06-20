const startBtn = document.querySelector('#startBtn');
const restartBtn = document.querySelector('#restartBtn');
const endBtn = document.querySelector('#endBtn');
const successBtn = document.querySelector('#successBtn');
const failBtn = document.querySelector('#failBtn');

const correctSpan = document.querySelector('#correctSpan');
const totalSpan = document.querySelector('#totalSpan');
let scoreCorrect = 0;
let scoreTotal = 0;

const target = document.querySelector('#target');
const targetSpan = document.querySelector('span');

const randomizeTarget = (target) => {
  const colors = [
    "Black","Blue","Green","Orange","Pink","Purple","Red","Yellow"
  ];
  let randIdx = Math.floor(Math.random() * colors.length);
  let randomColor = colors.splice(randIdx, 1);
  target.innerHTML = randomColor[0];
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  target.style.color = randomColor;
  targetSpan.innerHTML = randomColor;
}

// function (w cases)
const updateScore = (situation = '') => {
  if (situation === 'correct') {
    scoreCorrect += 1;
    scoreTotal += 1;
  }  else if (situation === 'incorrect') {
    scoreTotal += 1;
  } else if (situation === '') {
    // start/restart
    scoreCorrect = 0;
    scoreTotal = 0;
  }

  correctSpan.innerHTML = scoreCorrect;
  totalSpan.innerHTML = scoreTotal;
}

// function
// refactor:
// start game - incl. un/disable correct/incorrect buttons

startBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore();

  // Change button to restart button, show end button
  startBtn.classList.add('d-none');
  restartBtn.classList.remove('d-none');
  endBtn.classList.remove('d-none');

  document.querySelector('#participantView').classList.remove('d-none');
  document.querySelector('#participantEnd').classList.add('d-none');

  // undisable buttons
  successBtn.disabled = false;
  failBtn.disabled = false;
})

restartBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore();
})

endBtn.addEventListener('click', () => {
  startBtn.classList.remove('d-none');
  restartBtn.classList.add('d-none');
  endBtn.classList.add('d-none');

  document.querySelector('#participantView').classList.add('d-none');
  document.querySelector('#participantEnd').classList.remove('d-none');

  // show final score
  document.querySelector('#participantEnd').innerHTML = `
    <p>Thank you for participating!</p>
    <p>Final score: <strong>${correctSpan.innerText}/${totalSpan.innerText}</strong></p>
  `;

  // disable buttons
  successBtn.disabled = true;
  failBtn.disabled = true;
})


successBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore('correct');
})

failBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore('incorrect');
})
