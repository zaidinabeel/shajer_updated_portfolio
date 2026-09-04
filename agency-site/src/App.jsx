import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientTicker from "./components/ClientTicker";
import Services from "./components/Services";
import MetricsBanner from "./components/MetricsBanner";
import CaseStudies from "./components/CaseStudies";
import RoasCalculator from "./components/RoasCalculator";
import VideoVault from "./components/VideoVault";
import Methodology from "./components/Methodology";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import LeadContact from "./components/LeadContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060A17] text-slate-100 flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientTicker />
        <Services />
        <MetricsBanner />
        <CaseStudies />
        <RoasCalculator />
        <VideoVault />
        <Methodology />
        <Certifications />
        <Testimonials />
        <LeadContact />
      </main>
      <Footer />
    </div>
  );
}
