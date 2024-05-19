import Marquee from "react-fast-marquee";
import { Impdates } from './Impdates';
import { Speakershome } from "./Speakershome";
import { AboutUs_home } from "./HomeComponents/AboutUs_home";
import { Callforpapers_home } from "./HomeComponents/Callforpapers_home";
import { Registration_home } from "./HomeComponents/Registration_home";
import { Committees_home } from "./HomeComponents/Committees_home";
import { ContactUs_home } from "./HomeComponents/ContactUs_home";
import { Impdates_main } from "./Impdates_main";
import './Home.css';
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
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <section className="text-gray-600 body-font" >

                <div className="relative overflow-hidden rounded-xl ">
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
                        <img src="https://ieeeindiscon.org/assets/images/college/chowk.jpeg" alt="background" className="object-cover w-full h-full opacity-15 rounded-xl" />
                    </div>
                    <Marquee className="text-red-500 p-4">
                        <i className="fa-solid fa-bullhorn px-4"></i>Important Announcements
                    </Marquee>
                    <div className="container mx-auto font-serif">
                        <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                            <div className="rounded-box lg:p-3 rounded w-full">
                                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">
                                    <span className="text-red-500">I</span>nternational <span className="text-red-500">C</span>onference on <span className="text-red-500">D</span>esign and <span className="text-red-500">M</span>anufacturing <span className="text-red-500">T</span>echnologies
                                </h1>
                                <p className="sm:text-3xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Design, Develop and Manufacture</p>
                                <p className="sm:text-3xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Organized by</p>

                                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Department of Mechanical Engineering
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold">
                                    Punjab Engineering College (Deemed to be University), Chandigarh
                                </h1>
                                <p className="sm:text-2xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Funded by Chandigarh Administration (Govt. of India)</p>
                                <h1 className="pt-3 sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                                    &
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Department of Design
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold ">
                                    Indian Institute of Technology, Roorkee
                                </h1>
                                <p className="sm:text-2xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Funded by MHRD (Govt. of India)</p>
                                <h1 className="sm:text-5xl text-2xl pt-4  title-font mb-2 text-red-500 font-bold">
                                    November 8-10, 2024
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row">
                    <div className="  flex flex-col items-center lg:items-start lg:px-0">
                        <div className="pt-10 lg:pt-20 w-full">
                            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900 text-center lg:text-left">
                                About ICDMT-2024
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                            <p className="text-xl text-justify mt-4">
                                The goal of the "International Conference on Design and Manufacturing Technologies” (ICDMT-2024) scheduled from November 8-10, 2024 is to bring together the experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing with a focus on advanced materials to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view to product design, process design and analysis as well as to create, and manufacture goods.
                            </p>
                        </div>
                    </div>
                    {/* <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-end px-4 lg:px-0 py-10 lg:py-16">
                        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-full lg:max-w-lg">
                            <div className="p-6">
                                <h1 className="title-font font-medium text-gray-900 mb-3 text-4xl">Important Updates</h1>
                                <div className="w-full flex justify-center overflow-hidden">
                                    <div className="w-full h-40 overflow-hidden flex items-center">
                                        <Marquee>

                                        <p className="mb-3 break-words text-2xl">Update 1 djoaldmalpdkawpfkawpdkawlwpdawpkdopawesk</p>
                                        <p className="mb-3 break-words text-2xl">Update 2 malwkdwapkdaw,dadap</p>
                                        <p className="mb-3 break-words text-2xl">Update 3</p>
                                        <p className="mb-3 break-words text-2xl">Update 4</p>
                                        </Marquee>

                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap mt-4">
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>


            <AboutUs_home />
            {/* <Impdates_main /> */}
            <Speakershome />
            <Callforpapers_home />
            <Registration_home />
            <Committees_home />
            <ContactUs_home />
        </div>
    )
}
