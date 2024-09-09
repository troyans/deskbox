import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Base } from "@/types/base";

export default function LandingCta() {
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [res, setRes] = useState<Base | null>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const userEmail = session?.user?.email;

  // List of free email providers
  const freeEmailDomains = [
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", 
    "aol.com", "icloud.com", "mail.com", "zoho.com"
  ];

  // Function to validate email domain
  const isFreeEmail = (email: string) => {
    const emailDomain = email.split("@")[1];
    return freeEmailDomains.includes(emailDomain);
  };

  const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = inputRef.current?.value;
    if (!email) return;

    // Check if email domain is from a free provider
    if (isFreeEmail(email)) {
      setErrorMessage("Please use your company email address");
      return; // Prevent form submission
    }

    const formBody = `email=${encodeURIComponent(email)}`;

    try {
      const response = await fetch(
        "https://app.loops.so/api/newsletter-form/cm0nme3iy00lrao1h8fyxkxz0",
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setRes(await response.json());
      setErrorMessage(null); // Clear the error message if the submission is successful
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return (
    <section id="cta" className="cta py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center md:max-w-2xl">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Join the waiting list</h2>
          <form onSubmit={subscribeUser} className="relative mt-8 rounded-full sm:mt-12">
            <div className="relative">
              <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <div className="relative">
                <input 
                  type="email" 
                  name="email" 
                  required={true} 
                  ref={inputRef} 
                  placeholder="you@yourcompany.com" 
                  className="block w-full px-6 py-4 text-white placeholder-gray-500 bg-black border border-transparent rounded-full sm:py-5 focus:border-transparent focus:ring-0" 
                />
              </div>
            </div>
            <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
              <button 
                type="submit" 
                className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">
                Join Waiting List
              </button>
            </div>
          </form>

          {/* Show error message if the email is from a free provider */}
          {errorMessage && (
            <div className="text-center text-red-500 text-sm mt-2">
              {errorMessage}
            </div>
          )}

          {/* Show response from the server */}
          {res && (
            <div className="text-center text-sm mt-2">
              {!res.success && (
                <div className="response text-danger">
                  There was an issue submitting your data to the server. Please try again later.
                </div>
              )}
              {res.success && (
                <div className="response text-success">
                  Thank you for joining the waiting list
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
