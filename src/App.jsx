import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import Upcoming from "./components/Upcoming";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <div className="bg-base-bg min-h-screen antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <Upcoming />
      <CTAFooter />
    </div>
  );
}
