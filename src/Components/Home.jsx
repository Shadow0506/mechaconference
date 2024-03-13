import Typewriter from "typewriter-effect";
import { Impdates } from './Impdates'
export function Home() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
                            International Conference on Design and Manufacturing Technologies
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("2024")
                                        .pauseFor(1500)
                                        .start();
                                }}
                            />
                        </h1>
                        <p className="text-2xl italic lg:w-1/2 w-full leading-relaxed text-cyan-700 mt-5">Design, Develop and Manufacture</p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            {/* space for icdmt poster */}
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">ICDMT</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">International Conference on Design and Manufacturing Technologies</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">The goal of the ‘International Conference on Design and Manufacturing Technologies” (ICDMT-2024) scheduled for 08th -10th Nov 2024 is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing with a focus on advanced materials to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view to product design, process design and analysis as well as to create, and manufacture goods. </p>
                                {/* <a className="text-indigo-500 inline-flex items-center">Learn More */}
                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg> */}
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Impdates/>
        </div>
    )
}
