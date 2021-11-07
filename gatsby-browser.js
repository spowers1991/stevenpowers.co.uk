  // ./gatsby-browser.js
  import './src/styles/global.css';


export const onInitialClientRender = () => {

  var icons =  Array.prototype.slice.call(document.getElementsByClassName('icon'));
  var modals = Array.prototype.slice.call(document.getElementsByClassName('modal'));
  var closeButtons = document.querySelectorAll('.close-btn');
  var backdrop = document.querySelector('.backdrop');

  console.log(closeButtons);

  for (var i = 0; i < icons.length; i++) {    
     var icon = icons[i];
     var closeButton = closeButtons[i];
     icon.onclick = function () {
      var currentIndex = icons.indexOf(this);
      for (var i = 0; i < icons.length; i++) { 
        modals[i].classList.add("opacity-0");
      }
      icons[currentIndex].classList.add("opacity-0");
      modals[currentIndex].classList.remove("opacity-0", "scale-0");
      modals[currentIndex].classList.add("scale-100", "opacity-100");
      backdrop.classList.remove("hidden", "pointer-events-none");
      backdrop.classList.add("pointer-events-all");
     }
      closeButton.onclick = function () {
        backdrop.classList.add("hidden");
        for (var i = 0; i < icons.length; i++) { 
          modals[i].classList.add("opacity-0", "scale-0");
          modals[i].classList.remove("opacity-100", "scale-100");
          icons[i].classList.remove("opacity-0");
          icons[i].classList.add("opacity-100");
        }
      }
  }
  backdrop.onclick = function () {
    backdrop.classList.add("hidden");
    for (var i = 0; i < icons.length; i++) { 
      modals[i].classList.add("opacity-0", "scale-0");
      modals[i].classList.remove("opacity-100", "scale-100");
      icons[i].classList.remove("opacity-0");
      icons[i].classList.add("opacity-100");
    }
  }

}