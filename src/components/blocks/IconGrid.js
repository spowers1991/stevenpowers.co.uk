import React from 'react'
import SbEditable from 'storyblok-react'
import { Helmet } from 'react-helmet'
import RichText from '/src/utils/RichText'

const IconGrid = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <Helmet>
                <script src='../modalIcons.js' type="text/javascript" />
            </Helmet>
            <div>              
                <div className="icon-grid container mx-auto w-full flex-none grid grid-cols-2 md:grid-cols-8 grid-rows-2 gap-y-10 pt-10">                
                    {
                        blok.items.map((item, index) => {
                            return (
                            <div key={index}>
                                <img className="icon w-3/4 lg:m-0 shadow-md hover:shadow-xl transition transform-gpu duration-100 cursor-pointer  p-5 bg-white mx-auto md-mx-0 z-20" src={item.image.filename} />
                                <div className="fixed top-0 left-0 right-0 bottom-0 w-3/4 h-3/4 lg:w-1/4 lg:h-3/4 pt-20 pb-17 m-auto modal opacity-0 z-20 bg-white shadow-2xl scale-0 transition transform-gpu duration-100">
                                    <div className="absolute w-full h-7 bg-black top-0 left-0"></div>
                                    <div className="absolute top-1 right-3">
                                         <i className="close-btn far fa-window-close text-white text-xl fas fa-times-circle cursor-pointer hover:text-red"></i>                                 
                                    </div>
                                    <img className="h-1/4 lg:h-1/2 w-full lg:m-0 m-auto" src={item.image.filename} />
                                    <div className="pt-5 px-5 m-auto">
                                        <h3 className="text-2xl lg:text-4xl font-bold font-inter mb-5 border-dashed pb-4 border-b-4 border-light-blue-500 ">
                                            {item.title}
                                        </h3>
                                        <div className="text-sm lg:text-base">
                                            <RichText>{item.content}</RichText>
                                        </div>
                                        <a href={`${item.external_Link}`} target="_blank">
                                            <div className="bg-black text-white p-2 lg:p-5 mt-5 text-center font-inter font-bold uppercase mb-5 relative group text-sm lg:text-base">
                                                View docs
                                                <div class="button-bar absolute bottom-0 left-0 right-0 m-auto w-10 max-w-full bg-blue h-1 transform group-hover:w-full transition transition-gpu duration-200"></div>
                                            </div>
                                        </a>
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