import React from 'react'
import Typewriter from 'typewriter-effect';

function PublicationPartner() {
  return (
    <div className='h-full bg-[#F0F8FF] flex justify-center'>
        <div className="lg:w-full lg:mb-0 pt-10 text-center">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                <Typewriter onInit={(typewriter) => {
                typewriter
                    .typeString("Publication Partners")
                    .pauseFor(1500)
                    .start();
                }} />
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
            
            <p className='mt-5 text-lg'>The selected accepted papers will be published in the following journals after peer review as per Journal policy 
            </p>
            <p className='text-lg font-extralight'>
                (in communication with)
            </p>

            <div className='flex flex-wrap justify-center'>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <a href="https://journals.sagepub.com/overview-metric/PIE" target='_blank'>
                        <img src='https://bioone.org/images/publishers/fullsize/SAGE.png' className='rounded-lg w-1/2 mx-auto'/>
                        <ul className='font-light'>
                            <li className='font-bold text-xl m-4'>Sage</li>
                            <li>Proceedings of the Institution of Mechanical Engineers</li>
                            <hr className='bg-[rgb(81,81,84)]/20' style={{padding: 0.5}}/>
                            <li>Part E: Journal of Process Mechanical Engineering</li>
                            <li className='font-extralight text-sm'>(scroll below for journal)</li>
                            <hr className='bg-[rgb(81,81,84)]/20' style={{padding: 0.5}}/>
                            <li>Impact Factor: 2.3 (SCI).</li>
                        </ul>
                    </a>
                </div>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <a href="https://link.springer.com/journal/12008" target='_blank'>
                        <img src='https://icssmt.com/2023/Springer.png' className='rounded-lg w-1/2 mx-auto'/>
                        <ul className='font-light'>
                            <li className='font-bold text-xl m-4'>Springer</li>
                            <li>International Journal on Interactive Design and Manufacturing (IJIDeM)</li>
                            <li className='font-extralight text-sm'>(scroll below for journal)</li>
                            <hr className='bg-[rgb(81,81,84)]/20' style={{padding: 0.5}}/>
                            <li>Impact Factor: 2.1 (ESCI & Scopus)</li>
                        </ul>
                    </a>
                </div>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <a href="https://www.tandfonline.com/action/journalInformation?journalCode=tmpt20" target='_blank'>
                        <img src='https://www.informascope.com/views/default/_images/_logos/urunler/taylor_and_francis.png' className='rounded-lg w-1/2 mx-auto'/>
                        <ul className='font-light'>
                            <li className='font-bold text-xl m-4'>Taylor & Francis</li>
                            <li>Advances in Materials and Processing Technologies</li>
                            <li className='font-extralight text-sm'>(scroll below for journal)</li>
                            <hr className='bg-[rgb(81,81,84)]/20' style={{padding: 0.5}}/>
                            <li>Impact Factor: 2.2 ( ESCI & Scopus)</li>
                        </ul>
                    </a>
                </div>
            </div>

            <div className='flex flex-wrap justify-center -mt-16'>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <a href="https://pubs.aip.org/aip" target='_blank'>
                        <img src='https://th.bing.com/th/id/OIP.BwO8K-2yO0qK6xxDuUcqQQHaDj?w=342&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='rounded-lg w-1/2 py-5 mx-auto'/>
                        <ul className='font-light'>
                            <li className='font-bold text-xl m-4'>API Publishing</li>
                            <li>AIP Conference Proceedings</li>
                        </ul>
                    </a>
                </div>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <img src='https://th.bing.com/th/id/OIP.Xoyt1V7R2DFuADm9Ad41RgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='rounded-lg w-1/2 py-5 mx-auto'/>
                    <ul className='font-light'>
                        <li className='font-bold text-xl m-4'>Elsevier</li>
                    </ul>
                </div>
            </div>

            <div className="lg:w-full lg:mb-0 pt-10 text-center">
            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                <Typewriter onInit={(typewriter) => {
                typewriter
                    .typeString("Journals")
                    .pauseFor(1500)
                    .start();
                }} />
            </h2>
            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
            </div>

            <div className='flex flex-wrap justify-center'>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <img src='https://us.sagepub.com/sites/default/files/upm-binaries/styles/sage_thumbnail_width_150px/feed/113415_sppie_234_4_72ppiRGB_150pixw.jpg' className='rounded-lg w-1/2 mx-auto'/>
                    <p className='font-medium text-xl m-4'>Part E: Journal of Process Mechanical Engineering</p>
                </div>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <img src='https://th.bing.com/th/id/OIP.IVjXebxeDEFCnKz7BWl0hwAAAA?rs=1&pid=ImgDetMain' className='rounded-lg w-1/2 mx-auto'/>
                    <p className='font-medium text-xl m-4'>International Journal on Interactive Design and Manufacturing</p>
                </div>
                <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                    <img src='https://www.tandfonline.com/doi/cover-img/10.1080/tmpt20.v006.i03' className='rounded-lg w-1/2 mx-auto'/>
                    <p className='font-medium text-xl m-4'>Advances in Materials and Processing Technologies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublicationPartner
