import Marquee from "react-fast-marquee";
import { Impdates } from './Impdates'
import { Speakershome } from "./Speakershome";
import { AboutUs_home } from "./HomeComponents/AboutUs_home";
import { Callforpapers_home } from "./HomeComponents/Callforpapers_home";
import { Registration_home } from "./HomeComponents/Registration_home";
import { Committees_home } from "./HomeComponents/Committees_home";
import { ContactUs_home } from "./HomeComponents/ContactUs_home";
import { Impdates_main } from "./Impdates_main"
import './Home.css'
import React, { useState, useEffect } from 'react';
export function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % 3); // Assuming you have 3 slides
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor: '#E9FFFF' }}>

            <section className="text-gray-600 body-font">
                <Marquee className=" text-red-500 p-4">
                    <i class="fa-solid fa-bullhorn px-4"></i>Important Announcements</Marquee>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                        <div className="rounded-box p-3 rounded w-full" >

                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
                                International Conference on Design and Manufacturing Technologies
                            </h1>


                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
                                ICDMT 2024
                            </h1>
                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-red-500">
                                08th-10th November, 2024
                            </h1>
                        </div>
                        <p className="text-2xl italic lg:w-1/2 w-full leading-relaxed mt-5">Design, Develop and Manufacture</p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto flex flex-col">
                    <div className="mx-auto">
                        <section class="container">
                            <div class="slider-wrapper">
                                <div class="slider">
                                    <img id="slide-1" src="https://ieeeindiscon.org/assets/images/college/helicopter.jpeg" alt="3D rendering of an imaginary orange planet in space" style={{ display: currentSlide === 0 ? 'block' : 'none' }}/>
                                    <img id="slide-2" src="https://ieeeindiscon.org/assets/images/college/chowk.jpeg" alt="3D rendering of an imaginary green planet in space" style={{ display: currentSlide === 1 ? 'block' : 'none' }}/>
                                    <img id="slide-3" src="https://ieeeindiscon.org/assets/images/college/audi.jpeg" alt="3D rendering of an imaginary blue planet in space" style={{ display: currentSlide === 2 ? 'block' : 'none' }}/>

                                </div>
                                
                                <div class="slider-nav">
                                    <a href="#slide-1"></a>
                                    <a href="#slide-2"></a>
                                    <a href="#slide-3"></a>
                                  
                                </div>
                            </div>
                        </section>
                        <div className="flex flex-wrap w-full mb-4">
                            <div className="lg:w-full lg:mb-0 pt-10">
                                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    ABOUT ICDMT-2024
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row">

                            <div className="sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-center">
                                <p className="text-lg-3xl mb-4">The goal of the ‘International Conference on Design and Manufacturing Technologies” (ICDMT-2024) scheduled for 08th -10th Nov 2024 is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing with a focus on advanced materials to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view to product design, process design and analysis as well as to create, and manufacture goods. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Impdates /> */}
            <Impdates_main />
            <Speakershome />
            <AboutUs_home />
            <Callforpapers_home />
            <Registration_home />
            <Committees_home />
            <ContactUs_home />
        </div>
    )
}
