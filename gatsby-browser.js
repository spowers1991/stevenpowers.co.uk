  // ./gatsby-browser.js
  import './src/styles/global.css';


export const onRouteUpdate = ({ location, prevLocation }) => {
  if(location.pathname === '/contact'){
    document.querySelector('#contact-link .button-bar').classList.add('active');
    document.querySelector('#home-link .button-bar').classList.remove('active');
  }
  else {
    document.querySelector('#home-link .button-bar').classList.add('active');
    document.querySelector('#contact-link .button-bar').classList.remove('active');
  }
}