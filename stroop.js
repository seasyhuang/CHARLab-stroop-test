
const randomizeTarget = (target) => {
  const colors = [
    "Black","Blue","Green","Orange","Pink","Purple","Red","Yellow"
  ];
  
  let randIdx = Math.floor(Math.random() * colors.length);
  let randomColor = colors.splice(randIdx, 1);
  target.innerHTML = randomColor[0];
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  target.style.color = randomColor;

}

const target = document.querySelector('#target');
const randomBtn = document.querySelector('#randomBtn')

randomizeTarget(target);

randomBtn.addEventListener('click', () => {
  randomizeTarget(target);
})
