import { useNavigate } from "react-router-dom";

export function Committees_home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-gray-900">
                        COMMITTEES
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>
                <div className="flex flex-col items-center gap-8">
                    {/* Chief Patron (Centered) */}
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md lg:w-2/3 w-full transition duration-300 transform hover:shadow-xl">
                        <img alt="Chief Patron" className="lg:w-48 lg:h-48 w-48 h-48 rounded-full mb-4 object-cover object-center" src="https://pec.ac.in/sites/default/files/styles/event/public/headline/images/Director_PEC-1.JPG?itok=6elrGkaX" />
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Prof. Baldev Setia</h2>
                            <h3 className="text-gray-500 mb-2">Director, PEC, CHD</h3>
                            <p className="text-gray-600">Chief Patron</p>
                        </div>
                    </div>
                    {/* Committee Members (In a single column) */}
                    <div className="lg:flex lg:gap-8 ">
                       
                            <div className="lg:flex lg:flex-col lg:items-center lg:bg-white lg:rounded-lg lg:p-6 lg:shadow-md flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-full mt-6 transition duration-300 transform hover:shadow-xl">
                                <img alt={`Committee Member `} className="w-32 h-32 rounded-full mb-4 object-cover object-center" src='https://pec.ac.in/sites/default/files/faculty_profile/images/sanjeev_1.jpg' />
                                <div className="text-center">
                                    <h2 className="text-lg font-medium text-gray-900">Prof. Sanjeev Kumar</h2>
                                    <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering PEC, CHD</h3>
                                    <p className="text-gray-600">Chairman</p>
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-col lg:items-center lg:bg-white lg:rounded-lg lg:p-6 lg:shadow-md flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-full mt-6 transition duration-300 transform hover:shadow-xl">
                                <img alt={`Committee Member `} className="w-32 h-32 rounded-full mb-4 object-cover object-center" src='https://pec.ac.in/sites/default/files/faculty_profile/images/parminderjit.jpg' />
                                <div className="text-center">
                                    <h2 className="text-lg font-medium text-gray-900">Prof. Perminderjit Singh</h2>
                                    <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering PEC, CHD</h3>
                                    <p className="text-gray-600">Co-Chairman</p>
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-col lg:items-center lg:bg-white lg:rounded-lg lg:p-6 lg:shadow-md flex flex-col items-center bg-white rounded-lg p-6 shadow-md w-full mt-6 transition duration-300 transform hover:shadow-xl">
                                <img alt={`Committee Member `} className="w-32 h-32 rounded-full mb-4 object-cover object-center" src={`https://dummyimage.com/200x200`} />
                                <div className="text-center">
                                    <h2 className="text-lg font-medium text-gray-900">IITR Prof</h2>
                                    <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering IIT, Roorkee</h3>
                                    <p className="text-gray-600">Co-Chairman</p>
                                </div>
                            </div>
                     
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={() => navigate('/committees')} className="text-indigo-500 inline-flex items-center">
                    View All
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
