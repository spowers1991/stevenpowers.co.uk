import React from 'react'

const Heading = ({children, size, className}) => {

    switch(size) {

        case 'h1':
            return <h1 className={`font-display uppercase text-4xl lg:text-8xl tracking-[0.01em] ${className ? className : ""} mb-3`}>{children}</h1>
        case 'h2':
            return <h2 className={`font-display uppercase text-3xl lg:text-5xl tracking-[0.01em] ${className ? className : ""} mb-3`}>{children}</h2>
        case 'h3':
            return <h3 className={`font-display uppercase text-3xl lg:text-4xl tracking-[0.01em] ${className ? className : ""} mb-3`}>{children}</h3>
        case 'h4':
            return <h4 className={`font-display uppercase text-2xl lg:text-3xl tracking-[0.01em] ${className ? className : ""} mb-3`}>{children}</h4>
        case 'h5':
            return <h5 className={`font-display uppercase text-1xl lg:text-2xl tracking-[0.01em] ${className ? className : ""} mb-3`}>{children}</h5>
        case 'h6':
            return <h6 className={`font-display uppercase text-lg lg:text-1xl tracking-[0.01em] ${className ? className : ""} mb-3`}>{children}</h6>
        default:
            return null

    }

}

export default Heading