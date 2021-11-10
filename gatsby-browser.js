  // ./gatsby-browser.js
  import './src/styles/global.css';


export const onRouteUpdate = ({ location, prevLocation }) => {
  if(location.pathname === '/contact'){
    document.querySelector('#contact-link .button-bar').classList.add('active');
    document.querySelector('#home-link .button-bar').classList.remove('active');
    
    //Form Logic 
    const encode = (data) => {
      return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join('&');
   }
  
   function handleFormSubmit(event) {
      function formSubmitted(){
          document.querySelector('.submit-button').classList.add('form-submitted', "bg-red", "pointer-events-none");
          document.querySelector('.submit-button').innerHTML = "Form Submitted";
      }
      event.preventDefault();
      const data = [...event.target.elements].filter(element => Boolean(element.name)).reduce((json, element) => {
         json[element.name] = element.value;
         return json;
      }, {});
      fetch(event.target.action, {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded"
         },
         body: encode(data),
      }).then(() => formSubmitted()).catch(error => alert(error));
   }
  }
  else {
    document.querySelector('#home-link .button-bar').classList.add('active');
    document.querySelector('#contact-link .button-bar').classList.remove('active');
  }
}