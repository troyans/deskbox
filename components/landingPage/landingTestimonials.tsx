import React from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Daniella Doe",
    role: "Mobile dev",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
    aliquid quo eum quae quos illo earum ipsa doloribus nostrum
    minus libero aspernatur laborum cum, a suscipit, ratione ea
    totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing
    elit. Architecto laboriosam deleniti aperiam ab veniam sint non
    cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: "Jane doe",
    role: "Marketing",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    text: `Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
    cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: "Yanick Doe",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Architecto laboriosam deleniti aperiam ab veniam sint non cumque
    quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: "Jane Doe",
    role: "Mobile dev",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Architecto laboriosam deleniti aperiam ab veniam sint non cumque
    quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: "Andy Doe",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Architecto laboriosam deleniti aperiam ab veniam sint non cumque
    quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
  {
    name: "Yanndy Doe",
    role: "Mobile dev",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Architecto laboriosam deleniti aperiam ab veniam sint non cumque
    quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
  },
];

const LandingTestimonials = () => {
  return (
    <section className="why bg-white items-center justify-between py-10 ">
    <div className="max-w-7xl mx-auto items-center py-10">

        <div className="flex flex-col ml-0 gap-y-10">
                
                <h2 className="text-3xl lg:text-5xl leading-snug text-black font-bold mb-10 px-4 text-center">
                    Deskbox helps keep your customers happy
                </h2>

                <div>
                    <section className="py-12 bg-blue-50 sm:py-16 lg:py-20 xl:py-24 rounded-xl">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-24">
                                <div className="relative overflow-hidden group lg:order-2 rounded-2xl lg:rounded-3xl">
                                    <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/1/woman-smiling.png" alt="" />
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 px-8 py-6">
                                        <p className="text-lg font-semibold text-white">Albert Flores</p>
                                        <p className="text-sm font-normal text-gray-400">Product Manager at Jomanar</p>
                                    </div>
                                </div>
                    
                                <div className="lg:order-1">
                                    <svg className="w-auto text-gray-300 h-9" viewBox="0 0 43 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z"
                                        />
                                    </svg>
                                    <blockquote className="mt-8">
                                        <p className="text-2xl font-medium leading-snug tracking-tight text-gray-900 sm:text-3xl">“People now recognise that having a good performance conversation means that something happens as a result.”</p>
                                        <p className="mt-8 text-lg font-normal leading-8 text-gray-600 sm:text-xl sm:leading-9">“With Deskbox, the Customer Support team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.”</p>
                                    </blockquote>
                    
                                    <div className="mt-8 sm:mt-12">
                                        <a href="#" title="" className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline">
                                            Read Success Story
                                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="py-10 bg-white sm:py-16 lg:py-24 rounded-xl">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What our customers say</h2>
                                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                            </div>
                    
                            <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                                <p className="text-sm text-gray-600 truncate">@darrels</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                                                <span className="block text-sky-500">#another</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Leslie Alexander</p>
                                                <p className="text-sm text-gray-600 truncate">@lesslie</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.
                                                <span className="block text-sky-500">#Celebration</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Jenny Wilson</p>
                                                <p className="text-sm text-gray-600 truncate">@jennywilson</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                This is a top quality product. No need to think twice before making it live on web.
                                                <span className="block text-sky-500">#make_it_fast</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Kristin Watson</p>
                                                <p className="text-sm text-gray-600 truncate">@kristinwatson2</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                YFinally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.
                                                <span className="block text-sky-500">#Celebration</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Guy Hawkins</p>
                                                <p className="text-sm text-gray-600 truncate">@jennywilson</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                This is a top quality product. No need to think twice before making it live on web.
                                                <span className="block text-sky-500">#make_it_fast</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Marvin McKinney</p>
                                                <p className="text-sm text-gray-600 truncate">@darrels</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                With Celebration, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.
                                                <span className="block text-sky-500">#dev #tools</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Annette Black</p>
                                                <p className="text-sm text-gray-600 truncate">@darrels</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                                                <span className="block text-sky-500">#another</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                    
                                <div className="overflow-hidden bg-blue-50 rounded-md">
                                    <div className="px-5 py-6">
                                        <div className="flex items-center justify-between">
                                            <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg" alt="" />
                                            <div className="min-w-0 ml-3 mr-auto">
                                                <p className="text-base font-semibold text-black truncate">Floyd Miles</p>
                                                <p className="text-sm text-gray-600 truncate">@darrels</p>
                                            </div>
                                            <a href="#" title="" className="inline-block text-sky-500">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <blockquote className="mt-5">
                                            <p className="text-base text-gray-800">
                                                My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                                                <span className="block text-sky-500">#Celebration</span>
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>

        </div>

        
    </div>    
</section>
  );
};

export default LandingTestimonials;
