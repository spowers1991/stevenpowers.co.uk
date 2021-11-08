import Placeholder from "./Placeholder";
import React from "react"

//Component imports
///////////////////
//Blocks
import Simple from '../components/blocks/simple'
import IconGrid from '../components/blocks/IconGrid'
import Text from '../components/blocks/text'
import Form from '../components/blocks/form'
 
const Components = {
  'simple': Simple,
  "icon-grid": IconGrid,
  "text": Text,
  "form": Form
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  return blok.component ? <Placeholder componentName={blok.component} /> : null;
};

export default DynamicComponent;
