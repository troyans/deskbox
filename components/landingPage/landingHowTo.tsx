import Sprikle from "../elements/sprikle";
import Video from "../elements/video";
import YoutubeVideo from "../elements/youtubeVideo";
import LandingContainer from "./landingContainer";

const LandingHowTo = () => {
  return (
    <section className="bg-black items-center justify-between py-10">
      <div className="max-w-7xl mx-auto items-center py-10 px-4">
          <div className="flex flex-col ml-0 gap-y-2">

              <p className="text-white text-xl">
                  How it works
              </p>
              

              <h2 className="text-4xl leading-snug text-white">
                  Increase Your Customer Satisfaction With 3 Easy Steps
              </h2>

              <p className="text-white text-base font-normal">
                  With 3 simple steps your chatbot will be ready to support your customer
              </p>

              <div>
                  <section className="py-12 sm:py-16 lg:py-20 xl:py-20">
                      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                      
                          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-none lg:grid-cols-3 sm:mt-16 lg:mt-20 gap-y-20 lg:gap-x-12">
                              <div className="relative flex items-start lg:flex-col">
                                  <span className="absolute w-px h-full -ml-px border-l-2 border-gray-700 border-dashed lg:border-l-0 lg:border-t-2 top-20 left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0" aria-hidden="true"></span>
                  
                                  <div className="inline-flex relative ring-[15px] ring-gray-900 items-center justify-center w-16 h-16 text-[#5423E7] bg-gray-800 rounded-xl shrink-0">
                                      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                          />
                                      </svg>
                                  </div>
                                  <div className="ml-6 lg:ml-0 lg:mt-10">
                                      <h3 className="text-xl font-semibold text-white">Train With Your Data</h3>
                                      <p className="mt-4 text-lg font-light text-white">Input your pdf file or your website url to train Gon AI with your custom knowledge base</p>
                                  </div>
                              </div>
                  
                              <div className="relative flex items-start lg:flex-col">
                                  <span className="absolute w-px h-full -ml-px border-l-2 border-gray-700 border-dashed lg:border-l-0 lg:border-t-2 top-20 left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0" aria-hidden="true"></span>
                  
                                  <div className="inline-flex relative ring-[15px]  ring-gray-900 items-center justify-center w-16 h-16 text-[#5423E7] bg-gray-800 rounded-xl shrink-0">
                                      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                      </svg>
                                  </div>
                                  <div className="ml-6 lg:ml-0 lg:mt-10">
                                      <h3 className="text-xl font-semibold text-white">Customize Look and Feel</h3>
                                      <p className="mt-4 text-lg font-light text-white">Customize Gon AI look and feel so that match with your brand</p>
                                  </div>
                              </div>
                  
                              <div className="relative flex items-start lg:flex-col">
                                  <div className="inline-flex items-center ring-[15px]  ring-gray-900 justify-center w-16 h-16 text-[#5423E7] bg-gray-800 rounded-xl shrink-0">
                                      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                      </svg>
                                  </div>
                                  <div className="ml-6 lg:ml-0 lg:mt-10">
                                      <h3 className="text-xl font-semibold text-white">Setup to Your Website</h3>
                                      <p className="mt-4 text-lg font-light text-white">Embed code  and see chatbot live on your website</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  
              </div>

          </div>
      </div>
    
</section>
  );
};

export default LandingHowTo;
