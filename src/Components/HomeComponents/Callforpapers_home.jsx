import { useNavigate } from "react-router-dom"

export function Callforpapers_home() {
    const navigate = useNavigate();
    return (

        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <div className="container px-5 py-5 mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                            CALL FOR PAPERS
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col">
                    <div className="mx-auto">
                        <section class="container">
                            <div class="slider-wrapper">
                                <div class="slider">
                                    <img id="slide-1" src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary orange planet in space" />
                                    <img id="slide-2" src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary green planet in space" />
                                    <img id="slide-3" src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary blue planet in space" />
                                </div>
                                <div class="slider-nav">
                                    <a href="#slide-1"></a>
                                    <a href="#slide-2"></a>
                                    <a href="#slide-3"></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-10" onClick={()=>{navigate('/callforpapers')}} target="_blank">View All Tracks
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>

    )
}