import LandingContainer from "../landingPage/landingContainer";

const BlogPagination = () => {
  return (

    <div className="py-12 bg-white sm:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-center space-x-2">
                <a href="#" className="inline-flex items-center justify-center text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md w-9 h-9 hover:bg-gray-50">
                    <span className="sr-only"> Previous </span>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </a>
    
                <a href="#" className="inline-flex items-center justify-center text-base font-semibold text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md sm:text-sm w-9 h-9 hover:bg-gray-50"> 1 </a>
    
                <a href="#" className="inline-flex items-center justify-center text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-gray-900 rounded-md sm:text-sm w-9 h-9"> 2 </a>
    
                <a href="#" className="inline-flex items-center justify-center text-base font-semibold text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md sm:text-sm w-9 h-9 hover:bg-gray-50"> 3 </a>
    
                <a href="#" className="inline-flex items-center justify-center text-base font-semibold text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md sm:text-sm w-9 h-9 hover:bg-gray-50"> 4 </a>
    
                <a href="#" className="inline-flex items-center justify-center text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md w-9 h-9 hover:bg-gray-50">
                    <span className="sr-only"> Next </span>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
    
                <a href="#" className="inline-flex items-center justify-center text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md w-9 h-9 hover:bg-gray-50">
                    <span className="sr-only"> Last </span>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </div>    

    

  );
};

export default BlogPagination;
