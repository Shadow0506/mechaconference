import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Impdates_main() {

    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#E9FFFF' }}>
            <div className="container  mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 ">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                            IMPORTANT DATES
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen lg:px-14">
                <div className="min-h-screen flex justify-center lg:px-14">
                    <div className="w-full mx-auto lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex flex-row w-full py-0">
                                <div className="w-2/5 px-1 py-10">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{ borderWidth: '1px', borderColor: '#f8d0c2' }}>
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="lg:text-2xl text-xl">
                                            Full Paper Submission
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="w-1/5 flex justify-center py-0 ">
                                    <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: '#f8d0c2' }}>
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{ borderWidth: '3px', borderColor: '#f8d0c2' }}>
                                            <div>31st</div>
                                            <div>June</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/5 px-2  "></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3.5 }}
                        >
                            <div className="flex flex-row w-full py-0">
                                <div className="w-2/5 px-2 py-2"></div>
                                <div className="w-1/5 flex justify-center py-0">
                                    <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: '#f8d0c2' }}>
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{ borderWidth: '3px', borderColor: '#f8d0c2' }}>
                                            <div>30th</div>
                                            <div>July</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/5 px-2 py-10 ">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{ borderWidth: '1px', borderColor: '#f8d0c2' }}>
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="lg:text-2xl text-xl">
                                            Notification of Acceptance
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 4 }}
                        >
                            <div className="flex flex-row w-full py-0">
                                <div className="w-2/5 px-2 py-10">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{ borderWidth: '1px', borderColor: '#f8d0c2' }}>
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="lg:text-2xl text-xl">
                                            Submission of Camera-Ready Paper
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="w-1/5 flex justify-center py-0">
                                    <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: '#f8d0c2' }}>
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{ borderWidth: '3px', borderColor: '#f8d0c2' }}>
                                            <div>30th</div>
                                            <div>September</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/5 px-2 py-10 "></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 4.5 }}
                        >
                            <div className="flex flex-row w-full py-0">
                                <div className="w-2/5 px-2 py-2"></div>
                                <div className="w-1/5 flex justify-center py-0">
                                    <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: '#f8d0c2' }}>
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full leading-none text-center z-10 bg-white font-thick" style={{ borderWidth: '3px', borderColor: '#f8d0c2' }}>
                                            <div>15th</div>
                                            <div>August</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/5 px-2 py-10 ">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{ borderWidth: '1px', borderColor: '#f8d0c2' }}>
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="lg:text-2xl text-xl">
                                            Registration Commences on
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 4 }}
                        >
                            <div className="flex flex-row w-full py-0">
                                <div className="w-2/5 px-2 py-10">
                                    <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{ borderWidth: '1px', borderColor: '#f8d0c2' }}>
                                        <div className="text-gray-600 mb-2 flex justify-between">
                                            <div className="lg:text-2xl text-xl">
                                            Last Date of Registration
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="w-1/5 flex justify-center py-0">
                                    <div className="relative flex h-full w-1 items-center justify-center" style={{ backgroundColor: '#f8d0c2' }}>
                                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{ borderWidth: '3px', borderColor: '#f8d0c2' }}>
                                            <div>30th</div>
                                            <div>August</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/5 px-2 py-10 "></div>
                            </div>
                        </motion.div>
                        <div className="flex justify-center mt-4 space-x-4 flex-wrap">
                            <button onClick={() => { navigate('/callforpapers') }} className="inline-block px-3 py-2 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
                                Call for Papers
                            </button>
                            <button onClick={() => { navigate('/impdates') }} className="inline-block px-3 py-2 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
                                View All Dates
                            </button>
                            <button onClick={() => { navigate('/callforpapers') }} className="inline-block px-3 py-2 mb-2 ml-4 mr-4 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white">
                                Submit Your Paper
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}