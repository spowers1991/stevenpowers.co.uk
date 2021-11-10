  // ./gatsby-browser.js
  import './src/styles/global.css';


export const onRouteUpdate = ({ location, prevLocation }) => {
  if(location.pathname === '/'){
    var menuClass = location.pathname;
    var otherMenuLinks = document.querySelectorAll('.menu-link .button-bar');
    for (var i = 0; i < otherMenuLinks.length; i++) {
      otherMenuLinks[i].classList.remove('active');
    }
    document.querySelector('#home-link .button-bar').classList.add('active');
  }
  else {
    var menuClass = location.pathname.replace('/', '');
    var otherMenuLinks = document.querySelectorAll('.menu-link .button-bar');
    for (var i = 0; i < otherMenuLinks.length; i++) {
      otherMenuLinks[i].classList.remove('active');
    }
    document.querySelector('#'+menuClass+'-link .button-bar').classList.add('active');
  }
}