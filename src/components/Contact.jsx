import { useState } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaWhatsapp, 
  FaLocationDot, 
  FaCopy, 
  FaCheck,
  FaPaperPlane,
  FaCircleCheck,
  FaSpinner,
  FaCircleExclamation,
  FaRotateRight
} from "react-icons/fa6";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Video Reels & Meta Ads",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/shajerzaidi6@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Service: formData.service,
          Message: formData.message,
          _subject: `Portfolio Lead: ${formData.service} from ${formData.name}`,
          _template: "table",
          _captcha: "false"
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Failed to send message. Please try again or reach out on WhatsApp.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Fallback: If network blocks ajax, offer mailto/whatsapp
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please chat on WhatsApp directly.");
    }
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Shajer,\n\nMy name is *${formData.name || "a visitor"}*.\nEmail: ${formData.email || "Not provided"}\nService: *${formData.service}*\n\nMessage:\n${formData.message || "I saw your portfolio and would like to discuss a project."}`
    );
    window.open(`https://wa.me/917860704583?text=${text}`, "_blank");
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      service: "Video Reels & Meta Ads",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 mb-2.5">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base">
            Available for performance marketing campaigns, reel production, and growth projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Column: Direct Connect & WhatsApp (5 Cols) */}
          <div className="md:col-span-5 space-y-3.5">
            
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/917860704583?text=Hi%20Shajer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center justify-between hover:bg-emerald-100 transition shadow-xs group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-800">Direct WhatsApp</div>
                  <div className="text-sm font-bold text-slate-900">Instant Chat & Voice</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                Online →
              </span>
            </a>

            {/* Email Card */}
            <div className="p-3.5 sm:p-4 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3 truncate mr-2">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-sm shrink-0">
                  <FaEnvelope />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-500 font-medium">Email Direct</div>
                  <div className="text-xs font-bold text-slate-900 truncate">shajerzaidi6@gmail.com</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("shajerzaidi6@gmail.com", "email")}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-purple-600 transition shrink-0 cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <FaCheck className="text-emerald-600 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3.5 sm:p-4 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Phone Direct</div>
                  <div className="text-xs font-bold text-slate-900">+91 7860704583</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("+91 7860704583", "phone")}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 transition shrink-0 cursor-pointer"
                title="Copy phone"
                aria-label="Copy phone"
              >
                {copiedPhone ? <FaCheck className="text-emerald-600 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Location & LinkedIn */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/shajer-zaidi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2 hover:border-blue-300 transition"
              >
                <FaLinkedin className="text-blue-600 text-sm" />
                <span className="text-xs font-bold text-slate-900">LinkedIn</span>
              </a>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <FaLocationDot className="text-pink-600 text-sm" />
                <span className="text-xs font-bold text-slate-900">Lucknow, IN</span>
              </div>
            </div>

          </div>

          {/* Right Column: 100% Functional Inbox Delivery Form (7 Cols) */}
          <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-7 relative overflow-hidden">
            
            {status === "success" ? (
              <div className="py-8 flex flex-col items-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
                  <FaCircleCheck />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  Message Delivered Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>! Your inquiry for <strong className="text-purple-700">{formData.service}</strong> has been delivered directly to Shajer’s inbox. You will receive a response at <strong className="text-slate-800">{formData.email}</strong> shortly.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <FaWhatsapp className="text-sm" /> Also Send on WhatsApp
                  </button>

                  <button
                    onClick={resetForm}
                    className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FaRotateRight className="text-xs text-slate-400" /> New Message
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Send a Message
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Delivered straight to Shajer’s inbox in real-time.
                    </p>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Delivery
                  </span>
                </div>

                {status === "error" && (
                  <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between gap-2 text-xs text-rose-700">
                    <div className="flex items-center gap-2">
                      <FaCircleExclamation className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg font-bold text-[11px] shrink-0"
                    >
                      WhatsApp →
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 focus:outline-none focus:border-purple-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 focus:outline-none focus:border-purple-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 focus:outline-none focus:border-purple-500 transition"
                    >
                      <option value="Short-Form Video Reels & Creatives">Short-Form Video Reels & Creatives</option>
                      <option value="Meta Ads (FB & IG) Campaign">Meta Ads (FB & IG) Campaign</option>
                      <option value="Google Ads PPC & Search">Google Search PPC Campaign</option>
                      <option value="Full Digital Marketing & Growth">Full Marketing & Growth Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Tell me about your project, timeline, or requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm sm:text-xs text-slate-900 focus:outline-none focus:border-purple-500 transition"
                    ></textarea>
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row items-center gap-2.5">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:flex-1 py-3.5 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <FaSpinner className="animate-spin text-sm" />
                          <span>Sending to Inbox...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs" />
                          <span>Send Message (Email Inbox)</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto py-3.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Send directly via WhatsApp"
                    >
                      <FaWhatsapp className="text-base text-emerald-600" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>

        </div>

      </div>

      {/* Floating 1-Tap WhatsApp CTA on Mobile */}
      <div className="fixed bottom-5 right-5 z-40 md:hidden">
        <a
          href="https://wa.me/917860704583?text=Hi%20Shajer,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs shadow-xl shadow-emerald-600/40 active:scale-95 transition"
          aria-label="Direct WhatsApp Chat"
        >
          <FaWhatsapp className="text-lg" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </section>
  );
}
