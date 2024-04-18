export function Registration_home() {
    return (
        <div className=" mx-auto flex flex-col">
            <div className=" px-5 py-5 mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                            REGISTRATION
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="lg:w-5/6 mx-auto">
                <div className="rounded-lg overflow-hidden">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-2 sm:px-6 py-3">
                                        CATEGORY
                                    </th>
                                    <th scope="col" className="px-2 sm:px-6 py-3">
                                        Indian Participants
                                    </th>
                                    <th scope="col" className="px-2 sm:px-6 py-3">
                                        Foreign Participants
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b bg-gray-800 border-gray-700">
                                    <th scope="row" className="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Students
                                    </th>
                                    <td className="px-2 sm:px-6 py-4">
                                        Rs. 2,500/-
                                    </td>
                                    <td className="px-2 sm:px-6 py-4">
                                        USD 150
                                    </td>
                                </tr>
                                <tr className="border-b bg-gray-800 border-gray-700">
                                    <th scope="row" className="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Faculty/ Academia
                                    </th>
                                    <td className="px-2 sm:px-6 py-4">
                                        Rs. 5,000/-
                                    </td>
                                    <td className="px-2 sm:px-6 py-4">
                                        USD 250
                                    </td>
                                </tr>
                                <tr className="bg-gray-800 border-gray-700">
                                    <th scope="row" className="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Industry/R&D Organization
                                    </th>
                                    <td className="px-2 sm:px-6 py-4">
                                        Rs. 10,000/-
                                    </td>
                                    <td className="px-2 sm:px-6 py-4">
                                        USD 450
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-10" href="/registration" target="_blank">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}
