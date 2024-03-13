import Typewriter from "typewriter-effect";
export function AboutUs() {
  return (
    <div>
      <div className="flex flex-col text-center w-full mt-10">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font  text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("About Us")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></img>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="https://latestgovtjobs.in/wp-content/uploads/2017/11/PEC-Logo-150x150.png" alt="Pec Logo" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">PEC</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Punjab Engineering College (Deemed to be University) (PEC) having its roots in Lahore as Mugalpura Engineering College since 1921, moved to its present campus in 1953 as PEC affiliated to Panjab University. The institute became Deemed to be University in 2003 through a MHRD notification. It is a Grant-in-Aid institution under administration of Union Territory of Chandigarh, Government of India.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">The institute offers 11 Undergraduate (B. Tech.) Programmes and 14 Post graduate (M. Tech.) Programmes in various disciplines of Engineering and Technology. After becoming University, the institute has also started PhD programme in various disciplines of engineering, sciences, management, humanities and social sciences. The admission to UG and PG programmes are made through national level examinations namely JEE (Mains) and GATE respectively. There are 9 academic departments and 2 centers of excellence. The institute collaborates very closely with research organizations, industries, alumni and other academic institutions both India and abroad, and has signed MoUs to pursue joint research in niche areas. The students graduating from this institute are placed in highly reputed companies with handsome salary packages. With a history of 100 Years now, the institute has produced a number of alumni who have earned name and fame both for themselves and the institute.

                </p>
                <a className="text-indigo-500 inline-flex items-center" href="https://pec.ac.in/" target="_blank">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-0 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></img>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="https://upload.wikimedia.org/wikipedia/en/6/6f/Indian_Institute_of_Technology_Roorkee_logo.png" alt="IIT-R Logo" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">IIT Roorkee</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">The Institute had celebrated its Sesquicentennial in October 1996 and now completed more than 175 years of its existence. It was converted to IIT on September 21, 2001 by an Ordinance issued by the Government of India declared it as the nation’s seventh Indian Institute of Technology, an “Institution of National Importance”.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Indian Institute of Technology - Roorkee is among the foremost of institutes of national importance in higher technological education and in engineering, basic and applied research. Since its establishment, the Institute has played a vital role in providing the technical manpower and know-how to the country and in pursuit of research. The Institute ranks amongst the best technological institutions in the world and has contributed to all sectors of technological development. It has also been considered a trend-setter in the area of education and research in the field of science, technology, and engineering.
                  The Institute offers Bachelor's Degree courses in 10 disciplines of Engineering and Architecture and Postgraduate's Degree in 55 disciplines of Engineering, Applied Science, Architecture and planning. The Institute has facility for doctoral work in all Departments and Research Centres.
                  The Institute admits students to B.Tech. and B.Arch. courses through the Joint Entrance Examination (JEE) conducted at various centres all over India.

                </p>
                <a className="text-indigo-500 inline-flex items-center" href="https://www.iitr.ac.in/" target="_blank">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></img>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:pt-12">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="https://pec.ac.in/hydro-2022/assets/images/pec_logo.png" alt="PEC logo" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Mechanical Engineering Department</h2>
                  <h3 className="font-medium title-font mt-4 text-gray-900 text-lg">PEC , Chandigarh</h3>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">The Department of Mechanical Engineering at Punjab Engineering College is as old as the Institute itself. The Department is continuously striving to achieve excellence in education, academic and industry-oriented research to prepare the manpower that are globally competitive and capable of leading in industry, academia and government organizations in both India and abroad. Besides the Bachelor degree, Department offer Master and Ph.D. programme also. From session 2014-15 onward, the Department has an intake of 75 students at B.E. level and 25 students at M.E. level. Under Ph.D. programme at the Department, the major research areas include Advanced /non-traditional machining processes, Micro-manufacturing, CAD/CAM, MEMS, Soft computing in Design and Manufacturing, Composites, Bio-materials, and so on.


                </p>
                <a className="text-indigo-500 inline-flex items-center" href="https://pec.ac.in/me" target="_blank">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></img>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:pt-12">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <img src="https://pec.ac.in/hydro-2022/assets/images/pec_logo.png" alt="ICDMT logo" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">ICDMT 2024</h2>
                  <h4 className="font-medium title-font mt-4 text-gray-900 text-lg">International Conference on Design and Manufacturing Technologies</h4>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Design and Manufacturing play a crucial role in a country's economy and societal development due to its significant wealth-generating capabilities. To expand and deepen understanding of materials from the application point of view and to meet the growing global demands, it is essential to focus on in-depth studies of functionally graded materials and tailor-made materials, their design as well as manufacturing aspects. This approach aims to enhance innovation and responsiveness in addressing the diverse needs of the international community. The goal of the ‘International Conference on Design and Manufacturing Technologies” (ICDMT-2024) scheduled for 08th -10th Nov 2024 is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing with a focus on advanced materials to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view to product design, process design and analysis as well as to create, and manufacture goods.
This event is being jointly organized by the Department of Mechanical Engineering Punjab Engineering College (Deemed to be University) in association with The Design Innovation Centre, Indian Institute of Technology, Roorkee, (Uttarakhand). The three-day gala event is structured with the delivery of keynote addresses focusing on the main themes of the conference followed by parallel sessions. Keynote addresses will be delivered by experts from academia or industry of international repute. Each session will commence with an invited talk aimed at the theme of the session followed by the presentation of contributed papers by the delegates. The authors of all accepted papers will be invited to present their work during the conference and subsequently, the papers will be published in a Scopus index journal. The extended version of the selected papers will be published in SCI/SCIE-indexed journals after peer review.
</p>
                <a className="text-indigo-500 inline-flex items-center" href="https://pec.ac.in/me" target="_blank">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}