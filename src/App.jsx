import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DriveVault from "./components/DriveVault";
import CampaignBreakdown from "./components/CampaignBreakdown";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-600 selection:text-white antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <DriveVault />
        <CampaignBreakdown />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
