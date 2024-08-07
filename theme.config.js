export default {
  
  navs: [
    
    {
      url: "https://deskbox.co",
      name: "Deskbox",
      "newWindow": true
    },
  ],

  project: {
    link: "https://deskbox.co",
  },

  feedback: true,
  editLink: true,

  useNextSeoProps() {
    return {
      titleTemplate: '%s – SWR'
    }
  },

  logo: (
    <>
      <svg style={{marginTop:'0.2em'}} width="20" height="20" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="170" cy="180" r="150" stroke="#5423E7" stroke-width="40" stroke-linecap="round" stroke-linejoin="bevel" stroke-dasharray="50 50"/>
      </svg>

      <span style={{ marginLeft: '.2em', marginTop:'0', fontWeight: 800, fontSize:24, color:"#5423E7" }}>
        Deskbox
      </span>
    </>
  ),

  readMore: 'Read Now',

  footer: (
    
    <div className="my-24  border-t-2  mx-auto flex items-center sm:flex-row flex-col">
      
        <a href="https://deskbox.co" className="text-gray-600" rel="noopener noreferrer" target="_blank">
        <p className="text-sm text-gray-500">© By Deskbox.co </p>
        </a>
      

      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
        <a target="_blank" href="" className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a target="_blank" href="" className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a target="_blank" href="" className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a target="_blank" href="" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>

  ),

  postFooter:(
      <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto overflow-hidden bg-white border border-gray-200">
              <div className="px-4 py-5 sm:p-6 lg:p-8 lg:space-x-10">
                  <div className="sm:flex sm:items-start lg:flex lg:flex-row lg:flex space-x-3">

                      <div className="image mr-10">
                        <img className="object-contain w-32 h-32 rounded-full shrink-0" src="https://pbs.twimg.com/profile_images/1797769990063730689/edaoBY7b_400x400.jpg" alt="" />
                      </div>


                      <div className="ml-10 mt-6 sm:mt-0 sm:ml-5 lg:items-center lg:p-x-5 bg-blue-100">
                          <p className="text-lg font-bold text-gray-900 uppercase">Khul Anwar</p>
                          <p className="max-w-sm mt-3 text-sm font-normal leading-6 text-gray-500">Co-Founder Deskbox | Hubrank <br/>
                          We just need to be right once</p>

                          <div className="flex items-center mt-6 space-x-1">
                              <a href="https://x.com/khulanwar" target="_blank" title="" className="text-sm font-bold text-gray-900 hover:underline"> Twitter</a>

                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </section>

  ),

  navigation: {
    prev: true,
    next: true
  },

  relatedPost:(
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Read Latest Articles</h2>
            <p className="max-w-md mx-auto mt-5 text-base font-normal leading-7 text-gray-500">Create custom landing pages with Rareblocks that converts more visitors than any website.</p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 gap-y-12 md:grid-cols-3 gap-x-8 sm:mt-16 md:max-w-none">
            <div className="flex flex-col group">
                <a href="#" title="" className="flex overflow-hidden shrink-0 aspect-w-16 aspect-h-9">
                    <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/3/thumbnail-1.png" alt="" />
                </a>
                <a href="#" title="" className="flex flex-col flex-1">
                    <p className="mt-6 text-2xl font-bold text-gray-900">The unseen of spending three years at Pixelgrade</p>
                    <p className="mt-4 text-sm leading-6 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis auctor odio arcu et dolor.</p>
                </a>
                <div className="mt-6 lg:mt-8">
                    <a href="#" title="" className="inline-flex items-center text-xs font-bold tracking-widest text-gray-900 uppercase group">
                        Continue Reading
                        <svg className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col group">
                <a href="#" title="" className="flex overflow-hidden shrink-0 aspect-w-16 aspect-h-9">
                    <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/3/thumbnail-2.png" alt="" />
                </a>
                <a href="#" title="" className="flex flex-col flex-1">
                    <p className="mt-6 text-2xl font-bold text-gray-900">The unseen of spending three years at Pixelgrade</p>
                    <p className="mt-4 text-sm leading-6 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis auctor odio arcu et dolor.</p>
                </a>
                <div className="mt-6 lg:mt-8">
                    <a href="#" title="" className="inline-flex items-center text-xs font-bold tracking-widest text-gray-900 uppercase group">
                        Continue Reading
                        <svg className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col group">
                <a href="#" title="" className="flex overflow-hidden shrink-0 aspect-w-16 aspect-h-9">
                    <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/3/thumbnail-3.png" alt="" />
                </a>
                <a href="#" title="" className="flex flex-col flex-1">
                    <p className="mt-6 text-2xl font-bold text-gray-900">The unseen of spending three years at Pixelgrade</p>
                    <p className="mt-4 text-sm leading-6 text-gray-500 line-clamp-2">Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis auctor odio arcu et dolor.</p>
                </a>
                <div className="mt-6 lg:mt-8">
                    <a href="#" title="" className="inline-flex items-center text-xs font-bold tracking-widest text-gray-900 uppercase group">
                        Continue Reading
                        <svg className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


  ),


  



  // ... other theme options
};
