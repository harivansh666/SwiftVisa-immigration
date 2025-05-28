import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // pt-16 adds top padding equal to navbar height (h-16 = 64px)
    // min-h-screen makes it full screen height
    // Together they create: full screen - navbar height
    <section className="bg-[#f5f6ff] min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Empowering Your Dreams with Tailored{" "}
              <span className="text-blue-600">Visa</span> Consulting Services
            </h1>
            <p className="mt-6 text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
              Navigating Visa Applications Made Easy – Your Trusted Partner in
              Achieving Your Dreams. Whether you're pursuing education, career
              growth, or a new chapter in a foreign land.
            </p>

            {/* Button Links using React Router */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/visa"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md text-base font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Explore Visa Options
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/src/assets/man reamove bg.png"
                alt="Owner"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
