mdc.autoInit()

function hidenav(){
  document.getElementById("drawer").style= "animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideOutFromleft forwards;"
  setTimeout(function() {
    document.getElementById("drawer").style= "display: none;"
  }, 410);
};

function shownav(){
  document.getElementById("drawer").style= "display: inline-block;"
  document.getElementById("drawer").style= "animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideInFromleft forwards;"
};


