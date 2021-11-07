import * as React from "react"
import SbEditable from 'storyblok-react'
import RichText from 'src/utils/RichText'
 
const Teaser = ({ blok }) => (
    <div>
      <h2>
          { blok.headline }
      </h2>
      <p>
          { blok.intro }
      </p>
    </div>
)
 
export default Teaser