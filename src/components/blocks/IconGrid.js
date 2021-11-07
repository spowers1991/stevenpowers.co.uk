import React from 'react'
import SbEditable from 'storyblok-react'

const IconGrid = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div class="relative">              
                <div className="icon-grid container mx-auto w-full flex-none grid grid-cols-2 md:grid-cols-8 grid-rows-2 gap-y-10 pt-10">                
                    {
                        blok.items.map((item, index) => {
                            return (
                            <div key={index}>
                                <img className="icon w-3/4 lg:m-0 shadow-md hover:shadow-xl transition duration-250 cursor-help rounded-xl p-5 bg-white mx-auto md-mx-0 z-20" src={item.image.filename} />
                            </div>
                            )
                        })
                    }     
                    <div className="backdrop absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white opacity-50 z-10 hidden"></div>     
                </div>     
            </div>            
        </SbEditable>
    )
}



export default IconGrid