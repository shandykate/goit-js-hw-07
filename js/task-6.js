function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {
      return;
  }

  boxesContainer.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      boxesContainer.appendChild(div);
      size += 10;
  }

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
