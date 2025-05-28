import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FeaturesSection = () => {
  return (
    <section className="py-26 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-Poppins font-extrabold text-gray-900">
          Let’s know the feature
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Find and book a great experience.
        </p>

        {/* Feature Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="/src/assets/f1.png" // Replace with your image path
              alt="Visa Processing"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Visa Processing
            </h3>
            <p className="mt-2 text-gray-600">
              Streamlined and efficient visa services for smooth travel.
            </p>
            <Link
              to="/visa-processing" // Replace with the correct path for Visa Processing
              className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More
            </Link>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="/src/assets/f2.png" // Replace with your image path
              alt="Tour Guide"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Tour Guide
            </h3>
            <p className="mt-2 text-gray-600">
              Expert local guides to enhance your travel experience.
            </p>
            <Link
              to="/tour-guide" // Replace with the correct path for Tour Guide
              className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More
            </Link>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              src="/src/assets/f3.png" // Replace with your image path
              alt="Exclusive Deals"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Exclusive Deals
            </h3>
            <p className="mt-2 text-gray-600">
              Special offers and discounts on flights, hotels, and tours.
            </p>
            <Link
              to="/exclusive-deals" // Replace with the correct path for Exclusive Deals
              className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
