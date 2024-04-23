import { useNavigate } from "react-router-dom";

export function Registration_home() {
    const navigate = useNavigate();
    return (
        <div className="mx-auto flex flex-col text-gray-900">
            <div className="px-5 py-5 mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-6xl text-3xl font-medium title-font mb-4">
                            REGISTRATION
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/3 w-full mr-3 ml-2 lg:mx-auto">
                <div className="rounded-lg overflow-hidden">
                    <div className="relative overflow-x-auto">
                        <table className="w-full lg:text-2xl text-xs text-left rtl:text-right text-gray-500">
                            <thead className="text-sm uppercase bg-gray-700 text-gray-400">
                                <tr>
                                    <th scope="col" className="px-2 sm:px-3 py-3"> {/* Adjusted padding */}
                                        CATEGORY
                                    </th>
                                    <th scope="col" className="px-2 sm:px-3 py-3"> {/* Adjusted padding */}
                                        Indian Participants
                                    </th>
                                    <th scope="col" className="px-2 sm:px-3 py-3"> {/* Adjusted padding */}
                                        Foreign Participants
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b bg-gray-800 border-gray-700">
                                    <th scope="row" className="px-2 sm:px-3 py-4 font-medium whitespace-nowrap"> {/* Adjusted padding */}
                                        Students
                                    </th>
                                    <td className="px-2 sm:px-3 py-4">
                                        Rs. 2,500/-
                                    </td>
                                    <td className="px-2 sm:px-3 py-4">
                                        USD 150
                                    </td>
                                </tr>
                                <tr className="border-b bg-gray-800 border-gray-700">
                                    <th scope="row" className="px-2 sm:px-3 py-4 font-medium whitespace-nowrap"> {/* Adjusted padding */}
                                        Faculty/ Academia
                                    </th>
                                    <td className="px-2 sm:px-3 py-4">
                                        Rs. 5,000/-
                                    </td>
                                    <td className="px-2 sm:px-3 py-4">
                                        USD 250
                                    </td>
                                </tr>
                                <tr className="bg-gray-800 border-gray-700">
                                    <th scope="row" className="px-2 sm:px-3 py-4 font-medium whitespace-nowrap"> {/* Adjusted padding */}
                                        Industry/R&D Organization
                                    </th>
                                    <td className="px-2 sm:px-3 py-4">
                                        Rs. 10,000/-
                                    </td>
                                    <td className="px-2 sm:px-3 py-4">
                                        USD 450
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-10" onClick={() => { navigate('/registration') }} target="_blank">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}
