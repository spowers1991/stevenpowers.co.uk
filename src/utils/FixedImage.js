import React from 'react'
import SbEditable from 'storyblok-react'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'

const FixedImage = ({ blok }) => {

  const fixedProps = blok.image.filename ? [
    getFixedGatsbyImage(blok.image.filename, { maxWidth: 2560, quality: 60 }),
      {
          ...getFixedGatsbyImage(blok.image.filename, { maxWidth: 1536, quality: 60 }),
          media: `(max-width: 1536px, min-width 1280px)`,
      },
      {
          ...getFixedGatsbyImage(blok.image.filename, { maxWidth: 1280, quality: 60 }),
          media: `(max-width: 1280px, min-width: 1024px)`,
      },
      {
          ...getFixedGatsbyImage(blok.image.filename, { maxWidth: 1024, quality: 60 }),
          media: `(max-width: 1024px, min-width: 768px)`,
      },
      {
          ...getFixedGatsbyImage(blok.image.filename, { maxWidth: 768, quality: 60 }),
          media: `(max-width: 768px)`,
      },
  ] : ''

  return (
    <SbEditable content={blok}>
      <Img fixed={fixedProps} placeholderStyle={{filter:`blur(1rem)`}} />
    </SbEditable>
  )
}

export default FixedImage