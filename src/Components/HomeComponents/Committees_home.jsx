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
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAL0AyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAIDBAUHAf/EAD8QAAIBAwMBBQUEBwgCAwAAAAECAwAEEQUSITEGE0FRYSJxgZGxFDJSoQcjMzRCc8EVFkNictHh8CSyJYKS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACIRAAICAgICAwEBAAAAAAAAAAABAhEDIRIxBBMiQVEyBf/aAAwDAQACEQMRAD8A53Y/uUH8tfpViq9j+5Qfy1+lWKaNQqVKlULFSpUqhBUqVKoQVKlU9laT31wsFsm92/Kqsi2QCkSKMLfsROUzPKQ34VFVLzsldRcw5f8Aykc0PtRfBg3XlXLvS7y0YLLC2T5VTYMvUEfCjUkyqYqVI5pVZQqVKlUIKlSpVCCpUqVQgqVKlUIRz/u8n+k/SlSn/d5P9J+lKqKI7H9yg/lj6VYqvYfuUH8sfSrFQtCpUqVSi7FSpUqlEFSpUqlEFXRP0d6Wsdi17Io3ysdhP4Rx9a54vJAAySfD310vs5r+m2lpBYysySRoqkEePjQT6DgrYYqi02QR/hFQzX1rDC0zzARqMk+lZsnafRywQXabz4UriFTLl3a204BaJSR6VgaxoVjdRltirIB1ArZF5FdRBraQMp8RUFzzCxXk4odph1+nIbhO7mdB/CSBn31HVrVFK30o8SxqqvLAeZrVHYiSqQqVXrq0jiiV0Zjzg5+NUypoqKaaG0qdinpGG65qURK+iKlUpi9fyr3uDVB+qRDSq3Baq7kSSbRwAfXNTGxhA4kfdwApGOeP96rkgHFrsyp/3eT/AEn6UqvXNlGLWchiSsTEYYc8ClUtA0Z1h+5Qfy1+lT1BY/uUH8tfpU9QiFSz19KVEHZ7s2b+e3lvmEdtIGIOcMQB8quwkm+gf/70pc10C17PaNc2U3dW250dlWQSnJA8enwrE1vsubMF9PeWdFwGBTOCfDIquSGSxyj2DVKvWVlOCCDnGCPnXlXYuy5okRm1e0jVc/rVyPQGt2XTtR1DUn3xpFKRlV/FS/R/p5u9UkuD+zhXr6npXRc2NnJvkKI4HJPWlTlsfhdIHNS0G8GjoomZ7lE9tPBvSgyHSb1Zlae1YgtwC2Oa6wbuJ071JQ6DkleafNYWl9GryIG3chgaWnTobzf2gE07UJLR0hmtjb84HXa1Fca74gy5AYVbGmW0S7QmV8mOaZKQvshcKB4VGrZJSUujk/aOEwaxcJ5N/SqdhbvdXcUKD2nfAoovdGbVb+5vJJO6t+8IVguS2OOKsdm+zZHaFO6MqRxqzN364KkY8vfWjFUnQqWJqVvozNQ06YACRWBLZC/P/vwrPfT3BxyPU11K40+ATuk4LMq7kKjr6fmazpLOCZlkhjQMQRs28fStyxxZsiscu0c7WwY5O7gGrEGmOysyngYo3OnQXERdI0Xu8Fhimpp0QgMsSgIuCQFNF6Y0EoYl0B/9kyHABXJGfGpoNGklHL4PQcHk0YfZI+7E0e0YKrjnxqx3QjVJGKADBUYPOQfWq9ESWgLs9HmErkKrcgKScc1cm0iWGQhl7wgcDPOR40YR2/8A4nfhMbZPZIHXPxqrrJlh0hLqCLdIW2s23nFD6IMROKkwP1TRZksXkAIzAx3A8420qIU+03eh38tzARsgZUbbjjBpUuWGKdC3jRyyw/coP5Y+lWKgsP3KD+WPpU9ZkZEKuqWSCHTLCxRROjoOTjG3HtflXK6Ouylxb31jDC9y8MtiO8C9BIMnx92OKpmjA0mFFvb2sPfLawoo6MNvGfKs7SLOSysZI+8MbuWJxzsJ6Yr0sl/NKy3E0EaLjegwHGPM1Tee6huLNz7dsTslVTlifOqaNvEGe1umyW08d3JKjNcj2ggxyMc0P0Vdvp4XubWKEjKIzMAckZPShWiObOuQa9gbxLOxvGZgo7wEn0xWVr+rDUL/AL20Eu0DBY+NZNlcNCske4hZBgqD1OOKJYLXT9Gt4vt1s1y8qht27AX0oGtj8V1oxdL1BrS5DSd40figbrXQdD1qKWHbA5KggYPhWNa6TpGuRNJHavbHp7J8aynK6IbuCGYvIHwM9aCl9BvumdDe+jP8QrN1TVreC3kYyjftOB5mgEapPIuTIx+NQfaHuJEAYkk+NSi4wjYaS2bTadbPbzNFLAobHmT1zRToCd7m5I/WbcZ8DjrQrY3V5NHa2SwoZZPZDk42jqSfcPrRrDH9kKIPuCMDApuGFIvLLXEZuVryQMgLFgQc9OKr20EUbbTLu3Fsgn7nPWp1gb7csykcgdDz0qRLbbOTsBAzjPhk1qTpClKilbhBbXKhkxtHPw602xt4mtXY87XYFc+HnXkcMQtrsKOCyKQfcM1d06KIQyAYBbOfP3UTmE5FF7ULpbSttyxXp/DzXrWqCxI4Z+GLEeGKtvEUsGjUgq52jH9ae9s/cNGcnLgAjpjFT2MnMTRH7LDFGmAWHtAeHHNJ4SY44JCNgfO7zqYQP9ljULsK8Dnwqpd280k8LJ0TOapStgplLXrs/wBh3sKjbGI5ASBj+E4pUteQDTbsx8slvKWU+40qnxC+Jx7StIvp7C2aG3dw0akY8QQKnk0fUozhrOXJHGBmjTsrHu0HTRKmR9nh2OeCvsAn4Zrfi3d57Z52iuRLyWnVGXicystC1C5uI4mt5Ig2SXdcAAeNGMVvZ6RbIYLdAyftDjcfXn41vXLHusiLdHtO8Z5xjpQ5aK8EP6rIWaUhYmOcDJ8/QUzm5mzxoXssSyWszANOzBgWEf8ACuPdQ/eapd2MjwWluyOxKk53AY44+NaYvJIJ5oY7QoF4Z8YwueuK2NJVSHLISThvaHNW8nFGjO5Rho5vJY3zMWa2nJOSTsJzUYs7krnuJD7kNdOvH7uHvXz3arwu4jcxPHSoLd3nc5jAYN7DrkBuM8+nhmgXkaujmOIJaVoYk0i9uroFJuFhDjGSOTWnpmu2qWaw38Ucjx/iUUQ6kHeNAjqAvtBdufa5PywKFtU7PNd3jyWxCFgXI/hVePGmQfNm70uOLkjQuO1dlFFttIEQ/wCUUF3l091cvKx9pjkmo57eWBijqQwOOKYEY9BTuNGOUpNnodsYBog7HWLXWoLLIB3cYzz4msq00+SeQIOp8qOtCs/skQQ4BoZSS0Ox45LbCLRrOKK4eUkb8bR6A9f6VvJCxAjGAu3gHmhiwm26wpU5XujuB6dR/wA0TQzrIzndhQeDTUnQqc22eGDupVK469TU6OrhgBjHJJqGaWPglgBk5z54qBJ4zO8W5ciPIX8XrV0wKb7IpIz9mm6bi4Of/sOatQxjusNgNjnHXNY1xdhrF2i9nddIgGeSocA1pwTruYRncoUE8dOB/vRSsZK6HNGBblRzg9fXzqZQwzj7v14qJZMxDgHJGRnivEuFUShmAIzx5cVWwdlxHRIVzzxTe6/U53DOarlRsIckgcj2qlNwMhccEf0qtg8TN7QqBpN+4GXNu4zjw2mva812f/4e6UZBa3k8P8jUqvYT5AP2am7vs1YvKh3raxhJCpO0FRjAzziiC1yRGxb+EZJHUUNdi7mO77OQW6I8LRxxpvLZDsQOn50U2y+2EUYXYAAfCuPk1Ir6J3w0MiheccH1rEmtLpLdFu1MzJzlBjn0rb7skMT97Ocim3AwEAz94Y59aZGdIZiyuANafZ3iOIJ4mG9st3z/AHhW0gWG/wBqZ2mIdfQ/7VYvEZUEoTDR88eIpotpZJ4pUzja2c0TTnpF5M/LspXW5oRCgYsyhl2nGCD5/KoYp90Qk3A3IG0IreyDjnwrRl0mQ3MM73EqhE2mNTwasR26xDC48D0p2LxG1syT8iK6IRbbm3SDJOMVldpVTTtLk7gFZJW3MwPlz/tREibfWsHtA0F1qcOmTSAGaJlHvbp/St0MMY9AR8rI/jege1SzSbbKAAJVDKfh0rGhsm70IFJyccUaJo87aYtrJtM0Q2gjzFY6adfW8oLQtx5ClWmqZ28KhKKZo6Xp6W6qAMNjk1qsFijy2M1Wsobhgrd2w99O1ENFbb5CfQedZ1FymKzzUVssdnY2d7m6Y5DttX3D/mthCySEoeteaPYiz0+GGTqFBY+vjU6R291lkbIBxwa6CaOI8krsxtbh1C6TFtgpg7kzj2vSsd9durPUvtF1D3TLC0SqBjGelGyKFAVFwo4qG5sorhNk8SOvqKOGSK7QazSoAYteeLT4rZ490kMyyI56MAc4NWYu1ElvcSmIl43gCqDxtbB/qa1dR7I2swL2rNDIfAcqaG73s3qdpk913qfjj5/KtMfVIJeQy3D2kvUtIkD7nSTJJ6FfKrv96WaW4Zo1KOhCL4ZzjPyoRO5XwwIHkePhivQ+MenFM9MAvfIMrHX5ZXggI5eT22Phk+Hwos3E4Oa5loUgOrWu9xgtnk+ldLtGWSKMZwxzgedZc0Ip6NOKVxB7tPdvDpt24OSImHzUilUXbRSul3nGBsIPyNKoopm5cKKfY+S2/u1YDKlo7aNmCkcHaOffRBbjLhiPvRgjxzxQNo1/b2GhWUUjxqZbSPfmEtuBUYq3bdoZIbsQrJAI1bbvI28ema4M4W7MHHQX211bG9Nt3o7wjO0nwqtqd9b2skSSsRk5XA9fHy8KypLuEg3atA0gGO8yOmD60ya6t7q2Wa7u4nij4OFzsPlVcSKJqafqUWpsyqGTbL3RU8+Gc/Wt9IlC7QMChnswLKWYzWLI237wCkf1opTPpW7x48VZkzvdDTHkYJNU3jYSbd3FaIDelRtHlxwOa1Jmaiuo/CpFco7W3ch7UXMiOd0LgIR4FcV1+RxGrH8IJOPdXNLeyivZbi5nXJkkLZFWo8goyUGa+gdr4blgupRiC5I++vST4edbOoalp4e3QXcYec4jGfvHp9fOhW506Fl7kqQjHgjqp881Xm0W0aPLvskA/GTk1T8dNj4eXxOim1hsbNrq/uFihQZJzx86F7XUrfX9UhW23dyr52kc4HnWK2j3dxbpb3Oozywp92IucCt/sRocdjd3VzG5YFQgDefjVqHDYOTM8ugwOHGMcVXitYrVZGXODyRVkAH091RT/tEjJBzyaAUMiOI1ypyealO78Jr07R/FTiy/iqEGc9MceVNZSd3sj507K7c5FRNIu4jPhmrIZ2q6fBd28kbwxhnHDbRkHzrl8qvE7oww6nBB99daZx48++hFNLjn7St9pCmNZC/H8XiAa0RzOC2OxpMBZortbsqYZu+XnaFOQPOjjXtXudG063tbZXM/cgmduNhPUe+jJI4+87zuk3HjO0Zx765925123mv2tYYyzwAoz54rG8jbNMJULRr+5j07UhrEgmhuLR2jeQ7iGxxSoXvbuSPTljEuSYyQPIeVKmqQXJfpt6VFBdaJp6yRhmW3QZx/lqxHZW6OTJaoSPHpVjsjbbrDSgyl0mtlOMdMKKmZGYoSp9piCMVyW2aE4NDEeGGDuTB+rbgDBwajJijgkthaRiOQqxBBG7Hj1q5dPjRbYSMGZZ39gdQPOrGprHcJZd3Ju22uXwOQ3lUQN6LXZCG2hjma3t+65APJ5olgfcuSD1NY/ZtCumiQ/wCIc1r2pJQ+hNdPGqgczM7mTh/Q15n2x14pA+6kD7fXwoqFlTVn7rS7t14Iibn4UG6am21X50U9pm7rQ7s56oB+YoZtXAt1UfhH0p2NaFzPZ2bKD2uWx+VRpaBT+sbfubOD4CnMTIYiD0aldM4ZWjz4/GmJAFuNdkZAPA86I9FhEVgrYwXJbNC9u3fqm0kd4cDPnRpEvcoiDkKABik5PwZC+yUKVGfDFRxrvkaTAweB7qVxJiPC9TwKaPZCgGlIYyZv9NeceX5Uw5/EaaGb8dSih54GOKrZyST4nFezMyIzZ5AqIB+PaP8AzRpFWesBQXrt3/ZnaAXUu50jQSBVOCScj40ZMSOtYWq6fBe6nA8yBkSJ9w8/+5qprQ7C9g5qvb29uYGhsYBbrjmTO5qDySzFmOSeTnxroXaS3tNL7KytaQqkksgQnx6nNc8FISNBHcfsJD/kP0pUrj9jIP8AKfpSqMFnUeyscX92tJJzn7JH49PZFaHcQeRz55oQ0DVXj0OwjUcpbxjr6Cr/APbEn4fzrnS/ofFOjda0t2ySnJGKj+ywKPZLDzI8axhrMniFHxpp1mQ9MVIq2TYY2kMcVkI1GFA4p1iQ0ZyTnJpqMWtVYYwyA/lVXT5n3upC56jmu3GPxObN/LZsIFPhTh98etV4nb0qRHJdc0NEMXty5j7Pytnqyj86wLeQYUccoMfKtf8ASNJjs6VHjKo+tDtnJ3lhazL4KM0zG9UDNast2znvjGQAVyeT4VM8bd5kMTsGSKx5piZJGR9uFALD/mmjU5o4AysuGwceYp1CqCTQ4d2pRhhlBl8eWP8AooxQ5+7Qv2McXaTXIxjhB/X+lEczCGNnOeBxjzrPk/qhsNIY0yPOwBH6vj40mmAxyOKjt1AAJAyeTxT5DGOoHyoaLGSXYX8Pzqul3uzhhx05qZxGwyqjHuqIBR0UfKiVFWxl5cKUUburKKsK4PjVG5O6eBQOsmT7hV5Mbc5/KregVtnm8NnBBx50Pdqp3trR+4jdpZkaNWQ42+pogYLzwOaG+07EOiKGYBSxA8etBLo0YlcgT1vVUk0LTdPgue+wpknyMENnoTQ/SPXnqOakeGSOOORxhZBlfnWc0kEo3RuD+E/SlXrY2Pk49k/SvadBKtgM19HmC6XaAD/AT6Vd+1L+Cs/SIs6ZZnPBhX6CrohPXwrlurNS6Hl426rToRE7oi7iWIA49ai2qPCrmkJnVbQEcd6KKCXJIqWkdAchIMA8KuBQ+l/Hb6hHuYAMQvzojuTmJuPA0D63FmLfEOVG6u5iVo5GR/IOo2wPWpM+2ucdaoaFdLqGmQXJHLJg+/p9auyqu9eKTLugwf8A0k8aCoGPamH0NCvZyRpbB4uP1bY+Boj/AEkknS7Zc9Zc/lQZ2bl7q9eEnhx4VUdNBtXE0Jk2XEiOuVZeQagyFWZJfaKjcpx4YrRu1/8AJB5OY6ybtVhkVFfJZce/NaU7QlHQOw9v3OhQyBcd8xk5q7q07NPDAjbect/SrGmxrZaVbwk47mEKfD+GssSd9qeTzznrWdbdlyf0antgKBJUE+4/4tSyOo24YVVmkQ9GPyq0iChaQLtL04lx/iVVaRR4N8qkknUKTzwCTRUVZDAXl1LaHyIkyePE1qqHAxkVi9npRKk87cGST8q296edDLskeiJ2IzjmsPWJdtypJxlB9a3XKndk0LdqCVngK+Knr6GhZ0v89KWTYAahD3F7NGOcPx7qs3LK2kWi/wAQd/lxUOpkG9mKnPPUHNMXMqQooOQT19azPQxxXNpD9ZgWO3idCP1lvz6HFeVJrm5oQpHshGpVHImTFT0aOj7Bo9llT+wTp7hV3b76boASTRrDrnuEz/8AkVoGKP1rmyew1VFFgdueKt6Em/VrbPAD7vkDT2hG32UyKsaTA66jCVUgnK48uOtMwu5oqdcWFs6qYCR4qaC71zG7pIcbht5ouu5hDFsQiRgOQKDNULS7mkGDuPFegwo4uTs1uwsziC5tGORE+R7jRRKW3jjpQj2ObZqE23hXjGfnRfIARu4zS8qqYcXaAv8ASNPmOyh58WoKtpDBeRSLx7XNFHbq4S7+xXERIQh09rwIIoSPKZHWlSNEFoKw+ZsmQeON3lULxC61mxtgyuruOR5eNU4J2mt4QvL7COnj4VZ7LJL/AHltRJx3ZY4PoDTExCR0nUXCxCPAyeTWbpyj7W58hVid3kJO3r51Dp6yCSTIGffVJUgXtl2XHs1Ex8ufhT3DnGSoxTCjH7zGoiytOxRgMdapa1P9n02YkkMwCD4mr80S5BOePWhvtVKqWkceeTJnr8aZFWwWEHZ+MR6dFu5PXJ61rALtzgVj6Hk6dCdw5UfStVd2MZX5UufZcehpUc8daC+16gS23GVCsNpPrRmd/pQb2idbi/YDgRAD40jPLjA6f+dHlkMAwwXUsTywhFQYKxLksPnUb2kaP+qVwP8AMa0BCuRnHHgKcY4+g3Zrm+1naXj4oysxbyM/ZZSWJ9g/SlWjqEcZs5jjOI28MeFKr5gzhGy3oMqromngAbu4T/1FXWuVx6+6s3QRu0ew9IE/9RVh4yDneflSJLZzY9E63jqu1FAHpW1oKxxxz3VzJtH3dxrCt0VfDPvoh0Ek29wOOGB5Gaf4yXsVi87rG6G3Wv6bAdsbHjj7tCGr6m9y5Nv+zPgBXQWsre5gdp4IWPpGBQTqtnZRylY7bYRzuV8V6DHKJyH3s0f0fq0n2yWTw2qM/M0ZsqlOBQz2PVYtPlMQIy56nPlRDDMSnIpOXchioCu3tjFaWFmIRgGZycn8XJoMi5bFHn6RjnT7Qc/tT9DQDHw9Z5OmaIfyamkSFLkRFtuWyDW72UTf2hnfqiI2PjgUNSO0csci8MFFEvYRi9zeMcZ2r/WtC/kTL9DOUA+OKVttAyeprx4lZckH505I1AUYob0K+yVmVVySB8ahkmHhuPuFSEDGMCmPz6VEWV5Hds4TGPOgrtM73F9bQ+LuQAPlRtMvssc+FBN62/tTYgjgYP1o06JHbDiwVYoUQdFGOlXQ4/EKqWQ/Vgk5zVzA8hS5ERGzr50E6jDv1C4IcYMh60asi+VCd5Av26cjj2z9ax+W9I7P+Y9sxyoGeG4OPYGR86sLvIGAPfmnTnuWbPtDPhxTbcGZWGdoHpXOO442RX6N9in4B/VN091KnX0B+wXBErDET/Q0qszTWz//2Q==" />
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
