import LandingContainer from "../landingPage/landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/featureSet";
import why from "@/config/whySet";

const LandingIntegration= () => {
  return (

    
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Integrate with apps</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Streamline your workflow. Integrate Deskbox Chatbot to your existing platform</p>
            </div>
    
            <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                
    
                <div className="overflow-hidden bg-white rounded shadow">
                    <div className="p-8">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png" alt="" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-semibold text-black">Slack</p>
                                
                            </div>
                            
                        </div>
                        <p className="text-base leading-relaxed text-gray-600 mt-7">Build effective communication in your team by adding a chatbot in Slack </p>
                    </div>
                </div>
    
                
    
                <div className="overflow-hidden bg-white rounded shadow">
                    <div className="p-8">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 w-12 h-auto" src="img/whatsapp.png" alt="" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-semibold text-black">Whatsapp</p>
                                
                            </div>
                            <svg className="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p className="text-base leading-relaxed text-gray-600 mt-7">Set up your chatbot on WhatsApp to provide instant responses to your customer</p>
                    </div>
                </div>


                <div className="overflow-hidden bg-white rounded shadow">
                    <div className="p-8">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 w-12 h-auto" src="img/logo-hubspot.png" alt="" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-semibold text-black">Hubspot</p>
                                
                            </div>
                            <svg className="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p className="text-base leading-relaxed text-gray-600 mt-7">Sync Contact to Hubspot CRM automatically</p>
                    </div>
                </div>
    
                
    
                
            </div>
    
            
        </div>
    </section>
    



    

  );
};

export default LandingIntegration;
