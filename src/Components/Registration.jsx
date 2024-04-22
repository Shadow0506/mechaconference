import Typewriter from "typewriter-effect"
export function Registration() {
    return (
        <div style={{ backgroundColor: '#E9FFFF' }}>
            <div className=" mx-auto flex flex-col">
            <div className="px-5 py-5 mx-auto flex flex-col items-center justify-center">
                        <div className="flex flex-wrap w-full mb-4">
                            <div className="lg:w-full lg:mb-0 pt-10 text-center">
                                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    <Typewriter onInit={(typewriter) => {
                                        typewriter
                                            .typeString("REGISTRATION")
                                            .pauseFor(1500)
                                            .start();
                                    }} />
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
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
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="text-lg mb-4">Registration can be done online using the link given below, and the registration fee can also be paid online to the below account:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="text-left">
                                    <p className="text-lg mb-4"><span className="font-bold">Beneficiary Name:</span> Director Punjab Engineering College: Registration/Applications A/C</p>
                                    <p className="text-lg mb-4"><span className="font-bold">Account No:</span> 39083056639</p>
                                    <p className="text-lg mb-4"><span className="font-bold">IFSC Code:</span> SBIN0002452</p>
                                </div>
                                <div className="text-left">
                                    <p className="text-lg mb-4"><span className="font-bold">STATE BANK OF INDIA</span></p>
                                    <p className="text-lg mb-4"><span className="font-bold">Branch:</span> SBI, PEC, Sector 12, Chandigarh</p>
                                    <p className="text-lg mb-4"><span className="font-bold">Address:</span> PEC Market, Sector 12, Chandigarh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 space-x-4 flex-wrap">
                            
                            <button onClick={() => { navigate('/impdates') }} className="inline-block px-10 py-4 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
                                Register
                            </button>
                            
                        </div>
                </div>
            </div>
        </div>
    )
}
