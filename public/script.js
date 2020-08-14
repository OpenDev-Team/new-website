mdc.autoInit()

const listEl = document.querySelector('#drawer');
const open = document.querySelector('#open');

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

listEl.addEventListener('click', (event) => {
  drawer.open = true;
});

function hidenav(){
  document.getElementById("drawer").style= "animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideOutFromleft forwards;"
  setTimeout(function() {
    document.getElementById("drawer").style= "display: none;"
  }, 410);
};

function shownav(){
  document.getElementById("drawer").style= "animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideInFromleft forwards;"
  setTimeout(function() {
    document.getElementById("drawer").style= "display: none;"
  }, 410);
};

