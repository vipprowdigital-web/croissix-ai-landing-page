import Features from "../components/Features";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Upcoming from "../components/Upcoming";

export default function Home() {
  return (
    <div className="bg-base-bg min-h-screen antialiased">
      <Hero />
      <Features />
      <Metrics />
      <Upcoming />
    </div>
  );
}
