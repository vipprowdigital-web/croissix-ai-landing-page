import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CTAFooter from "./components/CTAFooter";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop";

export default function App() {
  const location = useLocation();

  // Listen directly to route transitions instead of a generic mount event
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <CTAFooter />
    </>
  );
}
