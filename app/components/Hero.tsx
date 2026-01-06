import Image from "next/image";
import React from "react";
import AuthourCard from "@/app/components/AuthourCard";

const Hero = () => {
  return (
    <div className="w-full gap-y-1.5">
      <p className="inline-block rounded-xl text-xs bg-blue-100 mt-16 px-4 py-1 text-blue-700 font-medium">
        Read our Blog
      </p>

      <h1 className="mt-4 text-5xl font-bold text-gray-900">Blogs Unlimited</h1>
      <h3 className="mt-4 lext-lg text-gray-600 opacity-80">
        Latest Articles and updaes from Industries, Tech & Brands. For Real!
      </h3>

      {/* Hero Image element */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] mt-8 md:mt-12 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill={true}
          src={"/hero-photo.jpg"}
          alt="Hero"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />

        {/* Gradient overlay */}
        <div className="hero-image"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white backdrop-blur-md">
          {/* Tags */}

          {/* Article heading */}
          <h2 className="font-semibold text-2xl">
            Design in the Age of AI; How to adapt Lazily
          </h2>
          <p className="mt-4 font-light text-white/80 text-sm leading-tight max-w-3xl">
            With AI Tools, you can unleash your innner Designer and just stop
            caring about anything else.
          </p>

          <div className="flex items-center gap-2 mt-4 justify-between">
            <div className="flex items-center gap-2">
              {/* Authour Details */}
              <AuthourCard height={40} width={40} />

              {/* Publishing date */}
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Jun 25, 2025</span>
              </div>
            </div>

            {/* Tags of article */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                UI/UX
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                Design System
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                Sleep & Care
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
