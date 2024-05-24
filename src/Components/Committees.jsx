import Typewriter from "typewriter-effect";
import { Table } from "flowbite-react";
import { faculty } from "./advisory.json";
import nitin from './nitindixit.jpeg'
import { Committees_home } from "./HomeComponents/Committees_home";
import { New_committee } from "./HomeComponents/New_committee";
export function Committees() {
    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <div className="pt-10">

                <Committees_home />
                <New_committee />
            </div>
            
            <section className="text-gray-600 body-font ">
                <div className="container  mx-auto">
                    <div className="text-center mb-10 pt-10">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4  text-gray-900">
                            International and National Advisory Committee
                        </h1>
                        <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                    </div>
                    <div >


                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    {faculty.map((item, index) => (
                                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                                <div className="flex-grow">
                                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{item.name}</h2>
                                                    <p className="leading-relaxed text-lg">{item.designation}</p>
                                                    <p className="leading-relaxed text-lg">{item.institute}</p>
                                                </div>
                                            </div>
                                        </div>


                                    ))}
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </section>
            

        </div>
    )
}
