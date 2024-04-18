import { motion } from "framer-motion";
export function Impdates_main() {
    return (
        <div style={{backgroundColor: '#E9FFFF'}}>

            <div class="min-h-screen">

                <div class="min-h-screen flex justify-center">
                    <div class="w-2/3 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div class="flex flex-row w-full py-0">

                                <div class="w-2/5 px-1 py-10">
                                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{borderWidth: '1px', borderColor: '#f8d0c2'}}>
                                        <div class="text-gray-600 mb-2 flex justify-between">
                                            <div class="font-bold">
                                                Event
                                            </div>

                                        </div>
                                        <div class="text-gray-600">
                                            About Event
                                        </div>
                                    </div>

                                </div>
                                <div class="w-1/5  flex justify-center py-0">
                                    <div class="relative flex h-full w-1 items-center justify-center" style={{backgroundColor: '#f8d0c2'}}>
                                        <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{borderWidth: '3px', borderColor: '#f8d0c2'}}>
                                            <div>20</div>
                                            <div>September</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-2/5 px-2  ">

                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3.5 }}
                        >
                            <div class="flex flex-row w-full py-0">


                                <div class="w-2/5 px-2 py-2">

                                </div>
                                <div class="w-1/5  flex justify-center py-0">
                                    <div class="relative flex h-full w-1 items-center justify-center" style={{backgroundColor: '#f8d0c2'}}>
                                        <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{borderWidth: '3px', borderColor: '#f8d0c2'}}>
                                            <div>Date</div>
                                            <div>Month</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{borderWidth: '1px', borderColor: '#f8d0c2'}}>
                                        <div class="text-gray-600 mb-2 flex justify-between">
                                            <div class="font-bold">
                                                Event
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            About Event
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
                            <div class="flex flex-row w-full py-0">


                                <div class="w-2/5 px-2 py-10">
                                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{borderWidth: '1px', borderColor: '#f8d0c2'}}>
                                        <div class="text-gray-600 mb-2 flex justify-between">
                                            <div class="font-bold">
                                                Event
                                            </div>

                                        </div>
                                        <div class="text-gray-600">
                                            about event
                                        </div>
                                    </div>

                                </div>
                                <div class="w-1/5  flex justify-center py-0">
                                    <div class="relative flex h-full w-1 items-center justify-center" style={{backgroundColor: '#f8d0c2'}}>
                                        <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 leading-none text-center z-10 bg-white font-thick" style={{borderWidth: '3px', borderColor: '#f8d0c2'}}>
                                            <div>Date</div>
                                            <div>Month</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-2/5 px-2 py-10 ">

                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 4.5 }}
                        >
                            <div class="flex flex-row w-full py-0">


                                <div class="w-2/5 px-2 py-2">

                                </div>
                                <div class="w-1/5  flex justify-center py-0">
                                    <div class="relative flex h-full w-1 items-center justify-center" style={{backgroundColor: '#f8d0c2'}}>
                                        <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full leading-none text-center z-10 bg-white font-thick" style={{borderWidth: '3px', borderColor: '#f8d0c2'}}>
                                            <div>Date</div>
                                            <div>Month</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-2/5 px-2 py-10 ">
                                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5" style={{borderWidth: '1px', borderColor: '#f8d0c2'}}>
                                        <div class="text-gray-600 mb-2 flex justify-between">
                                            <div class="font-bold">
                                                Event
                                            </div>
                                        </div>
                                        <div class="text-gray-600">
                                            About Event
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                </div>

            </div>
        </div>
    )
}
