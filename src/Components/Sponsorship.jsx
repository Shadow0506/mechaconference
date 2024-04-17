import Typewriter from "typewriter-effect";
export function Sponsorship()
{
    return(
        <div style={{backgroundColor: '#E9FFFF'}}>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      <Typewriter onInit={(typewriter) => {
                            typewriter
                                .typeString("Our sponsors")
                                .pauseFor(15)
                                .start();
                        }} />
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">**Short desciption of Sponsorship page**</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 1</h2>
            <p class="text-gray-500">Social media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 2</h2>
            <p class="text-gray-500">Social media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 3</h2>
            <p class="text-gray-500">Social Media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 4</h2>
            <p class="text-gray-500">Social media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 5</h2>
            <p class="text-gray-500">Social Media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 6</h2>
            <p class="text-gray-500">Social Media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 7</h2>
            <p class="text-gray-500">Social Media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 8</h2>
            <p class="text-gray-500">Social Media</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"></img>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sponsor 9</h2>
            <p class="text-gray-500">Social Media</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
