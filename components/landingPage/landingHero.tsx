import LandingContainer from "./landingContainer";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ProductHunt from "../elements/productHunt";
import Button from "../elements/button";
import CustomDialog from "../elements/customDialog";

export default function LandingHero() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const words = ["NextJs", "AI"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTyping, setCurrentTyping] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentTyping(words[currentWordIndex].substr(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex >= words[currentWordIndex].length) {
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, charIndex, words]);

  return (
    <>
        <section className=" bg-[#5423E7] py-20 overflow-hidden sm:py-16 lg:py-40 xl:py-40">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
                    <div>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-5xl sm:tracking-tight leading-snug">Boost Your Customer Satisfication With Deskbox AI-First Agent</h1>
                        <p className="mt-6 text-base leading-7 text-[#E2E2E2] lg:leading-8 lg:text-base">Available 24/7 for customer, boost team productivity, and elevate customer satisfaction with AI-powered chatbots </p>
                        <div className="mt-8">
                            <a
                                href="#cta"
                                title=""
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black font-semibold transition-all duration-200 bg-white border border-transparent rounded-xl hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                role="button"
                            >
                                Create Your Chatbot
                            </a>
                        </div>
    
                        
                    </div>
    
                    <div>
                        <div className=" aspect-w-3 aspect-h-4 py-10 px-10"> 
                            <img className="relative object-cover scale-125 w-full h-full max-w-xs mx-auto sm:max-w-sm rounded-xl" src="img/chatbot.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

      
      
      <CustomDialog
        isOpen={showDialog}
        closeModal={() => setShowDialog(false)}
      />
    </>
  );
}
