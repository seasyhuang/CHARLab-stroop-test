const colors = [
  "Black","Blue","Green","Orange","Pink","Purple","Red","Yellow"
];

const randomizeTarget = (target) => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  target.innerHTML = randomColor;
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  target.style.color = randomColor;

}

const target = document.querySelector('#target');
const randomBtn = document.querySelector('#randomBtn')

randomizeTarget(target);

randomBtn.addEventListener('click', () => {
  randomizeTarget(target);
})
