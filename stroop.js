const startBtn = document.querySelector('#startBtn');
const restartBtn = document.querySelector('#restartBtn');
const endBtn = document.querySelector('#endBtn');
const correctBtn = document.querySelector('#correctBtn');
const incorrectBtn = document.querySelector('#incorrectBtn');

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

const updateScore = (situation = '') => {
  if (situation === 'correct') {
    scoreCorrect += 1;
    scoreTotal += 1;
  }  else if (situation === 'incorrect') {
    scoreTotal += 1;
  } else if (situation === '') {
    // reset score
    scoreCorrect = 0;
    scoreTotal = 0;
  }

  correctSpan.innerHTML = scoreCorrect;
  totalSpan.innerHTML = scoreTotal;
}

const startTest = () => {
  randomizeTarget(target);

  // Reset the score
  updateScore();

  // Show restart and end buttons in header
  startBtn.classList.add('d-none');
  restartBtn.classList.remove('d-none');
  endBtn.classList.remove('d-none');

  // Show active participant and test leader instructions, hide end screen
  document.querySelector('#participantView').classList.remove('d-none');
  document.querySelector('#participantEnd').classList.add('d-none');

  // Enable test leader un/success buttons
  correctBtn.disabled = false;
  incorrectBtn.disabled = false;
}

const endTest = () => {
  // Show start button in header
  startBtn.classList.remove('d-none');
  restartBtn.classList.add('d-none');
  endBtn.classList.add('d-none');

  // Show end screen and hide active screens
  document.querySelector('#participantView').classList.add('d-none');
  document.querySelector('#participantEnd').classList.remove('d-none');

  // Show final score to participant
  document.querySelector('#participantEnd').innerHTML = `
    <p>Thank you for participating!</p>
    <p>Final score: <strong>${getFinalScore()}%</strong></p>
  `;

  // Disable test leader un/success buttons
  correctBtn.disabled = true;
  incorrectBtn.disabled = true;
}

const getFinalScore = () => {
  if (totalSpan.innerText == 0) {
    return '0';
  }
  let score = Math.round(correctSpan.innerText / totalSpan.innerText * 100);
  return score;
}


// Header buttons
startBtn.addEventListener('click', () => {
  startTest();
})

restartBtn.addEventListener('click', () => {
  startTest();
})

endBtn.addEventListener('click', () => {
  endTest();
})

// Test leader buttons
correctBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore('correct');
})

incorrectBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore('incorrect');
})
