import * as React from 'react'
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const Header = () => {
  return (    
    <header className="container m-auto">
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&amp;display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
        </Helmet>
        <nav className="flex items-center justify-between flex-wrap font-inter mt-3 mb-14">
            <div className="block ml-auto">
                <div className="text-sm lg:flex-grow">
                <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-l mr-4 bg-black text-white p-2 lg:p-5 mt-5 text-center font-inter font-bold uppercase">
                    About
                </Link>
                <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-l mr-4 bg-black text-white p-2 lg:p-5 mt-5 text-center font-inter font-bold uppercase">
                    Contact
                </Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
// Step 3: Export your component
export default Header