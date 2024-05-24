import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel } from "flowbite-react";
export function Callforpapers_home() {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time for larger screens
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1700, // Auto scroll after every 3 seconds
        arrows: true, // Show arrow navigation
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show only 1 card at a time for mobile devices
                },
            },
        ],
    };
    return (
        <div className="w-3/4 m-auto pt-8">
            <div className="container  mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="lg:w-full lg:mb-0 ">
                        <h1 className="sm:text-6xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Call For Papers
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div>
                <Slider {...settings} className='pt-10 px-0 mx-0 '>

                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl ">
                        <div className="absolute inset-0 z-0">
                            <img src="https://www.aiche.org/sites/default/files/styles/aiche_content/public/images/pageset/lead/materials.jpg?itok=jJc3j1x6" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2 text-2xl">Track -1 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Materials</h3>
                            <ul className='text-left'>
    <li>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Materials behaviour
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Metals and Alloys
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Ceramic Materials
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Polymeric Materials
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Advanced Nanomaterials
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Smart Materials and their Applications
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Sustainable and Recycled Materials
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Functionally graded materials
        </a>
    </li>
    <li className='pt-2'>
        <a className='sm:text-2xl text-xl'>
            <i className="fa-solid fa-atom pr-3"></i> Superconductors
        </a>
    </li>
</ul>

                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnWaMAHNPWLwyf4R1ORyxZxJb7quDSpE_0YoOp5KUweF6IYwd8s512BY3SLplcTv1sQg&usqp=CAU" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 2 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Composites</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Nanocomposites
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Hybrid composites
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Bio-composites
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Green Composites

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Multi-functional composites
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Recycled waste-based composites
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Delamination, damage, fracture, failure, fatigue and durability of composites
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-minimize pr-3"></i>Metal matrix composites
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://t3.ftcdn.net/jpg/03/21/87/58/360_F_321875802_aAtoxcTHoEMkI2lwcJXh6r4NVdyjh6y8.jpg" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 3 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Design</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Finite Element Analysis
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Differential/Dynamical systems

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Modelling & Simulation
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Cryogenic Materials
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Multi-scale analysis
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Advanced Numerical Techniques in Engineering Structures
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Tribology, Nano mechanics and MEMS
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-regular fa-object-group pr-3"></i>Fracture and Failure Mechanics
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/700E4D82-4F55-4EE1-9B6CA0C194C84956/182DC208-2737-40B8-A720EEBF9FA9B88F/WebsiteJpg_XL-FMTEC_Main%20Visual_Red_Website.jpg" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 4 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Manufacturing Technologies</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Advanced finishing Processes
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Metal Joining Processes
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Metal Forming Processes
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Powder Metallurgy
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Additive Manufacturing
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Modelling, Simulation and Optimisation of manufacturing processes
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-industry pr-3"></i>Quality & Reliability in manufacturing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230415/pngtree-ai-robot-innovation-high-tech-ppt-robot-template-background-image-image_2207016.jpg" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 5 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Robotics</h3>
                            <ul className='text-left sm:mt-4'>
                                <li>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Reconfigurable manipulator
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Human Centric Robotics
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Soft Robotics
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Industrial Robotics

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Agriculture and Field Robotics
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Bionic robotics, autonomous and evolutionary robotics
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Robotics and Mechanical Engineering
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-robot pr-3"></i>Mobile and Autonomous Systems
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://www.ecpi.edu/sites/default/files/Mechatronics%20Tech%20Dec%2028.png" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 6 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Mechatronics and Automation</h3>
                            <ul className='text-left sm:mt-20'>
                                <li>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Mechatronic system Design

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Industrial Control

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Manufacturing mechatronics

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Real Time Supervisory Control
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Micro and Nano Mechatronics

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Industry 4.0 and 5.0 technologies and its applications
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-lightbulb pr-3"></i>Information Technology in Automation

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://nenews.in/wp-content/uploads/2022/12/Railway-Coach-Factory.jpg" alt="background" className="object-cover w-full h-full opacity-15 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 7 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Railway Vehicle Dynamics</h3>
                            <ul className='text-left sm:mt-24'>
                                <li>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-train pr-3"></i>Real-time monitoring of rail coaches

                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-train pr-3"></i>Automation in railway coaches


                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-train pr-3"></i>Sustainable and green materials


                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-train pr-3"></i>Sensors and actuators for railway coach
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className=' sm:text-2xl text-xl'>
                                        <i className="fa-solid fa-train pr-3"></i>Risk assessment and mitigation strategies


                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </Slider>

            </div>
            <div className="flex justify-center items-center mt-10 pt-2">
                <a href="/callforpapers" className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl inline-block">
                    View All Tracks
                </a>
            </div>

        </div>
    );
}
