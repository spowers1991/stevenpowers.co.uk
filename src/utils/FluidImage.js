import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

const FluidImage = ({ image, className }) => {

    const fluidProps = image.filename ? [
        getFluidGatsbyImage(image.filename, { maxWidth: 2560, quality: 60 }),
        {
            ...getFluidGatsbyImage(image.filename, { maxWidth: 1536, quality: 60 }),
            media: `(max-width: 1536px, min-width 1280px)`,
        },
        {
            ...getFluidGatsbyImage(image.filename, { maxWidth: 1280, quality: 60 }),
            media: `(max-width: 1280px, min-width: 1024px)`,
        },
        {
            ...getFluidGatsbyImage(image.filename, { maxWidth: 1024, quality: 60 }),
            media: `(max-width: 1024px, min-width: 768px)`,
        },
        {
            ...getFluidGatsbyImage(image.filename, { maxWidth: 768, quality: 60 }),
            media: `(max-width: 768px)`,
        },
    ] : ''

    return <Img className={className} alt={image.alt} fluid={fluidProps} placeholderStyle={{ filter: `blur(1rem)` }} />
}

export default FluidImage