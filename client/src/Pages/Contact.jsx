import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";

const Contact = () => {
  const callMeData = useState({
    email: "",
    phone: "",
    address: "",
  });

  return (
    <div
      className="py-19 lg:py-8 bg-top px-4 sm:px-6 lg:px-8  min-h-screen bg-cover "
      style={{
        backgroundImage: `url('src/assets/medium-shot-people-travel-agency.jpg')`,
      }}
    >
      <div className="bg-opacity-50 min-h-screen py-12 scale-100 sm:scale-80 lg:scale-90">
        {" "}
        {/* Added opacity for readability */}
        <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Right Section (Contact Form) */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Left Section (Contact Details) */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600 mb-8">Get in touch with us</p>

            <div className="flex items-center mb-4">
              <IoMailOpen className="scale-150 text-blue-600 mr-2" />
              <a href="mailto:info@example.com" className="text-blue-600">
                vosa@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="scale-150 text-blue-600 mr-2" />
              <span className="text-blue-600">+91 98145-27562</span>
            </div>
            <div className="flex items-center mb-4">
              <FaLocationDot className="scale-150 text-blue-600 mr-2" />
              <span className="text-blue-600">269 Main Street,Jalandhar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
