import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct Router import
import NavBar from "./components/Navbar"; // Your navigation component
import Home from "./Pages/Home"; // Your Home component
import Coaching from "./Pages/Coaching"; // Your Coaching component
import Visa from "./Pages/Visa"; // Your Visa component
import FeaturesSection from "./components/FeaturesSection"; // Features Section component
import Contact from "./Pages/Contact"; // Your Contact component
import Consultation from "./Pages/Consultation"; // Your Consultation component
import Footer from "./components/Footer";
// import ContactPopup from "./components/ContactPopup"; // Your Contact Popup component
import Happycust from "./Pages/HappyCust";
import VisaCountries from "./Pages/VisaCountries";

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Your navigation component */}
      {/* <ContactPopup /> */}
      {/* Routes for page navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/countries" element={<VisaCountries />} /> {/* Add this */}
        <Route path="/contact" element={<Contact />} /> {/* Add this */}
        <Route path="/consultation" element={<Consultation />} />{" "}
        <Route path="/happy-customers" element={<Happycust />} />{" "}
      </Routes>
      {/* Footer can be added here if you have one */}
      <Footer />
    </Router>
  );
};

export default App;
