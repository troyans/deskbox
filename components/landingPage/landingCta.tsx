import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Base } from "@/types/base";

export default function LandingCta() {
  const { data: session, status } = useSession();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [res, setRes] = useState<Base | null>();
  const inputRef = useRef(null);

  const userEmail = session?.user?.email;

  const subscribeUser = async (e) => {
    e.preventDefault();

    // ReactTagManager.action({
    //   event: "click_all_button",
    //   clickText: "Request Access",
    // });
    const formBody = `email=${encodeURIComponent(inputRef.current.value)}`;

    try {
      const res = await fetch("https://app.loops.so/api/newsletter-form/cm0nme3iy00lrao1h8fyxkxz0", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(await res.json())

      setRes(await res.json());
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
                    <input type="email" name="email" id="" required={true} ref={inputRef} placeholder="you@email.com" className="block w-full px-6 py-4 text-white placeholder-gray-500 bg-black border border-transparent rounded-full sm:py-5 focus:border-transparent focus:ring-0" />
                </div>
            </div>
            <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Join Waiting List</button>
            </div>
          </form>

          {res && (
            <div className="text-center text-xs mt-2">
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
