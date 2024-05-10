import Typewriter from "typewriter-effect";
export function Speakers() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-4">
            <div className="lg:w-full lg:mb-0 pt-10 text-center">
              <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                <Typewriter onInit={(typewriter) => {
                  typewriter
                    .typeString("KEYNOTE SPEAKERS")
                    .pauseFor(1500)
                    .start();
                }} />
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src='./src/Components/inderdeep.jpeg' alt="content"></img>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Inderdeep Singh</h2>
                <p className="leading-relaxed text-base">Department of Mechanical and Industrial Engineering, IIT Roorkee</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src='./src/Components/akshay_dv.jpeg' alt="content"></img>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Akshay Dvivedi</h2>
                <p className="leading-relaxed text-base">Department of Mechanical and Industrial Engineering, IIT Roorkee</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src='./src/Components/rahul_vaish.jpeg' alt="content"></img>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Rahul Vaish</h2>
                <p className="leading-relaxed text-base">School of Engineering IIT Mandi</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src='./src/Components/Sunil_pandey.jpeg' alt="content"></img>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Sunil Pandey</h2>
                <p className="leading-relaxed text-base">Department of Mechanical Engineering, IIT Delhi</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src='./src/Components/pradeep_dixit.jpeg' alt="content"></img>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Associate Professor</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Pradeep Dixit</h2>
                <p className="leading-relaxed text-base">Department of Mechanical Engineering, IIT Bombay</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
