export function ContactUs()
{
    return(
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
                    <div className="lg:w-2/3 md:w-1/2 flex flex-col items-center justify-center">
                        <iframe
                            title="map"
                            width="80%"
                            height="300"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=30.765269, 76.786558&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            className="mb-6"
                        ></iframe>
                        <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-1 flex items-start justify-center shadow-md">
                            <div className="bg-white w-full py-6 px-6 rounded-lg">
                                <div className="mb-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        ADDRESS
                                    </h2>
                                    <p className="mt-1 text-gray-700">
                                        Sector 12, Chandigarh, 160012
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
                                        example@email.com
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
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Got any query ? Contact Us here !!
                        </p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
