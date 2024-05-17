import '../ContactUs.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export function ContactUs_home() {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container  mx-auto flex flex-col">
                    <div className="flex flex-wrap w-full mb-4 mx-auto">
                        <div className="lg:w-full lg:mb-0 ">
                            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Contact Us
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="container lg:px-5 lg:py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
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
                            className="mb-6 rounded-lg shadow-md"
                        ></iframe>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center" style={{ backgroundColor: '#F0F8FF' }}>
                        <div className="bg-gray-100 rounded-lg overflow-hidden p-6 flex flex-col items-start justify-center shadow-md">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                                <div>
                                    <h2 className="font-semibold text-gray-900 text-sm">ADDRESS</h2>
                                    <p className="text-gray-700">Punjab Engineering College, Sector 12, Chandigarh, 160012</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="text-gray-600 mr-2" />
                                <div>
                                    <h2 className="font-semibold text-gray-900 text-sm">EMAIL</h2>
                                    <a href="mailto:icdmt2024@pec.edu.in" className="text-indigo-500 hover:text-indigo-600 transition-colors duration-200">icdmt2024@pec.edu.in</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-gray-600 mr-2" />
                                <div>
                                    <h2 className="font-semibold text-gray-900 text-sm">PHONE</h2>
                                    <p className="text-gray-700">0172 275 3814</p>
                                </div>
                            </div>
                        </div>
                        <span className="text-above-contact-btn py-3 mt-5">
                            Need Help?
                        </span>
                        <a href="mailto:icdmt2024@pec.edu.in" className="contact-btn text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg">Contact Us</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
