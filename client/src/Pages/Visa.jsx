import React from "react";

const Visa = () => {
  const visaServices = [
    {
      img: "/src/assets/visa-c1.png",
      heading: "Visa Assessment",
      description:
        "Evaluate your eligibility for a visa, including assessing your academic and professional background for the application process.",
    },
    {
      img: "/src/assets/visa-c2.png",

      heading: "Application Process",
      description:
        "Step-by-step guidance on applying for a visa, including filling out forms, submitting documents, and tracking your application status.",
    },
    {
      img: "/src/assets/visa-c3.png",

      heading: "Document Preparation",
      description:
        "Assistance with gathering and preparing all necessary documents, including financial statements, recommendation letters, and more.",
    },
    {
      img: "/src/assets/visa-c4.png",

      heading: "Interview Coaching",
      description:
        "Tips and practice for visa interviews, helping you to confidently answer questions and present your case effectively to the visa officer.",
    },
  ];

  return (
    <>
      <div className="h-auto w-full py-20 relative z-10 bg-[#f5f6ff]">
        <div className="max-w-7xl mx-auto text-center sm:mb-10 md:mb-2 sm:px-8 lg:px-8 ">
          {/* Heading */}
          <h2 className="text-3xl font-Poppins sm:text-4xl font-extrabold text-gray-900">
            Let’s know the process
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Find and book a great experience.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
          {visaServices.map((info, index) => {
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md m-4"
              >
                <img
                  src={info.img}
                  alt={info.heading}
                  className="w-full h-32 object-contain rounded-t-lg mb-4"
                />
                <h1 className="text-xl font-bold mb-2">{info.heading}</h1>
                <p className="text-gray-700">{info.description}</p>
              </div>
            );
          })}
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <button className="w-50 h-10 bg-blue-600 rounded-md text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mb-6">
            Book Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Visa;
