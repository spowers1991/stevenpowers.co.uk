import React from 'react'
import SbEditable from 'storyblok-react'
//import RichText from 'src/utils/RichText'

const Simple = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="container mx-auto font-inter">
                <h1 className="text-6xl lg:text-8xl font-bold font-inter mb-3">
                    {blok.title}
                </h1>
                <p className="lead text-grey text-sm lg:text-base font-medium max-w-4xl">
                    {blok.content}
                </p>
            </div>      
        </SbEditable>
    )
}

export default Simple