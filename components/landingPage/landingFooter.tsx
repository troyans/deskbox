const LandingFooter = () => {
  return (
    <section className="items-center justify-between">

        <footer className="py-12 bg-black sm:pt-16 lg:pt-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col items-center space-y-10 lg:justify-between lg:space-y-0 lg:flex-row">
                    <div className="shrink-0">
                        <svg width="136" height="43" viewBox="0 0 136 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="10" width="20" height="20" rx="4" fill="white"/>
                            <path d="M28.65 29V10.375H34.725C36.7417 10.375 38.4917 10.775 39.975 11.575C41.4583 12.375 42.6083 13.475 43.425 14.875C44.2417 16.275 44.65 17.875 44.65 19.675C44.65 21.475 44.2417 23.0833 43.425 24.5C42.6083 25.9 41.4583 27 39.975 27.8C38.4917 28.6 36.7417 29 34.725 29H28.65ZM32.525 25.625H34.825C36.0417 25.625 37.0917 25.3833 37.975 24.9C38.8583 24.4 39.5417 23.7083 40.025 22.825C40.525 21.925 40.775 20.875 40.775 19.675C40.775 18.4583 40.525 17.4083 40.025 16.525C39.5417 15.6417 38.8583 14.9583 37.975 14.475C37.0917 13.9917 36.0417 13.75 34.825 13.75H32.525V25.625ZM53.4314 29.3C51.9814 29.3 50.7231 28.9833 49.6564 28.35C48.5898 27.7 47.7648 26.8333 47.1814 25.75C46.5981 24.6667 46.3064 23.4667 46.3064 22.15C46.3064 20.7833 46.6064 19.5667 47.2064 18.5C47.8231 17.4333 48.6481 16.5917 49.6814 15.975C50.7148 15.3583 51.8814 15.05 53.1814 15.05C54.2648 15.05 55.2231 15.225 56.0564 15.575C56.8898 15.9083 57.5898 16.3833 58.1564 17C58.7398 17.6167 59.1814 18.3333 59.4814 19.15C59.7814 19.95 59.9314 20.825 59.9314 21.775C59.9314 22.0417 59.9148 22.3083 59.8814 22.575C59.8648 22.825 59.8231 23.0417 59.7564 23.225H49.5314V20.475H57.6314L55.8564 21.775C56.0231 21.0583 56.0148 20.425 55.8314 19.875C55.6481 19.3083 55.3231 18.8667 54.8564 18.55C54.4064 18.2167 53.8481 18.05 53.1814 18.05C52.5314 18.05 51.9731 18.2083 51.5064 18.525C51.0398 18.8417 50.6898 19.3083 50.4564 19.925C50.2231 20.5417 50.1314 21.2917 50.1814 22.175C50.1148 22.9417 50.2064 23.6167 50.4564 24.2C50.7064 24.7833 51.0898 25.2417 51.6064 25.575C52.1231 25.8917 52.7481 26.05 53.4814 26.05C54.1481 26.05 54.7148 25.9167 55.1814 25.65C55.6648 25.3833 56.0398 25.0167 56.3064 24.55L59.3064 25.975C59.0398 26.6417 58.6148 27.225 58.0314 27.725C57.4648 28.225 56.7898 28.6167 56.0064 28.9C55.2231 29.1667 54.3648 29.3 53.4314 29.3ZM67.4896 29.3C65.9896 29.3 64.6813 28.95 63.5646 28.25C62.4646 27.5333 61.7146 26.575 61.3146 25.375L64.0646 24.075C64.4146 24.8083 64.8896 25.3833 65.4896 25.8C66.0896 26.2167 66.7563 26.425 67.4896 26.425C68.023 26.425 68.4313 26.3167 68.7146 26.1C68.998 25.8833 69.1396 25.5833 69.1396 25.2C69.1396 25 69.0896 24.8333 68.9896 24.7C68.8896 24.55 68.7396 24.4167 68.5396 24.3C68.3396 24.1833 68.0896 24.0833 67.7896 24L65.4646 23.35C64.348 23.0333 63.4896 22.525 62.8896 21.825C62.2896 21.1083 61.9896 20.2667 61.9896 19.3C61.9896 18.45 62.2063 17.7083 62.6396 17.075C63.073 16.4417 63.6813 15.95 64.4646 15.6C65.248 15.2333 66.148 15.05 67.1646 15.05C68.498 15.05 69.6646 15.3667 70.6646 16C71.6813 16.6167 72.398 17.4917 72.8146 18.625L70.0396 19.925C69.8396 19.3583 69.473 18.9083 68.9396 18.575C68.423 18.225 67.8313 18.05 67.1646 18.05C66.6813 18.05 66.298 18.15 66.0146 18.35C65.748 18.55 65.6146 18.825 65.6146 19.175C65.6146 19.3583 65.6646 19.525 65.7646 19.675C65.8646 19.825 66.023 19.9583 66.2396 20.075C66.473 20.1917 66.7563 20.3 67.0896 20.4L69.2646 21.05C70.398 21.3833 71.2646 21.8917 71.8646 22.575C72.4646 23.2417 72.7646 24.0667 72.7646 25.05C72.7646 25.9 72.5396 26.6417 72.0896 27.275C71.6563 27.9083 71.048 28.4083 70.2646 28.775C69.4813 29.125 68.5563 29.3 67.4896 29.3ZM75.0059 29V10.075H78.7559V22.2L77.3559 21.75L83.3809 15.35H88.0059L83.0559 20.85L87.9809 29H83.7309L79.6059 22.075L81.7809 21.525L77.6059 26.075L78.7559 23.9V29H75.0059ZM97.3043 29.3C96.371 29.3 95.5043 29.1333 94.7043 28.8C93.921 28.45 93.2876 27.9417 92.8043 27.275L93.1543 26.5V29H89.6543V10.075H93.4043V17.95L92.8293 17.2C93.2793 16.5167 93.8876 15.9917 94.6543 15.625C95.4376 15.2417 96.3293 15.05 97.3293 15.05C98.6293 15.05 99.8043 15.3667 100.854 16C101.904 16.6333 102.738 17.4917 103.354 18.575C103.971 19.6417 104.279 20.8417 104.279 22.175C104.279 23.4917 103.971 24.6917 103.354 25.775C102.754 26.8583 101.929 27.7167 100.879 28.35C99.8293 28.9833 98.6376 29.3 97.3043 29.3ZM96.8543 25.925C97.5543 25.925 98.171 25.7667 98.7043 25.45C99.2376 25.1333 99.6543 24.6917 99.9543 24.125C100.254 23.5583 100.404 22.9083 100.404 22.175C100.404 21.4417 100.254 20.8 99.9543 20.25C99.6543 19.6833 99.2376 19.2417 98.7043 18.925C98.171 18.5917 97.5543 18.425 96.8543 18.425C96.1876 18.425 95.5876 18.5833 95.0543 18.9C94.5376 19.2167 94.1293 19.6583 93.8293 20.225C93.546 20.7917 93.4043 21.4417 93.4043 22.175C93.4043 22.9083 93.546 23.5583 93.8293 24.125C94.1293 24.6917 94.5376 25.1333 95.0543 25.45C95.5876 25.7667 96.1876 25.925 96.8543 25.925ZM113.251 29.3C111.901 29.3 110.667 28.9917 109.551 28.375C108.451 27.7583 107.567 26.9167 106.901 25.85C106.251 24.7667 105.926 23.5417 105.926 22.175C105.926 20.7917 106.251 19.5667 106.901 18.5C107.567 17.4333 108.451 16.5917 109.551 15.975C110.667 15.3583 111.901 15.05 113.251 15.05C114.601 15.05 115.826 15.3583 116.926 15.975C118.026 16.5917 118.901 17.4333 119.551 18.5C120.217 19.5667 120.551 20.7917 120.551 22.175C120.551 23.5417 120.217 24.7667 119.551 25.85C118.901 26.9167 118.026 27.7583 116.926 28.375C115.826 28.9917 114.601 29.3 113.251 29.3ZM113.251 25.925C113.934 25.925 114.526 25.7667 115.026 25.45C115.542 25.1333 115.942 24.6917 116.226 24.125C116.526 23.5583 116.676 22.9083 116.676 22.175C116.676 21.4417 116.526 20.8 116.226 20.25C115.942 19.6833 115.542 19.2417 115.026 18.925C114.526 18.5917 113.934 18.425 113.251 18.425C112.567 18.425 111.967 18.5917 111.451 18.925C110.934 19.2417 110.526 19.6833 110.226 20.25C109.942 20.8 109.801 21.4417 109.801 22.175C109.801 22.9083 109.942 23.5583 110.226 24.125C110.526 24.6917 110.934 25.1333 111.451 25.45C111.967 25.7667 112.567 25.925 113.251 25.925ZM121.196 29L125.971 22.15L121.171 15.35H125.521L129.121 20.65H127.221L130.821 15.35H135.171L130.371 22.15L135.121 29H130.796L127.271 23.7H129.071L125.546 29H121.196Z" fill="white"/>
                            <path opacity="0.8" d="M11.2 23.68L11.2 20.28C11.2 18.52 11.6 17.08 12.4 15.96C13.2 14.8133 14.3733 14.0667 15.92 13.72V15.52C15.0667 15.7333 14.44 16.1333 14.04 16.72C13.64 17.28 13.3867 18 13.28 18.88H15.12L15.12 23.68H11.2ZM4.52 23.68L4.52 20.28C4.52 18.52 4.90667 17.08 5.68 15.96C6.48 14.8133 7.65333 14.0667 9.2 13.72V15.52C8.37333 15.7333 7.74667 16.1333 7.32 16.72C6.92 17.28 6.68 18 6.6 18.88H8.4V23.68H4.52Z" fill="#232323"/>
                        </svg>
                    </div>
        
                    <nav className="flex items-center justify-center space-x-6 sm:space-x-16 xl:space-x-20">
                        <a href="#feature" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> Product </a>
        
                        <a href="#feature" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> Features </a>
        
                        <a href="#cta" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> Pricing </a>
        
                        <a href="#" title="" className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"> Resources </a>
                    </nav>
        
                    <ul className="flex items-center justify-end space-x-3">
                        <li>
                            <a href="#" title="" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" target="_blank" rel="noopener">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
        
                        <li>
                            <a href="#" title="" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" target="_blank" rel="noopener">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </a>
                        </li>
        
                        <li>
                            <a href="#" title="" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" target="_blank" rel="noopener">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
        
                        <li>
                            <a href="#" title="" className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-600" target="_blank" rel="noopener">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
        
                <div className="pt-12 mt-12 text-center border-t border-gray-700 sm:mt-16 lg:mt-20">
                    <p className="text-sm font-normal text-gray-300">© Copyright 2022, All Rights Reserved by Deskbox</p>
                </div>
            </div>
        </footer>
        

</section>
  );
};

export default LandingFooter;
