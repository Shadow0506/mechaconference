import { Link, useNavigate } from "react-router-dom"
import { Menuitems } from './Menuitems.js';
import Typewriter from "typewriter-effect";
export function Headertailwind() {
    const navigate = useNavigate();
    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-4">
                <a href='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src='https://static.vecteezy.com/system/resources/previews/010/206/756/non_2x/pec-letter-design-pec-letter-logo-design-on-black-background-pec-creative-initials-letter-logo-concept-pec-letter-design-pec-letter-logo-design-on-black-background-p-vector.jpg' className="h-8" alt="Logo"></img>
                    <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white py-5" >
                        <Typewriter onInit={(typewriter) => {
                            typewriter
                                .typeString("Conference Name")
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString("Organized by PEC")
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                        }} />
                    </div>
                </a>


                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default" >
                    <ul class="font-large flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        {Menuitems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url} className="block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        <i className={item.icon}></i>{item.title}
                                    </a>
                                </li>
                            );
                        })}



                    </ul>
                </div>

            </div>
        </nav>



    )
}