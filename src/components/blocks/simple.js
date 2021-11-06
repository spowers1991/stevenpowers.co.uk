import React from 'react'
import SbEditable from 'storyblok-react'
//import RichText from '../utils/RichText'

const Simple = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="container mx-auto font-inter">
                <h1 className="text-8xl font-bold font-inter mb-3">{
                    blok.title}
                </h1>
                <div className="lead text-xl font-medium text-lightgrey">
                This website was build in React using Gatsby and is deployed via Netlify. 
                <br/>
                The content is managed using StoryBlok, which generates GraphQl Json data which is used to render the page content.
                </div>
            </div>      
        </SbEditable>
    )
}

export default Simple