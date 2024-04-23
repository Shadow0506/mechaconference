import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import t1 from './t1.png';
import t2 from './t2.png';
import t3 from './t3.png';
import t4 from './t4.png';
import t5 from './t5.png';
import t6 from './t6.png';
import t7 from './t7.png';
import t8 from './t8.png';

export function Callforpapers_home() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide % 8) + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="container  mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                            CALL FOR PAPERS
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col ">
                    <div className='mx-auto relative'>
                    <section className="container relative">
                        <div className="slider-wrapper relative">
                        <div className="slider relative">
    <img id="slide-1" src={t1} className={`block w-64 h-64 ${currentSlide === 1 ? 'block' : 'hidden'}`} />
    <img id="slide-2" src={t2} className={`block w-64 h-64 ${currentSlide === 2 ? 'block' : 'hidden'}`} />
    <img id="slide-3" src={t3} className={`block w-64 h-64 ${currentSlide === 3 ? 'block' : 'hidden'}`} />
    <img id="slide-4" src={t4} className={`block w-64 h-64 ${currentSlide === 4 ? 'block' : 'hidden'}`} />
    <img id="slide-5" src={t5} className={`block w-64 h-64 ${currentSlide === 5 ? 'block' : 'hidden'}`} />
    <img id="slide-6" src={t6} className={`block w-64 h-64 ${currentSlide === 6 ? 'block' : 'hidden'}`} />
    <img id="slide-7" src={t7} className={`block w-64 h-64 ${currentSlide === 7 ? 'block' : 'hidden'}`} />
    <img id="slide-8" src={t8} className={`block w-64 h-64 ${currentSlide === 8 ? 'block' : 'hidden'}`} />
</div>

                        </div>
                        
                    </section>
                    </div>
                    <div className="slider-indicators mt-4 flex justify-center">
                        {[...Array(8)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index + 1)}
                                className={`w-4 h-4 rounded-full mx-1 focus:outline-none ${
                                    currentSlide === index + 1 ? 'bg-yellow-500' : 'bg-gray-500'
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-10" onClick={() => navigate('/callforpapers')} target="_blank">
                    View All Tracks
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}
