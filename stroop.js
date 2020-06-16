const startBtn = document.querySelector('#startBtn');
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


startBtn.addEventListener('click', () => {
  document.querySelector('.row').classList.remove('d-none');
  randomizeTarget(target);
  updateScore();
  // add: if started - change start to restart
})

successBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore('correct');
})

failBtn.addEventListener('click', () => {
  randomizeTarget(target);
  updateScore('incorrect');
})
