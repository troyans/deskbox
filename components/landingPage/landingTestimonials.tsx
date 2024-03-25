import React from "react";
import LandingContainer from "./landingContainer";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, 
    a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur.`,
  },
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, 
    a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur.`,
  },
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, 
    a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur.`,
  },
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, 
    a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur.`,
  },
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, 
    a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur.`,
  },
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, 
    a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur.`,
  },
];

const LandingTestimonials = () => {
  return (
    <div className="text-gray-300" id="testimonials">
      <LandingContainer>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border rounded-3xl bg-white dark:bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="/favicon.ico"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-8 text-gray-700 dark:text-white">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </LandingContainer>
    </div>
  );
};

export default LandingTestimonials;
