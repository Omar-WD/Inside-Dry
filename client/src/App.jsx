import { useEffect, useState, useLayoutEffect } from "react";
import AboutUs from "./components/AboutUs";
import BodySection1 from "./components/BodySection1";
import ContactForm from "./components/ContactForm";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sub_Services from "./components/Sub_Services";
import TopHeader from "./components/TopHeader";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setIsLoading(false);
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  // Scroll to top when location changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-my-blue"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[100vh]">
      <TopHeader />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BodySection1 />
            <AboutUs />
            <Sub_Services />
            <Feedback />
            <ContactForm />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}
