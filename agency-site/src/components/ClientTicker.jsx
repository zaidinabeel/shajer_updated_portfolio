import { CLIENT_LOGOS } from "../data/agencyData";
import { FaMeta, FaGoogle, FaHubspot } from "react-icons/fa6";

export default function ClientTicker() {
  const partners = [
    { name: "Meta Marketing Partner", icon: FaMeta, category: "Accredited Agency" },
    { name: "Google Ads Premier", icon: FaGoogle, category: "Search & Display" },
    { name: "HubSpot Inbound", icon: FaHubspot, category: "Certified Advisory" },
    ...CLIENT_LOGOS.map(c => ({ name: c.name, category: c.tag, icon: null }))
  ];

  return (
    <section className="py-8 bg-[#F5EFEB] border-y border-[#EAE5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-4 text-center">
        <p className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest text-stone-500 uppercase">
          Client Engagements & Platform Accreditations
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-1.5 shrink-0">
          {[...partners, ...partners].map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-[#EAE5DE] hover:border-[#965E3A]/40 transition shrink-0 shadow-xs"
            >
              {item.icon && (
                <item.icon className="text-sm text-[#965E3A] shrink-0" />
              )}
              <div>
                <span className="font-serif text-sm font-medium text-[#1C1714] whitespace-nowrap block">
                  {item.name}
                </span>
                <span className="text-[10px] font-sans text-stone-500 whitespace-nowrap block">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
