// import React, { useState, useEffect } from "react";

// const ContactPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show the popup every 15 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(true);
//     }, 10000); // 20 seconds interval

//     // Cleanup interval when component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   // Close the popup
//   const closePopup = () => {
//     setIsVisible(false);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed inset-0 bg-opacity-30 backdrop-blur-xs flex justify-center items-center z-50">
//           <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-11/12 sm:w-96 md:w-1/3 relative">
//             <div className="flex justify-end">
//               <button
//                 onClick={closePopup}
//                 className="w-6 h-6 rounded-full bg-gray-300 font-medium absolute text-gray-600 hover:text-black"
//               >
//                 X
//               </button>
//             </div>
//             <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
//               Contact Us
//             </h2>
//             <p className="mb-4 text-center sm:text-left">
//               Please fill out the contact details below:
//             </p>
//             <form>
//               <div className="mb-4">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 "
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-blue-600"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   type="number"
//                   id="phone"
//                   name="phone"
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-blue-600"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="address"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-blue-600"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 bg-blue-600 text-white font-bold rounded-md"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ContactPopup;
