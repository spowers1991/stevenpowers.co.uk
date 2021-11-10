import * as React from 'react'
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const Header = () => {
  return (    
    <header className="container m-auto">
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&amp;display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
        </Helmet>
        <nav className="flex items-center justify-between flex-wrap font-inter mt-3 mb-14">
            <div className="block ml-auto">
                <div className="text-sm lg:flex-grow">
                <Link to="/" id="home-link" className="menu-link relative  mt-4 inline-block lg:mt-0 text-l mr-4 bg-black text-white p-2 lg:p-5 mt-5 text-center font-inter font-bold uppercase group">
                    About
                    <div class="button-bar absolute bottom-0 left-0 right-0 m-auto w-5 max-w-full bg-blue h-1 transform group-hover:w-full transition transition-gpu duration-200"></div>
                </Link>
                <Link to="/contact" id="contact-link" className="menu-link relative  mt-4 inline-block lg:mt-0 text-l mr-4 bg-black text-white p-2 lg:p-5 mt-5 text-center font-inter font-bold uppercase group">
                    Contact
                    <div class="button-bar absolute bottom-0 left-0 right-0 m-auto w-5 max-w-full bg-blue h-1 transform group-hover:w-full transition transition-gpu duration-200"></div>
                </Link>
                </div>
            </div>
        </nav>
        <form className="hidden bg-white shadow-md  px-8 pt-6 pb-8 mb-4" name="contact" data-netlify="true" onSubmit={handleFormSubmit}>
                <input type="hidden" name="contact" value="contact" />
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your full name" name="fullname" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            email
                        </label>
                        <input className=" appearance-none border border-red-500 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.co.uk" name="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                            Message
                        </label>
                        <textarea className=" appearance-none border border-red-500 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="textarea" name="message" placeholder="..." required />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="submit-button bg-black text-white font-bold px-5 py-3 lg:py-3 focus:outline-none uppercase transition transition-gpu duration-100" type="submit">
                            Send
                        </button>
                    </div>
                </form>
    </header>
  )
}

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
 
// Step 3: Export your component
export default Header