import React from "react";
import WhatsappLogo from "../assets/whatsapp.png"; // Assuming you want to use your uploaded image here

const WhatsAppButton = () => {
  const phoneNumber = "9034442356"; // Replace with your phone number
  const message = "Hello! I need help with...";

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex justify-center items-center">
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex justify-center items-center"
      >
        <div className="sm:w-18 sm:h-18 bg-green-500 rounded-full shadow-lg flex justify-center items-center transition-transform hover:scale-110 hover:shadow-2xl">
          <img
            src={WhatsappLogo}
            alt="Chat on WhatsApp"
            className="w-14 h-14 sm:w-10 sm:h-10 object-contain"
          />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
