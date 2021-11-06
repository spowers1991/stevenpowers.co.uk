import React from 'react'
import { Link } from 'gatsby'

const Button = ({ children, className, target }) => {
    return (
        <Link className={`cursor-pointer inline-flex justify-center items-center px-5 py-3 line-crop font-display tracking-[0.08em] text-white uppercase transition duration-300 text-lg !leading-tight ${className ? className : ""}`} to={target}>{children}<i className="fas fa-chevron-right cursor-pointer ml-3 text-xs inline"></i></Link>
    )
}

export default Button