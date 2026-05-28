import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CTAFooter from "./components/CTAFooter";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
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
