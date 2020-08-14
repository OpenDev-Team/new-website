mdc.autoInit()

const listEl = document.querySelector('.mdc-drawer');
const open = document.querySelector('#open');

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

listEl.addEventListener('click', (event) => {
  drawer.open = true;
});
