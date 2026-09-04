import { useState } from "react";
import { 
  FaPaperPlane, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaCheck, 
  FaCopy, 
  FaSpinner, 
  FaCircleCheck
} from "react-icons/fa6";
import { AGENCY_INFO } from "../data/agencyData";

export default function LeadContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "$3,000 - $10,000 / month",
    services: ["Meta Advantage+ Ads", "High-Retention Video Reels"],
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const availableServices = [
    "Meta Advantage+ Ads",
    "High-Retention Video Reels",
    "Google PPC Search",
    "Landing Page CRO",
    "Ad Creative Banners",
    "360° Account Audit"
  ];

  const toggleService = (srv) => {
    setFormData(prev => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== srv)
          : [...prev.services, srv]
      };
    });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/shajerzaidi6@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Website: formData.website || "Not provided",
          MonthlyBudget: formData.budget,
          ServicesSelected: formData.services.join(", "),
          Message: formData.message,
          _subject: `Advisory Brief: ${formData.name} (${formData.budget})`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Unable to submit proposal form. Please use direct line.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message || "Network error. Please message directly on WhatsApp.");
    }
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Shajer,\n\nI'm reaching out regarding Shajer Digital advisory.\n*Name:* ${formData.name || "A Visitor"}\n*Company/Site:* ${formData.website || "N/A"}\n*Budget:* ${formData.budget}\n*Scope:* ${formData.services.join(", ")}\n\n*Details:*\n${formData.message || "I'd like to schedule an account diagnostic audit."}`
    );
    window.open(`https://wa.me/917860704583?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <div className="text-[11px] font-sans font-semibold text-[#965E3A] tracking-widest uppercase mb-2">
            Engagement Inquiry
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1714] tracking-tight">
            Initiate Account <span className="italic">Diagnostic Audit</span>
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm font-sans font-normal">
            Submit campaign context for a complimentary 360° media diagnostic dossier delivered within 48 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Lines Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp VIP Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#EAE5DE] shadow-maison flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    Direct Liaison
                  </span>
                  <span className="text-[10px] font-sans font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1C1714]">Confidential WhatsApp Channel</h3>
                <p className="text-xs text-stone-600 mt-1 font-sans font-normal leading-relaxed">
                  For immediate engagement inquiries, strategic reviews, or urgent campaign turnarounds directly with Shajer Zaidi.
                </p>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="mt-6 w-full py-3 rounded-full bg-[#1C1714] hover:bg-[#965E3A] text-[#FAF8F5] font-sans font-medium text-xs tracking-wider uppercase transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <FaWhatsapp className="text-emerald-400 text-sm" />
                <span>Connect via WhatsApp</span>
              </button>
            </div>

            {/* Direct Phone */}
            <div className="p-4 rounded-2xl bg-white border border-[#EAE5DE] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] flex items-center justify-center text-xs text-stone-700 shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-mono">Telephone</div>
                  <div className="text-xs font-serif font-medium text-[#1C1714]">{AGENCY_INFO.displayPhone}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(AGENCY_INFO.phone, "phone")}
                className="p-2 rounded-lg bg-[#FAF8F5] text-stone-600 hover:text-black transition cursor-pointer"
                title="Copy phone"
              >
                {copiedPhone ? <FaCheck className="text-emerald-700 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Direct Email */}
            <div className="p-4 rounded-2xl bg-white border border-[#EAE5DE] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3 truncate mr-2">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] flex items-center justify-center text-xs text-stone-700 shrink-0">
                  <FaEnvelope />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-stone-400 uppercase font-mono">Email Inquiries</div>
                  <div className="text-xs font-serif font-medium text-[#1C1714] truncate">{AGENCY_INFO.email}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(AGENCY_INFO.email, "email")}
                className="p-2 rounded-lg bg-[#FAF8F5] text-stone-600 hover:text-black transition cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? <FaCheck className="text-emerald-700 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Advisory Guarantee */}
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DE] text-xs text-stone-600 space-y-2 font-sans">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-[#965E3A] text-xs" />
                <span>{AGENCY_INFO.location}</span>
              </div>
              <div className="text-[11px] text-stone-500">
                Mutual Non-Disclosure Agreement (NDA) executed prior to account credential exchange.
              </div>
            </div>

          </div>

          {/* Proposal Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE5DE] shadow-maison">
              
              {status === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-2xl flex items-center justify-center mx-auto mb-4">
                    <FaCircleCheck />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1C1714]">Inquiry Transmitted Successfully</h3>
                  <p className="mt-2 text-stone-600 text-xs max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you, <strong>{formData.name}</strong>. Shajer Zaidi will review your account parameters and follow up within 4 business hours.
                  </p>
                  <div className="mt-6 flex justify-center gap-3">
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[#EAE5DE] text-stone-700 text-xs font-sans font-medium"
                    >
                      Submit Another Dossier
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#EAE5DE] pb-3 mb-2">
                    <h3 className="font-serif text-lg font-medium text-[#1C1714]">Account Diagnostic Dossier</h3>
                    <p className="text-xs text-stone-500 mt-0.5 font-sans">Please provide foundational parameters regarding current media deployment.</p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] text-[#1C1714] text-xs focus:outline-none focus:border-[#965E3A] transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] text-[#1C1714] text-xs focus:outline-none focus:border-[#965E3A] transition"
                      />
                    </div>
                  </div>

                  {/* Phone & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Telephone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] text-[#1C1714] text-xs focus:outline-none focus:border-[#965E3A] transition"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Brand / Store URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://brand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] text-[#1C1714] text-xs focus:outline-none focus:border-[#965E3A] transition"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="font-sans">
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      Monthly Media Budget Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] text-[#1C1714] text-xs focus:outline-none focus:border-[#965E3A] transition"
                    >
                      <option value="$1,000 - $3,000 / month">$1,000 - $3,000 / month (Pilot / Validation)</option>
                      <option value="$3,000 - $10,000 / month">$3,000 - $10,000 / month (Core Growth)</option>
                      <option value="$10,000 - $25,000 / month">$10,000 - $25,000 / month (Aggressive Expansion)</option>
                      <option value="$25,000+ / month">$25,000+ / month (Enterprise Spend)</option>
                    </select>
                  </div>

                  {/* Services Checklist */}
                  <div className="font-sans">
                    <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                      Required Practice Areas:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableServices.map((srv) => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-2 rounded-xl text-left text-xs font-medium border transition cursor-pointer flex items-center justify-between ${
                              isChecked
                                ? "bg-[#FAF8F5] border-[#965E3A] text-[#1C1714]"
                                : "bg-white border-[#EAE5DE] text-stone-600 hover:text-stone-900"
                            }`}
                          >
                            <span className="truncate mr-1">{srv}</span>
                            {isChecked && <FaCheck className="text-[#965E3A] text-[9px] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="font-sans">
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      Primary Objective or Current Bottleneck
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Summary of current ROAS targets, creative challenges, or acquisition roadblocks."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DE] text-[#1C1714] text-xs focus:outline-none focus:border-[#965E3A] transition"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-full bg-[#1C1714] hover:bg-[#965E3A] text-[#FAF8F5] font-sans font-medium text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
                  >
                    {status === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin text-xs" />
                        <span>Transmitting Dossier...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-[10px]" />
                        <span>Submit Strategic Audit Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
