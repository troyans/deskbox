import LandingContainer from "../landingPage/landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/featureSet";
import why from "@/config/whySet";

const LandingFeature = () => {
  return (

    
    <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center lg:max-w-3xl lg:text-center mx-auto leading-relaxed">
                <h3 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How Deskbox Chatbot Increases Your Direct Bookings?</h3>
            </div>

             
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="sm:pr-0">
                            <div className="relative max-w-xs mb-12">
                                <img className="object-bottom scale-125 mx-auto items-center rounded-md" src="img/happy-customer-get-fast-response.jpg" alt="" />
            
                                
                            </div>
                        </div>
            
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">24/7 Instant Responses</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">Never miss a booking opportunity with instant replies to guest inquiries, anytime, day or night.</p>
                        </div>
                    </div>
                </div>
            </section>


            
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                        <div className="">
                            <h3 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Human Support for Complex Queries</h3>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">Seamlessly hand off more complex or personalized questions to human agents, ensuring every guest feels heard and valued.</p>
                        </div>
            
                        <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                                <img className="ml-auto rounded-md scale-125" src="img/customer-support-handle-complex-query.jpg" alt="" />
            
                                
            
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="sm:pr-0">
                            <div className="relative max-w-xs mb-12">
                                <img className="object-bottom rounded-md scale-125" src="img/booking-engine-integration.jpg" alt="" />
            
                              
                            </div>
                        </div>
            
                        <div>
                            <h3 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Integrated With Booking Engine</h3>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">Our chatbot integrates directly with your booking engine, guiding visitors step-by-step through the reservation process for a smooth, direct booking experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
    



    

  );
};

export default LandingFeature;
