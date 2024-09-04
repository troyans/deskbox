import Sprikle from "../elements/sprikle";
import Video from "../elements/video";
import YoutubeVideo from "../elements/youtubeVideo";
import LandingContainer from "./landingContainer";

const LandingHowTo = () => {
  return (
    
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-20 xl:gap-x-40">
            <div>
                <img className="object-cover w-full rounded-2xl" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/how-it-works/1/girl-with-laptop.png" alt="" />
            </div>

            <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">How it works ?</h2>

                <div className="flow-root mt-12 xl:mt-20">
                    <ul className="-my-8 divide-y divide-gray-200 xl:-my-10">
                        <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                            <span className="text-4xl font-medium text-gray-300"> 01. </span>
                            <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">Train your chatbot by inputting your URL / PDF containing information that want to set as the source of the chatbot knowledge base</p>
                        </li>

                        <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                            <span className="text-4xl font-medium text-gray-300"> 02. </span>
                            <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">Customize look and feel so that match with your brand</p>
                        </li>

                        <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                            <span className="text-4xl font-medium text-gray-300"> 03. </span>
                            <p className="mt-6 text-xl font-normal text-gray-900 sm:mt-0 sm:ml-9">Set live your chatbot with embed code and integrate it with your existing platform</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default LandingHowTo;
