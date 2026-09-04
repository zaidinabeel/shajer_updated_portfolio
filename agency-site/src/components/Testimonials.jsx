import { TESTIMONIALS } from "../data/agencyData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-8 bg-[#F5EFEB] border-t border-[#EAE5DE] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
            Client Perspectives
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
            Perspectives from <span className="italic">Growth Leadership</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#EAE5DE] flex flex-col justify-between shadow-maison"
            >
              <div>
                <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic font-normal mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#EAE5DE] flex items-center justify-between font-sans">
                <div>
                  <div className="text-xs font-semibold text-[#1C1714]">{t.clientName}</div>
                  <div className="text-[11px] text-stone-500">{t.role}</div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono text-[#965E3A] bg-[#FAF8F5] border border-[#EAE5DE]">
                  {t.results}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
