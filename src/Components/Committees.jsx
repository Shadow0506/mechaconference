import Typewriter from "typewriter-effect";
export function Committees() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 pt-10 mx-auto">
                    <div class="flex flex-wrap -m-3">
                        <div class="p-4 lg:w-1/3 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Prof. Baldev Setia</h2>
                                    <h3 class="text-gray-500 mb-3">Director, PEC, CHD</h3>
                                    <p class="mb-4">Chief Patron</p>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Prof. Sanjeev Kumar</h2>
                                    <h3 class="text-gray-500 mb-3">Department of Mechanical Engineering PEC, CHD</h3>
                                    <p class="mb-4">Chairman</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Prof. Perminderjit Singh</h2>
                                    <h3 class="text-gray-500 mb-3">Department of Mechanical Engineering PEC, CHD</h3>
                                    <p class="mb-4">Co-Chairman</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("Organizing Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjeev Kumar</h2>
                                    <p class="leading-relaxed text-base">Chairman, Department of Mechanical Engineering, PEC, CHD</p>

                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Perminderjit Singh</h2>
                                    <p class="leading-relaxed text-base">Co-Chairman, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sarbjit Singh</h2>
                                    <p class="leading-relaxed text-base">Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. M.P Garg</h2>
                                    <p class="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Kamal Kumar</h2>
                                    <p class="leading-relaxed text-base">Joint-Organizing Secretary, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Viveksheel Rajput</h2>
                                    <p class="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("Technical Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Alakesh Manna</h2>
                                    <p class="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjeev Kumar</h2>
                                    <p class="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Perminderjit Singh</h2>
                                    <p class="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjay Kumar Mangal</h2>
                                    <p class="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sushant Samir</h2>
                                    <p class="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. D R Prajapati</h2>
                                    <p class="leading-relaxed text-base">Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. S K Soni</h2>
                                    <p class="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Kanda</h2>
                                    <p class="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Dang</h2>
                                    <p class="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Kamal Kumar</h2>
                                    <p class="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. M.P Garg</h2>
                                    <p class="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sandeep Salodkar</h2>
                                    <p class="leading-relaxed text-base">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Tejbir Kaur</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Lokesh</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Achitanand Dubey</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Ankit Yadav</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Gurjeet Singh</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Chanderkant Sudheel</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Harshit Khandewal</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Prof. Nitin Dixit</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("International Advisory Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Sunil Agrawal</h2>
                                    <p class="leading-relaxed text-base">Professor, Columbia University, New York</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Marco Amabili</h2>
                                    <p class="leading-relaxed text-base">Professor, McGill University</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Ahn, Sung-Hoon</h2>
                                    <p class="leading-relaxed text-base">Professor, Seoul National University</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Cho, Maenghyo</h2>
                                    <p class="leading-relaxed text-base">Professor, Seoul National University</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Noguchi Shoji</h2>
                                    <p class="leading-relaxed text-base">Professor, Tokyo University of Science</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Gregory S. Chirikjian</h2>
                                    <p class="leading-relaxed text-base">Professor, National University of Singapore</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Daizhong Su</h2>
                                    <p class="leading-relaxed text-base">Professor, Nottingham Trent University</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Phani, Anasavarapu Srikantha</h2>
                                    <p class="leading-relaxed text-base">Professor, University of British Columbia</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. J. Keith Nisbett</h2>
                                    <p class="leading-relaxed text-base">Associate Professor, Missouri Institute of Science and Tech.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Chen Y.H.</h2>
                                    <p class="leading-relaxed text-base">Associate Professor, University of Hong Kong</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. YAO Haimin</h2>
                                    <p class="leading-relaxed text-base">Associate Professor, Hong Kong Polytechnic University</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Girish Krishnan</h2>
                                    <p class="leading-relaxed text-base">Associate Professor, The Grainer College of Engineering</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Souma Chowdhury</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor, University of Buffallo</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Hayden Taylor</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor, University of California, Berkely</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mokarram Hossain</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor, Swansea University, UK</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. YU Xiang</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor, Hong Kong Polytechnic University</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Andy Lung</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor, Kingston University, London</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div class="flex-grow">
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mahdis Bisheban</h2>
                                    <p class="leading-relaxed text-base">Assistant Professor, University of Calgary</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}