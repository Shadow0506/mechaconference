import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menuitems } from './Menuitems.js';
import Typewriter from "typewriter-effect";
import main_logo from './main_logo.jpeg'

export function Headertailwind() {
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="border-gray-200 bg-gray-900 md:pb-5 ">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto pb-0 ">
                <div className="flex items-center space-x-3 md:flex-3 mx-auto">
                    <img className="h-25 hidden md:block mx-auto" src="https://latestgovtjobs.in/wp-content/uploads/2017/11/PEC-Logo-150x150.png" alt="peclogo" />
                    {/* <img className="h-25 hidden md:block mx-auto" src="https://latestgovtjobs.in/wp-content/uploads/2017/11/PEC-Logo-150x150.png" alt="peclogo" /> */}
                    <div className="flex items-center">
                        <a href='/' className="flex items-center space-x-3 rtl:space-x">
                            <div className="text-4xl font-semibold whitespace-nowrap text-white">
                                ICDMT 2024
                            </div>
                        </a>
                    </div>
                    <img className="h-24 hidden md:block mx-auto" src="https://iitr.ac.in/Centres/International%20Centre%20of%20Excellence%20for%20Dams/assets/b62ae2df8a426804bc7c58955ceeb977e240a0727ae0018eb62a6c637ab5b135_SRIC.png" alt="iitrlogo" />
                </div>
                <button onClick={toggleMobileMenu} className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200text-gray-400  focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            
            <div className={`max-w-screen-xl mx-auto ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="font-large flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md: bg-gray-80 border-gray-700">
                    {Menuitems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className="block py-2 px-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white hover:text-white hover:bg-transparent">
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
