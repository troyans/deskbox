import LandingContainer from "../landingPage/landingContainer";
import Card from "../elements/card";
import Sprikle from "../elements/sprikle";
import features from "@/config/featureSet";
import why from "@/config/whySet";

const LandingFeature = () => {
  return (

    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Here are some of the ways you can use Deskbox Chatbot</h2>
            
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div className="md:px-4 lg:px-10">
                <img className="rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg" alt="" />
                <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Internal Knowledge Base</h3>
                <p className="mt-4 text-base text-gray-600">Build a self-service knowledge base for internal use</p>
            </div>

            <div className="md:px-4 lg:px-10 ">
                <img className="rounded-lg h-30" src="img/customer-support-2.png" alt="" />
                <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Customer Support</h3>
                <p className="mt-4 text-base text-gray-600">Available 24/7, increase customer satisfaction with personalized assistance tailored to your customers' needs.</p>
            </div>


            <div className="md:px-4 lg:px-10 overflow-hidden">
                <img className="rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg" alt="" />
                <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Lead Generation</h3>
                <p className="mt-4 text-base text-gray-600">Configure your chatbot to gather and qualify leads while delivering a personalized experience to your customers</p>
            </div>

            
        </div>
    </div>
</section>
    



    

  );
};

export default LandingFeature;
