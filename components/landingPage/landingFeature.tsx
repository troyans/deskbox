import LandingContainer from "../landingPage/landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/featureSet";
import why from "@/config/whySet";

const LandingFeature = () => {
  return (

    <section>
      <section id="feature" className="problem bg-black items-center justify-between py-10 px-4">    
        <div className="max-w-7xl mx-auto items-center py-10 sm:px-6">
          <div className="flex flex-col ml-0 gap-y-3">
                <p className="text-xs md:text-base text-white tracking-widest">WHY DESKBOX ?</p>

                <h2 className="text-2xl leading-snug xl:leading-relaxed text-white lg:text-3xl">
                    Customer satisfaction is crucial for  a business.We know it’s hard and stressful ! 
                    So we help you to automate process, reduce your stress in handling customer and help you increase customer satisfaction
                </h2>
          </div>  
        </div>    
      </section>

      <section className="guidance1 py-10 bg-white sm:py-16 lg:py-24 ">
        <div className=" py-20 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                
                <div className="relative px-10 py-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 gap-y-10">
                    
                    <div className="relative w-full max-w-sm mx-auto">
                        <div className=" aspect-w-3 aspect-h-4"> 
                            <img className="relative object-cover scale-125 w-full h-full max-w-xs mx-auto sm:max-w-sm rounded-xl" src="/img/24hours.png" alt="" />
                        </div>
    
                    </div>
                </div>
    
                <div className="md:order-1">
                    <p className="text-base text-[#5423E7] font-bold">Meet Gon</p>
                    <h2 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-4xl">Help Your Customer 24/7</h2>
                    
                    <p className="mt-4 text-lg leading-relaxed text-[#222222] font-light">Gon is AI Powered chatbot designed to handle customer support questions with ease, 24 hours without rest, help your team reduce the workload ensure human-like service in record time</p>
    
                    <a href="#cta" title="" className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-[#5423E7] rounded-md hover:bg-black focus:bg-black" role="button"> Get Started </a>
                </div>
            </div>
        </div>
      </section>

      <section className="guidance2 py-10 bg-black sm:py-16 lg:py-24 ">
        <div className=" py-20 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                
                <div className="relative px-10 py-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 gap-y-10">
                    
                    <div className="relative w-full max-w-sm mx-auto">
                        <div className=" aspect-w-3 aspect-h-4"> 
                            <img className="relative object-cover scale-125 w-full h-full max-w-xs mx-auto sm:max-w-sm rounded-xl" src="/img/knowledgebase.png" alt="" />
                        </div>
    
                    </div>
                </div>
    
                <div className="md:order-1">
                    
                    <h2 className="text-4xl font-bold text-white leading-tight sm:text-4xl lg:text-4xl">Train With Your Own Content</h2>
                    
                    <p className="mt-4 text-lg leading-relaxed text-white font-light">Transform Gon AI to be your expert agent. You can train Gon chatbot with your content (pdf, website) to help you answer question regarding your product and services</p>
    
                    <a href="#cta" title="" className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-[#5423E7] rounded-md hover:bg-black focus:bg-black" role="button"> Get Started </a>
                </div>
            </div>
        </div>
    </section>

    <section className="guidance3 py-10 bg-white sm:py-16 lg:py-24 ">
        <div className=" py-20 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                
                <div className="relative px-10 py-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2 gap-y-10">
                    
                    <div className="relative w-full max-w-sm mx-auto">
                        <div className=" aspect-w-3 aspect-h-4"> 
                            <img className="relative object-cover scale-125 w-full h-full max-w-xs mx-auto sm:max-w-sm rounded-xl" src="/img/human-agent.png" alt="" />
                        </div>
    
                    </div>
                </div>
    
                <div className="md:order-1">
                    
                    <h2 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-4xl">Escalated to Human</h2>
                    
                    <p className="mt-4 text-lg leading-relaxed text-[#222222] font-light">Escalate to a human agent when necessary. This hybrid approach ensures that users always receive the best possible assistance</p>
    
                    <a href="#cta" title="" className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-[#5423E7] rounded-md hover:bg-black focus:bg-black" role="button"> Get Started </a>
                </div>
            </div>
        </div>
    </section>

    </section>
    



    

  );
};

export default LandingFeature;
