import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Base } from "@/types/base";

export default function LandingCta() {
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [res, setRes] = useState<Base | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // For success message
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error handling
  const inputRef = useRef<HTMLInputElement | null>(null);

  const userEmail = session?.user?.email;

  const subscribeUser = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const email = inputRef.current?.value;
    if (!email) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    try {
      // Send the form data to Loops.so API
      const response = await fetch("https://app.loops.so/api/newsletter-form/cm0nme3iy00lrao1h8fyxkxz0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Thank you! You have successfully subscribed.");
        setErrorMessage(null);
        inputRef.current!.value = ""; // Clear the input field
      } else {
        setErrorMessage("There was an error. Please try again.");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setSuccessMessage(null);
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
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Join the waiting list
          </h2>

          <form onSubmit={subscribeUser} className="relative mt-8 rounded-full sm:mt-12">
            <div className="relative">
              <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>

              <div className="relative">
                <input
                  ref={inputRef}
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="block w-full px-6 py-4 text-white placeholder-gray-500 bg-black border border-transparent rounded-full sm:py-5 focus:border-transparent focus:ring-0"
                  required
                />
              </div>
            </div>

            <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
              >
                Join Waiting List
              </button>
            </div>
          </form>

          {successMessage && (
            <p className="mt-4 text-green-500">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-red-500">{errorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}
