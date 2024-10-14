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

<div className="bg-white">
        <header className="bg-[#FCF8F1] bg-opacity-30 bg-red">

            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 xl:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex space-x-1">
                            <img className="w-auto h-8 items-center" src="img/logo-white.png" alt="" />
                            <p className="font-bold text-2xl items-center">DESKBOX</p>
                        </a>
                    </div>
    
                    
    
                    
                </div>
            </div>
        </header>
    
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-sm">Chatbot for Hotels</p>
                        <h1 className="mt-0 text-4xl font-bold text-black lg:mt-1 sm:text-5xl xl:text-5xl">Boost <span className="text-[#5423E7]">Direct Bookings</span> with AI-Powered Hotel Chatbot</h1>
                        <p className="mt-4 text-base text-gray-600 lg:mt-8 sm:text-xl lg:text-lg">Increase direct bookings and enhance guest service 24/7 with our smart hotel chatbot. Streamline reservations, personalize interactions, and reduce third-party costs effortlessly </p>
    
                        <a href="#cta" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            Join The Waiting List
                            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
    
                      
                    </div>
    
                    <div>
                        <img className="w-full rounded-xl" src="img/hero.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>

      
      
      <CustomDialog
        isOpen={showDialog}
        closeModal={() => setShowDialog(false)}
      />
    </>
  );
}
