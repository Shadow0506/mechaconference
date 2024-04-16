import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
export function Speakershome() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time for larger screens
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1700, // Auto scroll after every 3 seconds
        arrows: true, // Show arrow navigation
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show only 1 card at a time for mobile devices
                },
            },
        ],
    };
    const text = "Keynote Speakers";
    return (

        <div className="w-3/4 m-auto">
        <div className="flex flex-col text-center w-full mt-10">
                <h1 className="sm:text-5xl text-2xl font-medium title-font  text-gray-900">
                    KEYNOTE SPEAKERS
                </h1>
            </div>
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
                <div className="h-56 bg-gray-900 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>
                <div className="p-4 text-center">
                  <p className="text-xl font-semibold mb-2">{d.name}</p>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{d.designation}</h3>
                  <p className="text-gray-700 mt-2">{d.institute}</p>
                  <button className="mt-4 bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl" href={d.linkedin}>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    )
}

const data = [
    {
        name: 'Inderdeep Singh',
        img: './src/Components/inderdeep.jpeg',
        designation: 'Professor ',
        linkedin : '#',
        institute : 'Department of Mechanical and Industrial Engineering, IIT Roorkee'
        
    },
    {
        name: 'Akshay Dvivedi',
        img: './src/Components/akshay_dv.jpeg',
        designation: 'Professor ',
        linkedin : '/',
        institute : 'Department of Mechanical and Industrial Engineering, IIT Roorkee'
    },
    {
        name: 'Rahul Vaish',
        img: './src/Components/rahul_vaish.jpeg',
        designation: 'Professor ',
        linkedin : '/',
        institute : 'School of Engineering, IIT Mandi'
    },
    {
        name: 'Sunil Pandey',
        img: './src/Components/Sunil_pandey.jpeg',
        designation: 'Professor ',
        linkedin : '/',
        institute : 'Department of Mechanical Engineering, IIT Delhi'
    },
    {
        name: 'Pradeep Dixit',
        img: './src/Components/pradeep_dixit.jpeg',
        designation: 'Associate Professor ',
        linkedin : '/',
        institute : 'Department of Mechanical Engineering, IIT Bombay'
    }
]