import React from "react";

const HappyCust = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-Poppins font-extrabold text-gray-900">
          Our Happy Customers
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Here's what our satisfied clients say about us!
        </p>

        {/* Customer Testimonials */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Customer Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img
              src="/src/assets/cust-rev1.png" // Replace with your customer's image path
              alt="Customer 1"
              className="w-full h-78 object-cover rounded-lg mb-4" // Full image displayed
            />
            <p className="text-gray-600">
              " Thanks to this consultancy, I got my visa approved quickly! The
              team was very helpful and professional."
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Harmandeep Singh
            </h3>
            <p className="text-sm text-gray-500">Visa Approval - USA</p>
          </div>

          {/* Customer Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img
              src="/src/assets/cust-rev2.png" // Replace with your customer's image path
              alt="Customer 2"
              className="w-full h-78 object-cover rounded-lg mb-4" // Full image displayed
            />
            <p className="text-gray-600">
              "Great experience! The team helped me every step of the way, and
              now I’m living my dream in Canada!"
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Sukhpreet Singh
            </h3>
            <p className="text-sm text-gray-500">Visa Approval - Canada</p>
          </div>

          {/* Customer Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <img
              src="/src/assets/cust-rev3.png" // Replace with your customer's image path
              alt="Customer 3"
              className="w-full h-78 object-cover rounded-lg mb-4" // Full image displayed
            />
            <p className="text-gray-600">
              "The service was exceptional. I felt supported and guided through
              the entire immigration process."
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Paramjit Kaur
            </h3>
            <p className="text-sm text-gray-500">Visa Approval - Australia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCust;
