import Marquee from "react-fast-marquee";
import { Impdates } from './Impdates'
import { Speakershome } from "./Speakershome";
import { AboutUs_home } from "./HomeComponents/AboutUs_home";
import { Callforpapers_home } from "./HomeComponents/Callforpapers_home";
import { Registration_home } from "./HomeComponents/Registration_home";
import { Committees_home } from "./HomeComponents/Committees_home";
// import {ContactUs_home} from "./HomeComponents/ContactUs_home";
export function Home() {
    return (
        <div style={{backgroundColor: '#E9FFFF'}}>

            <section className="text-gray-600 body-font">
                <Marquee className=" text-red-500 p-4">
                    <i class="fa-solid fa-bullhorn px-4"></i>Important Announcements</Marquee>
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                <div className="rounded-box p-3 rounded w-full"  style={{backgroundColor: '#c5b6d3', borderRadius: '20px'}}>
                        
                            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
                            International Conference on Design and Manufacturing Technologies
                            </h1>
                        

                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
                            ICDMT 2024
                        </h1>
                </div>
                        <p className="text-2xl italic lg:w-1/2 w-full leading-relaxed mt-5" style={{fontWeight: 'bold', color: '#9be0c0'}}>Design, Develop and Manufacture</p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            {/* space for icdmt poster */}


                            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                    </div>
                                </div>
                                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                </div>
                                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                        <span class="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span class="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>


                        </div>
                        <div className="flex flex-wrap w-full mb-4">
                            <div className="lg:w-full lg:mb-0 pt-10">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    ABOUT ICDMT-2024
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">

                            <div className="sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-center">
                                <p className="text-lg-3xl mb-4">The goal of the ‘International Conference on Design and Manufacturing Technologies” (ICDMT-2024) scheduled for 08th -10th Nov 2024 is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing with a focus on advanced materials to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view to product design, process design and analysis as well as to create, and manufacture goods. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Impdates />
            <Speakershome />
            <AboutUs_home/>
            <Callforpapers_home/>
            <Registration_home/>
            <Committees_home/>
            {/* <ContactUs_home /> */}
        </div>
    )
}
