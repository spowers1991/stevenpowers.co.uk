import * as React from 'react'
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const Header = () => {
  return (    
    <header>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&amp;display=swap" rel="stylesheet" />
        </Helmet>
        <nav className="flex items-center justify-between flex-wrap font-inter mt-3 mb-14">
            <div className="block ml-auto pr-10">
                <div className="text-sm lg:flex-grow">
                <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-l mr-4">
                    Docs
                </Link>
                <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-l  mr-4">
                    Examples
                </Link>
                <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-l ">
                    Blog
                </Link>
                </div>
                <div>
                <Link to="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
// Step 3: Export your component
export default Header