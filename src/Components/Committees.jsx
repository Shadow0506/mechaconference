import Typewriter from "typewriter-effect";
import profmpgarg from '../profmpgarg.jpeg'
import profsarbjitsingh from '../profsarbjitsingh.jpeg'
import drviveksheel from '../drviveksheel.jpeg'
import drkamalkumar from '../drkamalkumar.jpeg'
export function Committees() {
    return (
        <div>
            <div className="flex flex-col text-center w-full mt-10">
                <h1 className="sm:text-5xl text-2xl font-medium title-font  text-gray-900">
                    <Typewriter onInit={(typewriter) => {
                        typewriter
                            .typeString("Committees")
                            .pauseFor(1500)
                            .start();
                    }} />
                </h1>
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
                                    <h2 className="title-font font-medium text-lg text-gray-900">Prof. Baldev Setia</h2>
                                    <h3 className="text-gray-500 mb-3">Director, PEC, CHD</h3>
                                    <p className="mb-4">Chief Patron</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("Organizing Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjeev Kumar</h2>
                                    <p className="leading-relaxed text-base">Chairman, Department of Mechanical Engineering, PEC, CHD</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Perminderjit Singh</h2>
                                    <p className="leading-relaxed text-base">Co-Chairman, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={profsarbjitsingh} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sarbjit Singh</h2>
                                    <p className="leading-relaxed text-base">Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={profmpgarg} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. M.P Garg</h2>
                                    <p className="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={drkamalkumar} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Kamal Kumar</h2>
                                    <p className="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={drviveksheel} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Viveksheel Rajput</h2>
                                    <p className="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("Technical Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Alakesh Manna</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjeev Kumar</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Perminderjit Singh</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjay Kumar Mangal</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sushant Samir</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. D R Prajapati</h2>
                                    <p className="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. S K Soni</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Kanda</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Dang</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Kamal Kumar</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. M.P Garg</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sandeep Salodkar</h2>
                                    <p className="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Tejbir Kaur</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Lokesh</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Achitanand Dubey</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Ankit Yadav</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Gurjeet Singh</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Chanderkant Sudheel</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Harshit Khandewal</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Nitin Dixit</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("International Advisory Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Sunil Agrawal</h2>
                                    <p className="leading-relaxed text-base">Professor, Columbia University, New York</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Marco Amabili</h2>
                                    <p className="leading-relaxed text-base">Professor, McGill University</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Ahn, Sung-Hoon</h2>
                                    <p className="leading-relaxed text-base">Professor, Seoul National University</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Cho, Maenghyo</h2>
                                    <p className="leading-relaxed text-base">Professor, Seoul National University</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Noguchi Shoji</h2>
                                    <p className="leading-relaxed text-base">Professor, Tokyo University of Science</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Gregory S. Chirikjian</h2>
                                    <p className="leading-relaxed text-base">Professor, National University of Singapore</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Daizhong Su</h2>
                                    <p className="leading-relaxed text-base">Professor, Nottingham Trent University</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Phani, Anasavarapu Srikantha</h2>
                                    <p className="leading-relaxed text-base">Professor, University of British Columbia</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. J. Keith Nisbett</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, Missouri Institute of Science and Tech.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Chen Y.H.</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, University of Hong Kong</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. YAO Haimin</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, Hong Kong Polytechnic University</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Girish Krishnan</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, The Grainer College of Engineering</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Souma Chowdhury</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, University of Buffallo</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Hayden Taylor</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, University of California, Berkely</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mokarram Hossain</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, Swansea University, UK</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. YU Xiang</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, Hong Kong Polytechnic University</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Andy Lung</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, Kingston University, London</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mahdis Bisheban</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, University of Calgary</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("National Advisory Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Navin Kumar</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Ropar</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Surjit Angra</h2>
                                    <p className="leading-relaxed text-base">Professor, NIT Kurukshetra</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Vinod Kumar</h2>
                                    <p className="leading-relaxed text-base">Professor, NIT Kurukshetra</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Punit Kumar</h2>
                                    <p className="leading-relaxed text-base">Professor, NIT Kurukshetra</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Rajeev Kumar</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Mandi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Tarun Kumar Bera</h2>
                                    <p className="leading-relaxed text-base">Professor and Head, TIET Patiala</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. M.M. Joglekar</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. B.K. Mishra</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. P.M. Pathak</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. V. Huzur Saran</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Indra Vir Singh</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Anoop Chawla</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. A. K. Darpe</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Akshay Dvivedi</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Dheerendra Kr. Dwivedi</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Apurbba Kumar Sharma</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Hari Singh</h2>
                                    <p className="leading-relaxed text-base">Professor, NIT Kurukshetra</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. G. A. HARMAIN</h2>
                                    <p className="leading-relaxed text-base">Professor, NIT Srinagar</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Himanshu Chaudhary</h2>
                                    <p className="leading-relaxed text-base">Professor, MNIT Jaipur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. T. C. Gupta</h2>
                                    <p className="leading-relaxed text-base">Professor, MNIT Jaipur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Bishakh Bhattacharya</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Kanpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. K R Guruprasad</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Kanpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. B. Ravindra</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Jodhpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Suril Shah</h2>
                                    <p className="leading-relaxed text-base">Professor, IIT Jodhpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Dhiraj K. Mahajan</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, IIT Ropar</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Arpan Gupta</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, IIT Mandi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Neeraj Grover</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, TIET Patiala</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Abinash Kumar Swain</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Arpan Gupta</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, IIT Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Siddhartha</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, NIT Hamirpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Dinesh Kumar</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, MNIT Jaipur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Sanat Agrawal</h2>
                                    <p className="leading-relaxed text-base"></p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Rajendra Kumar Munian</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Ropar</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. V S Nagendra Reddy B</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Kurukshetra</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Amit Shukla</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Mandi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Deepak Sachan</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Mandi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Anshul Sharma</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Hamirpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mohit Pant</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Hamirpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Abhishek Mishra</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Naresh Varma Datla</h2>
                                    <p className="leading-relaxed text-base">Associate Professor, IIT Delhi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Anshul Sharma</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Hamirpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Azher Jameel</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Srinagar</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Keval S. Ramani</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Kanpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Ushashi Roy</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Kanpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Apurba Mandal</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Uttarakhand</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Vikas Kukshal</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Uttarakhand</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Prashant Tiwari</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, NIT Uttarakhand</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Amrita Puri</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Jodhpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Atul Kumar Sharma</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor,IIT Jodhpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Riby Abraham Boby</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Jodhpur</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Ravi Kant</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Ropar</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Sunny Zafar</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Mandi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Swati Sharma</h2>
                                    <p className="leading-relaxed text-base">Assistant Professor, IIT Mandi</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mrityunjay Doddamani</h2>
                                    <p className="leading-relaxed text-base"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
