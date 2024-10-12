import LandingContainer from "../landingPage/landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/featureSet";
import why from "@/config/whySet";

const LandingWhy= () => {
  return (

    
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:max-w-3xl lg:mx-auto">Why Our AI-Powered Chatbot is Perfect for Your Hotel:</h2>
            </div>

            <div className="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
                <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">

                    <div className="flex items-start">
                        <svg className="flex-shrink-0 w-14 h-14 text-fuchsia-600 icon glyph" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="conversation-alt-2" fill="#ffffff" stroke="#5423e7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,9V21a1,1,0,0,1-.55.89A.91.91,0,0,1,21,22a1,1,0,0,1-.6-.2L16.67,19H10a2,2,0,0,1-2-2V9a2,2,0,0,1,2-2H20A2,2,0,0,1,22,9Z"></path><path d="M16.27,6H10A3,3,0,0,0,7,9v7l-2.66,1A1,1,0,0,1,4,17a1,1,0,0,1-.61-.21A1,1,0,0,1,3,15.92l.24-3.06A6.6,6.6,0,0,1,2,9,7.27,7.27,0,0,1,9.5,2,7.51,7.51,0,0,1,16.27,6Z"></path></g></svg>
                        

                        <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">Natural, Multilingual Conversations</h3>
                            <p className="mt-4 text-base text-gray-600">Powered by AI, our chatbot delivers personalized, human-like conversations in multiple languages, ensuring smooth communication with guests from around the world.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <svg className="flex-shrink-0 w-14 h-14 text-fuchsia-600" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5432e7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.8702 16.97V18.0701C12.8702 18.2478 12.7995 18.4181 12.6739 18.5437C12.5482 18.6694 12.3778 18.74 12.2001 18.74C12.0224 18.74 11.852 18.6694 11.7264 18.5437C11.6007 18.4181 11.5302 18.2478 11.5302 18.0701V16.9399C11.0867 16.8668 10.6625 16.7051 10.2828 16.4646C9.90316 16.2241 9.57575 15.9097 9.32013 15.54C9.21763 15.428 9.16061 15.2817 9.16016 15.1299C9.16006 15.0433 9.17753 14.9576 9.21155 14.8779C9.24557 14.7983 9.29545 14.7263 9.35809 14.6665C9.42074 14.6067 9.49484 14.5601 9.57599 14.5298C9.65713 14.4994 9.7436 14.4859 9.83014 14.49C9.91602 14.4895 10.0009 14.5081 10.0787 14.5444C10.1566 14.5807 10.2254 14.6338 10.2802 14.7C10.6 15.1178 11.0342 15.4338 11.5302 15.6099V13.0701C10.2002 12.5401 9.53015 11.77 9.53015 10.76C9.55019 10.2193 9.7627 9.70353 10.1294 9.30566C10.4961 8.9078 10.9929 8.65407 11.5302 8.59009V7.47998C11.5302 7.30229 11.6007 7.13175 11.7264 7.0061C11.852 6.88045 12.0224 6.81006 12.2001 6.81006C12.3778 6.81006 12.5482 6.88045 12.6739 7.0061C12.7995 7.13175 12.8702 7.30229 12.8702 7.47998V8.58008C13.2439 8.63767 13.6021 8.76992 13.9234 8.96924C14.2447 9.16856 14.5226 9.43077 14.7402 9.73999C14.8284 9.85568 14.8805 9.99471 14.8901 10.1399C14.8928 10.2256 14.8783 10.3111 14.8473 10.3911C14.8163 10.4711 14.7696 10.5439 14.7099 10.6055C14.6502 10.667 14.5787 10.7161 14.4998 10.7495C14.4208 10.7829 14.3359 10.8001 14.2501 10.8C14.1607 10.7989 14.0725 10.7787 13.9915 10.7407C13.9104 10.7028 13.8384 10.648 13.7802 10.5801C13.5417 10.2822 13.2274 10.054 12.8702 9.91992V12.1699L13.1202 12.27C14.3902 12.76 15.1802 13.4799 15.1802 14.6299C15.163 15.2399 14.9149 15.8208 14.4862 16.2551C14.0575 16.6894 13.4799 16.9449 12.8702 16.97ZM11.5302 11.5901V9.96997C11.3688 10.0285 11.2298 10.1363 11.1329 10.2781C11.0361 10.4198 10.9862 10.5884 10.9902 10.76C10.9984 10.93 11.053 11.0945 11.1483 11.2356C11.2435 11.3767 11.3756 11.4889 11.5302 11.5601V11.5901ZM13.7302 14.6599C13.7302 14.1699 13.3902 13.8799 12.8702 13.6599V15.6599C13.1157 15.6254 13.3396 15.5009 13.4985 15.3105C13.6574 15.1202 13.74 14.8776 13.7302 14.6299V14.6599Z" fill="#5432e7"></path> <path d="M12.58 3.96997H6C4.93913 3.96997 3.92178 4.39146 3.17163 5.1416C2.42149 5.89175 2 6.9091 2 7.96997V17.97C2 19.0308 2.42149 20.0482 3.17163 20.7983C3.92178 21.5485 4.93913 21.97 6 21.97H18C19.0609 21.97 20.0783 21.5485 20.8284 20.7983C21.5786 20.0482 22 19.0308 22 17.97V11.8999" stroke="#5432e7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.3398 8.57992L21.9998 2.91992" stroke="#5432e7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.4805 2.91992H22.0005V7.44992" stroke="#5432e7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                        <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">Increase Direct Booking</h3>
                            <p className="mt-4 text-base text-gray-600">Integrated with your booking engine, the chatbot guides guests through the reservation process seamlessly, driving more direct bookings.</p>
                        </div>

                    </div>

                    <div className="flex items-start">
                        <svg className="flex-shrink-0 w-14 h-14 text-fuchsia-600" fill="#5423e7"  viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#5423e7" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.6,21.3c-.3.226-.619.464-.89.7H16a1,1,0,0,1,0,2H12a1,1,0,0,1-1-1c0-1.5,1.275-2.456,2.4-3.3.75-.562,1.6-1.2,1.6-1.7a1,1,0,0,0-2,0,1,1,0,0,1-2,0,3,3,0,0,1,6,0C17,19.5,15.725,20.456,14.6,21.3ZM23,15a1,1,0,0,0-1,1v3H21a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h1v2a1,1,0,0,0,2,0V16A1,1,0,0,0,23,15ZM13,12V7a1,1,0,0,0-2,0v4H8a1,1,0,0,0,0,2h4A1,1,0,0,0,13,12ZM23,2a1,1,0,0,0-1,1V5.374A12,12,0,1,0,7.636,23.182,1.015,1.015,0,0,0,8,23.25a1,1,0,0,0,.364-1.932A10,10,0,1,1,20.636,7H18a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V3A1,1,0,0,0,23,2Z"></path></g></svg>

                        <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">24/7 Instant Responses</h3>
                            <p className="mt-4 text-base text-gray-600">Provide round-the-clock support with fast, automated responses, so you never miss an opportunity to assist or convert a potential guest.</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <svg className="flex-shrink-0 w-14 h-14 text-fuchsia-600" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#5423e7" stroke="#5423e7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>focus_point [#5423e7]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -4439.000000)" fill="#5423e7"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M136,4290.0016 L136,4287.9986 C136,4287.4466 135.553,4286.9996 135.002,4286.9996 L132.998,4286.9996 C132.447,4286.9996 132,4287.4466 132,4287.9986 L132,4290.0016 C132,4290.5526 132.447,4290.9996 132.998,4290.9996 L135.002,4290.9996 C135.553,4290.9996 136,4290.5526 136,4290.0016 L136,4290.0016 Z M136,4292.9996 L135,4292.9996 L135,4293.9996 C135,4294.5526 134.552,4294.9996 134,4294.9996 C133.448,4294.9996 133,4294.5526 133,4293.9996 L133,4292.9996 L132,4292.9996 C130.895,4292.9996 130,4292.1046 130,4290.9996 L130,4289.9996 L129,4289.9996 C128.448,4289.9996 128,4289.5526 128,4288.9996 C128,4288.4476 128.448,4287.9996 129,4287.9996 L130,4287.9996 L130,4286.9996 C130,4285.8956 130.895,4284.9996 132,4284.9996 L133,4284.9996 L133,4283.9996 C133,4283.4476 133.448,4282.9996 134,4282.9996 C134.552,4282.9996 135,4283.4476 135,4283.9996 L135,4284.9996 L136,4284.9996 C137.105,4284.9996 138,4285.8956 138,4286.9996 L138,4287.9996 L139,4287.9996 C139.552,4287.9996 140,4288.4476 140,4288.9996 C140,4289.5526 139.552,4289.9996 139,4289.9996 L138,4289.9996 L138,4290.9996 C138,4292.1046 137.105,4292.9996 136,4292.9996 L136,4292.9996 Z M142,4278.9996 L137,4278.9996 C136.448,4278.9996 136,4279.4476 136,4279.9996 C136,4280.5526 136.448,4280.9996 137,4280.9996 L141,4280.9996 C141.552,4280.9996 142,4281.4476 142,4281.9996 L142,4285.9996 C142,4286.5526 142.448,4286.9996 143,4286.9996 C143.552,4286.9996 144,4286.5526 144,4285.9996 L144,4280.9996 C144,4279.8956 143.105,4278.9996 142,4278.9996 L142,4278.9996 Z M143,4290.9996 C142.448,4290.9996 142,4291.4476 142,4291.9996 L142,4295.9996 C142,4296.5526 141.552,4296.9996 141,4296.9996 L137,4296.9996 C136.448,4296.9996 136,4297.4476 136,4297.9996 C136,4298.5526 136.448,4298.9996 137,4298.9996 L142,4298.9996 C143.105,4298.9996 144,4298.1046 144,4296.9996 L144,4291.9996 C144,4291.4476 143.552,4290.9996 143,4290.9996 L143,4290.9996 Z M131,4296.9996 L127,4296.9996 C126.448,4296.9996 126,4296.5526 126,4295.9996 L126,4291.9996 C126,4291.4476 125.552,4290.9996 125,4290.9996 C124.448,4290.9996 124,4291.4476 124,4291.9996 L124,4296.9996 C124,4298.1046 124.895,4298.9996 126,4298.9996 L131,4298.9996 C131.552,4298.9996 132,4298.5526 132,4297.9996 C132,4297.4476 131.552,4296.9996 131,4296.9996 L131,4296.9996 Z M125,4286.9996 C125.552,4286.9996 126,4286.5526 126,4285.9996 L126,4281.9996 C126,4281.4476 126.448,4280.9996 127,4280.9996 L131,4280.9996 C131.552,4280.9996 132,4280.5526 132,4279.9996 C132,4279.4476 131.552,4278.9996 131,4278.9996 L126,4278.9996 C124.895,4278.9996 124,4279.8956 124,4280.9996 L124,4285.9996 C124,4286.5526 124.448,4286.9996 125,4286.9996 L125,4286.9996 Z M124.01,4288.9996 L124,4289.0096 L124,4288.9906 L124.01,4288.9996 Z" id="focus_point-[#5423e7]"> </path> </g> </g> </g> </g></svg>
                        <div className="ml-5">
                            <h3 className="text-lg font-semibold text-black">Focus on What Matters</h3>
                            <p className="mt-4 text-base text-gray-600">Free your team from repetitive inquiries and let them handle more complex, guest-pleasing interactions. For complex questions, our chatbot works in tandem with human agents.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    



    

  );
};

export default LandingWhy;
