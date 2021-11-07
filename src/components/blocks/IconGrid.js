import React from 'react'
import SbEditable from 'storyblok-react'

const IconGrid = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div>              
                <div className="icon-grid container mx-auto w-full flex-none grid grid-cols-2 md:grid-cols-8 grid-rows-2 gap-y-10 pt-10">                
                    {
                        blok.items.map((item, index) => {
                            return (
                            <div key={index}>
                                <img className="icon w-3/4 lg:m-0 shadow-md hover:shadow-xl transition transform-gpu duration-100 cursor-help rounded-xl p-5 bg-white mx-auto md-mx-0 z-20" src={item.image.filename} />
                                <div className="fixed top-0 left-0 right-0 bottom-0 w-3/4 h-3/4 lg:w-1/4 lg:h-2/4  py-16 m-auto modal opacity-0 z-20 bg-white rounded-xl shadow-2xl scale-0 transition transform-gpu duration-100">
                                    <div className="absolute top-5 right-5">
                                        <i className="close-btn text-grey text-2xl fas fa-times-circle cursor-pointer hover:text-black"></i>                                  
                                    </div>
                                    <img className="h-1/3 w-full lg:m-0 m-auto" src={item.image.filename} />
                                    <div className="overflow-y-scroll pt-5 px-5 m-auto">
                                        <h3 className="text-2xl font-inter mb-5">
                                            Title
                                        </h3>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }     
                    <div className="backdrop fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white opacity-50 z-10 hidden pointer-events-none"></div>     
                </div>     
            </div>            
        </SbEditable>
    )
}



export default IconGrid