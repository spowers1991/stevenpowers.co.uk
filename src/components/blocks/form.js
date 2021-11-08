import React from 'react'
import SbEditable from 'storyblok-react'
//import RichText from 'src/utils/RichText'

const Form = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="container mx-auto font-inter mt-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" name="contact" method="POST" data-netlify="true">
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your full name"/>
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            email
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.co.uk"/>
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="textarea" placeholder="..."/>
                        <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-black text-white font-bold px-5 py-3 lg:py-3 focus:outline-none uppercase" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>      
        </SbEditable>
    )
}

export default Form