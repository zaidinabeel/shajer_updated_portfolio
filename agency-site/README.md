# ⚡ Shajer Digital — Enterprise Agency Website

> An enterprise performance marketing and video production agency website inspired by **[OrangeMantra](https://www.orangemantra.com)**, engineered specifically for **Shajer Zaidi**.

---

## 🌟 Key Features & Sections (Modeled on OrangeMantra)

1. **Dual-Tier Enterprise Header**:
   - Top announcement & direct contact bar (WhatsApp, telephone, email, PDF deck download).
   - Sticky navbar with backdrop blur, logo branding, anchor navigation, and a high-converting *"Get Free Growth Audit"* CTA button.
2. **High-Impact Hero Section**:
   - Bold value proposition targeting DTC brands, real estate firms, and B2B enterprises.
   - Dual action CTAs (*"Claim Free 360° Growth Audit"* + *"Explore Case Studies"*).
   - Live interactive Operations Console displaying blended ROAS (+4.2x), search CTR (+30%), and reel retention (71.4%).
3. **Client & Partner Marquee**:
   - Verified badge ticker for Meta Marketing Partner, Google Ads, HubSpot, Zaari IT, Click Retina, Bioinus Clinic, and Imperial Villas.
4. **Interactive Capabilities & Services Grid**:
   - 6 specialized solutions:
     - 01: Performance Meta Ads Scaling (Advantage+, CAPI, Lookalikes)
     - 02: High-Retention Video Reels & Shorts Studio (0-3s Hook Rate, Beat-Synced Motion)
     - 03: Google Search & Performance Max PPC (-18% CPC, Quality Score Sculpting)
     - 04: Landing Page CRO & CRM Pipeline Sync
     - 05: High-CTR Ad Creatives & Static Posters
     - 06: Account Diagnostics & 360° Growth Audit
5. **Verified Impact & Metrics Banner**:
   - High-contrast stats counter showcasing 4.2x ROAS, -32% CPL, +35% Lead Volume, 10M+ Video Views, and 98% Retention.
6. **Enterprise Case Studies & Impact**:
   - Bioinus Aesthetics Clinic, Zaari IT Solutions, Click Retina PPC, Imperial Villas Real Estate, and Aura Apparel DTC.
   - Includes challenge-strategy breakdown, verified metric lifts, and direct links to downloadable case study decks.
7. **Interactive Live ROAS & Growth Calculator**:
   - Live sliders for monthly ad budget ($1k - $50k), target ROAS (2.0x - 6.0x), and average ticket value.
   - Real-time forecast of gross revenue, estimated profit, conversions, and target CAC.
8. **Creative Video Reel & Static Ad Vault**:
   - Modal player for vertical 9:16 video reels and high-res vector creative banners.
   - Direct integration links to Shajer's cloud Google Drive vaults.
9. **4-Phase Growth Methodology**:
   - Battle-tested delivery roadmap: Diagnostics -> Creative Sprint -> Algorithmic Scale -> CRO/LTV.
10. **Platform Certifications & Client Endorsements**:
    - Meta Certified, Google Ads, GA4, and HubSpot badges.
    - Testimonials from founders and growth leads.
11. **High-Converting Proposal & Lead Capture Form**:
    - Selectable services, budget tiers, instant form submission via FormSubmit (routed to `shajerzaidi6@gmail.com`), and dynamic WhatsApp VIP direct messaging button.
12. **Corporate Mega Footer**:
    - Quick links, service directories, legal disclosures, and back-to-top button.

---

## 🚀 How to Run Locally

```bash
# Navigate to the agency site directory
cd agency-site

# Start the Vite development server
npm run dev

# Or test the production build
npm run build
npm run preview
```

---

## 🌐 How to Host / Deploy (100% Free)

### Option 1: Deploy with Vercel (Recommended - 2 Minutes)
1. Install Vercel CLI (optional) or use [vercel.com](https://vercel.com):
   ```bash
   npm i -g vercel
   cd agency-site
   vercel
   ```
2. Or in GitHub:
   - Push your repo to GitHub.
   - In Vercel, click **"Add New Project"** and select this repository.
   - Set **Root Directory** to `agency-site`.
   - Click **Deploy**. Vercel will build and assign an instant live SSL link (e.g. `shajer-digital.vercel.app`).

### Option 2: Deploy with Netlify
1. Go to [netlify.com](https://www.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Set **Base directory** to `agency-site`.
4. Set **Build command** to `npm run build`.
5. Set **Publish directory** to `dist`.
6. Click **Deploy Site**.

### Option 3: Instant Drag & Drop via Netlify Drop
1. Run `npm run build` inside `agency-site`.
2. Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
3. Drag and drop the `agency-site/dist` folder directly onto the page. Your site will be live on the internet immediately!

---

## 📁 Project Structure

```
agency-site/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/                 # Static vector ads, resume, icons
│   ├── creatives/
│   └── resume.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/             # Profile & image assets
    ├── data/
    │   └── agencyData.js   # All text, metrics, case studies & service definitions
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── ClientTicker.jsx
        ├── Services.jsx
        ├── MetricsBanner.jsx
        ├── CaseStudies.jsx
        ├── RoasCalculator.jsx
        ├── VideoVault.jsx
        ├── Methodology.jsx
        ├── Certifications.jsx
        ├── Testimonials.jsx
        ├── LeadContact.jsx
        └── Footer.jsx
```
