import { CERTIFICATIONS } from "../data/agencyData";
import { FaMeta, FaGoogle, FaHubspot, FaChartPie } from "react-icons/fa6";

export default function Certifications() {
  const getCertIcon = (badge) => {
    switch (badge) {
      case "Meta": return <FaMeta className="text-[#965E3A]" />;
      case "Google": return <FaGoogle className="text-[#965E3A]" />;
      case "GA4": return <FaChartPie className="text-[#965E3A]" />;
      default: return <FaHubspot className="text-[#965E3A]" />;
    }
  };

  return (
    <section className="py-14 px-4 sm:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE5DE] shadow-maison">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <div className="text-[10px] font-mono text-[#965E3A] tracking-widest uppercase mb-1 font-semibold">
                Accreditations
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1C1714] tracking-tight">
                Verified Platform <span className="italic">Expertise</span>
              </h3>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans font-normal">
                Formally accredited in algorithmic media buying, Conversion API (CAPI) infrastructure, and multi-channel attribution measurement.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DE] flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE5DE] flex items-center justify-center text-lg shrink-0">
                    {getCertIcon(cert.badge)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                      {cert.name} • {cert.year}
                    </span>
                    <h4 className="font-serif text-sm font-medium text-[#1C1714]">
                      {cert.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
