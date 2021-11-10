import React from 'react'
import SbEditable from 'storyblok-react'

const Form = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="container mx-auto font-inter mt-10">
                <form className="bg-white shadow-md  px-8 pt-6 pb-8 mb-4" name="contact" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
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
            </div>      
        </SbEditable>
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

export default Form