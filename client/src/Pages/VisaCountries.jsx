import React from "react";

const VisaCountries = () => {
  // List of countries you provide visa services for
  const countries = [
    { name: "USA", image: "/src/assets/flags/america.png" },
    { name: "Canada", image: "/src/assets/flags/canada.png" },
    { name: "Australia", image: "/src/assets/flags/Australia.png" },
    { name: "UK", image: "/src/assets/flags/UK.png" },
    { name: "New Zealand", image: "/src/assets/flags/New Zealand.png" },
    { name: "Germany", image: "/src/assets/flags/Germany.png" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-Poppins font-extrabold text-gray-900">
          Countries We Provide Visa Consulting For
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Get your visa to these countries with our expert guidance!
        </p>

        {/* Country List */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img
                src={country.image} // Use the image path for each country's flag
                alt={`${country.name} Flag`}
                className="w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {country.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCountries;
