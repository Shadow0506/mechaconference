import { useNavigate } from "react-router-dom";
import inderdeep from './inderdeep.jpeg'
export function Committees_home() {
    const navigate = useNavigate();

    return (
        <div>

            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
                        Chief Patron
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>
                
                <div className="flex flex-col items-center gap-8">
                    {/* Chief Patron (Centered) */}
                    
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md lg:w-2/3 w-full transition duration-300 transform hover:shadow-xl ">
                        <img alt="Chief Patron" className="lg:w-48 lg:h-48 w-48 h-48 rounded-full mb-4 object-cover object-center shadow-2xl" src="https://pec.ac.in/sites/default/files/styles/event/public/headline/images/Director_PEC-1.JPG?itok=6elrGkaX" />
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Professor Baldev Setia</h2>
                            <h3 className="text-gray-500 mb-2">Director, PEC Chandigarh</h3>
                        </div>
                    </div>
                    {/* Committee Members (In a single column) */}
                </div>

            </div>
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-5 text-gray-900">
                        Chairman
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {/* Chief Patron (Centered) */}
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md lg:w-2/3 w-full transition duration-300 transform hover:shadow-xl">
                        <img alt="Chief Patron" className="lg:w-48 lg:h-48 w-48 h-48 rounded-full mb-4 object-cover object-center shadow-2xl" src="https://pec.ac.in/sites/default/files/faculty_profile/images/sanjeev_1.jpg" />
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Professor Sanjeev Kumar</h2>
                            <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering, PEC Chandigarh</h3>
                        </div>
                    </div>
                    {/* Committee Members (In a single column) */}
                </div>

            </div>
            <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-5 text-gray-900">
                    Co-Chairman
                </h1>
                <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
            </div>
            <div className="flex flex-wrap justify-center p-10">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 mb-4 w-full md:w-auto lg:w-1/2 xl:w-1/3 transform hover:shadow-xl lg:mr-4">
                    <img alt={`Committee Member `} className="w-32 h-32 rounded-full mb-4 object-cover object-center shadow-2xl" src='https://pec.ac.in/sites/default/files/faculty_profile/images/parminderjit.jpg' />
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">Professor Perminderjit Singh</h2>
                        <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering PEC, CHD</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 mb-4 w-full md:w-auto lg:w-1/2 xl:w-1/3 transform hover:shadow-xl lg:ml-4">
                    <img alt={`Committee Member `} className="w-32 h-32 rounded-full mb-4 object-cover object-center shadow-2xl" src={inderdeep} />
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">Professor Inderdeep Singh</h2>
                        <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering, IIT Roorkee</h3>
                    </div>
                </div>
            </div>


            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-7 text-gray-900">
                            Organizing Committee
                        </h1>
                        <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex flex-wrap -m-2">

                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/IMG_20190516_153729-01.jpeg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sarbjit Singh</h2>
                                    <p className="leading-relaxed text-base">Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=McQfhR4AAAAJ&citpid=7" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. M.P Garg</h2>
                                    <p className="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/Kamal%20pic.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Kamal Kumar</h2>
                                    <p className="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqEO63Z1Dhk65vsk7FKyGMEIJSN4tlngbUjQLLCjCA&s" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Viveksheel Rajput</h2>
                                    <p className="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/alakesh.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Alakesh Manna</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/sanjay.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjay Kumar Mangal</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/SSAMIR.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sushant Samir</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/drprajapati.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. D R Prajapati</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/S_K_Soni.jpg?itok=7AFWan85" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. S K Soni</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/rajesh_kanda.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Kanda</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/rakesh_0.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Dang</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://media.licdn.com/dms/image/C4D03AQE42i-386BrMQ/profile-displayphoto-shrink_400_400/0/1662231484166?e=1720051200&v=beta&t=LZoFq4P-kupYb6l0Q9hdKxj6d2nm9r1qIt_A2z1xp_4" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Kamal Kumar</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/MPGARG.jpg?itok=Kcauczl8" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. M.P Garg</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/sandeep.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sandeep Selodkar</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/tejbir.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Tejbir Kaur</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/Lokesh.jpg?itok=hlQ2hePd" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Lokesh</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/achitanand.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Achitanand Dubey</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/ankit.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Ankit Yadav</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/GURJEET%20SINGH-3.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Gurjeet Singh</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/images/chander_kant.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Chanderkant Susheel</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/Photograph.jpg?itok=sOF47TEy" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Harshit Khandewal</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://media.licdn.com/dms/image/C5103AQEr_CaCXbsmEg/profile-displayphoto-shrink_400_400/0/1579867642090?e=1720051200&v=beta&t=iXpG4niX5zGgSvaeBsMkh_MkCR5tKm62-iNoc8tIqoo" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Nitin Dixit</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="flex justify-center items-center mt-10 pt-2">
                <a href="/committees" className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl inline-block mb-5">
                    View All Committees
                   
                </a>
            </div>
        </div>
    );
}
