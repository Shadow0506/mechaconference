import './ContactUs.css'
import Typewriter from "typewriter-effect";
export function ContactUs() {
    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <section className="text-gray-600 body-font relative">
            <div className="  mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center items-center w-full mb-2">
              <div className="lg:w-full lg:mb-0 pt-10 text-center">
                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                  <Typewriter onInit={(typewriter) => {
                    typewriter
                      .typeString("Contact Us")
                      .pauseFor(1500)
                      .start();
                  }} />
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
              </div>
            </div>
            </div>
                <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
                    <div className="div-with-line lg:w-2/3 md:w-1/2 flex flex-col items-center justify-center">
                        <iframe
                            title="map"
                            width="80%"
                            height="300"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=30.765269, 76.786558&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            className="mb-6"
                        ></iframe>

                    </div>

                    <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center">
                        <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-1 flex items-start justify-center shadow-md">
                            <div className="bg-white w-full py-6 px-6 rounded-lg">
                                <div className="mb-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        ADDRESS
                                    </h2>
                                    <p className="mt-1 text-gray-700">
                                        Punjab Engineering College Sector 12, Chandigarh, 160012
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        EMAIL
                                    </h2>
                                    <a
                                        href="mailto:example@email.com"
                                        className="text-indigo-500 leading-relaxed hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        icdmt2024@pec.edu.in
                                    </a>
                                </div>
                                <div>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        PHONE
                                    </h2>
                                    <p className="leading-relaxed text-gray-700">0172 275 3814</p>
                                </div>
                            </div>
                        </div>
                        <span className="text-above-contact-btn py-3 mt-5">
                            Need Help?
                        </span>
                        <a href="mailto:icdmt2024@pec.edu.in" className="contact-btn text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact Us</a>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-7 text-gray-900">
                            Contact Details
                        </h1>
                        <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex flex-wrap -m-2">

                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/IMG_20190516_153729-01.jpeg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sarbjit Singh</h2>
                                    <p className="leading-relaxed text-base">Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                    <p className="leading-relaxed text-base pt-4">Contact Number : +91 9888785760</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=McQfhR4AAAAJ&citpid=7" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. M.P Garg</h2>
                                    <p className="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                    <p className="leading-relaxed text-base pt-4">Contact Number : +91 8283811022</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/Kamal%20pic.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Kamal Kumar</h2>
                                    <p className="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                    <p className="leading-relaxed text-base pt-4">Contact Number : +91 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
