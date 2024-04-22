import { useNavigate } from "react-router-dom"

export function Committees_home(){
    const navigate = useNavigate();
    return(
        <div>
           <div className="container px-5 py-5 mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                            COMMITTEES
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col text-center w-full md:w-1/2 mx-auto">
                <div className="h-full flex flex-col items-center text-center">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-65 object-cover object-center mb-4" src="https://pec.ac.in/sites/default/files/styles/event/public/headline/images/Director_PEC-1.JPG?itok=6elrGkaX" />
                    <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900">Prof. Baldev Setia</h2>
                        <h3 className="text-gray-500 mb-3">Director, PEC, CHD</h3>
                        <p className="mb-4">Chief Patron</p>
                    </div>
                </div>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 mx-auto">
                    <div className="flex flex-wrap -m-3">

                        <div className="p-4 lg:w-1/3 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Prof. Sanjeev Kumar</h2>
                                    <h3 className="text-gray-500 mb-3">Department of Mechanical Engineering PEC, CHD</h3>
                                    <p className="mb-4">Chairman</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Prof. Perminderjit Singh</h2>
                                    <h3 className="text-gray-500 mb-3">Department of Mechanical Engineering PEC, CHD</h3>
                                    <p className="mb-4">Co-Chairman</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">IITR PROF</h2>
                                    <h3 className="text-gray-500 mb-3">*****</h3>
                                    <p className="mb-4">*******</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-10" onClick={()=>{navigate('/committees')}} target="_blank">View All
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
            </div>
    )
}