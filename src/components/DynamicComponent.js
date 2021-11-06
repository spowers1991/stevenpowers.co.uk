import SbEditable from 'storyblok-react'
import Placeholder from "./Placeholder";
import React from "react"

//Component imports
///////////////////
//Blocks
import Simple from '../components/blocks/simple'
 
const Components = {
  'simple': Simple,
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  return blok.component ? <Placeholder componentName={blok.component} /> : null;
};

export default DynamicComponent;
