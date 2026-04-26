"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   Aviation RFQ Intake Page — Purvi Aero
   Operational focus: Technical part sourcing
   Email: rfq@purviaero.com (Main) · info@purviaero.com
───────────────────────────────────────────── */
export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    partNumber: "",
    altPartNumber: "",
    quantity: "",
    condition: "SV", // Default: Serviceable
    aircraft: "",
    certification: "",
    deliveryDate: "",
    isAOG: false,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate submission
    console.log("RFQ Data Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <main className="bg-white py-16 md:py-24 min-h-[80vh] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-5">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#000543" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#000543" strokeWidth="1" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* ───── LEFT SIDE: INTEL ───── */}
          <FadeIn className="lg:w-1/3">
            <h1
              className="text-4xl sm:text-6xl font-bold mb-8 text-primary tracking-tighter"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              RFQ <span className="text-secondary">Intake</span>
            </h1>
            <p className="text-xl text-[#374151] font-medium leading-relaxed mb-12 border-l-4 border-accent pl-6">
              Submit your technical requirements through our portal for immediate procurement review.
            </p>

            <div className="space-y-10">
              {/* RFQ Desk */}
              <div className="flex items-start gap-4 p-6 bg-primary rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">RFQ Intake Desk</p>
                  <p className="text-white font-bold text-xl">rfq@purviaero.com</p>
                </div>
              </div>

              {/* General Desk */}
              <div className="flex items-start gap-4 p-6 border border-primary/10 rounded-2xl">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-xl">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#374151] opacity-50 mb-1">General Inquiries</p>
                  <p className="text-primary font-bold text-xl">info@purviaero.com</p>
                </div>
              </div>

              {/* AOG Alert */}
              <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">AOG Support</p>
                </div>
                <p className="text-sm text-[#374151] font-medium leading-relaxed">
                  Mark your list as AOG for prioritized sourcing. Our team monitors urgent requests for immediate response.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ───── RIGHT SIDE: RFQ FORM ───── */}
          <FadeIn delay={120} className="lg:w-2/3">
            {isSubmitted ? (
              <div className="bg-[#F9FAFB] p-16 rounded-[2.5rem] text-center border border-primary/5 shadow-sm">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6 tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                  RFQ Received
                </h2>
                <p className="text-[#374151] text-lg font-medium max-w-md mx-auto mb-12 opacity-80">
                  Your requirements have been logged in our procurement system. A sourcing specialist will respond shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline px-10 py-4"
                >
                  New RFQ Submission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F9FAFB] p-8 sm:p-12 rounded-[2.5rem] border border-primary/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Company Info */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-primary/5 mb-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Company Name</label>
                      <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Airline / MRO / Operator" className="rfq-input" />
                    </div>
                    <div>
                      <label className="block text-[10px) font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Contact Full Name</label>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Procurement Manager" className="rfq-input" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Corporate Email</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" className="rfq-input" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Direct Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="rfq-input" />
                    </div>
                  </div>

                  {/* Part Details */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Part Number (P/N)</label>
                    <input required type="text" name="partNumber" value={formData.partNumber} onChange={handleChange} placeholder="Primary Part Number" className="rfq-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Alternate P/N</label>
                    <input type="text" name="altPartNumber" value={formData.altPartNumber} onChange={handleChange} placeholder="Optional Alternate" className="rfq-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Quantity Required</label>
                    <input required type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="E.g. 1" className="rfq-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Condition Required</label>
                    <select name="condition" value={formData.condition} onChange={handleChange} className="rfq-input appearance-none bg-white">
                      <option value="NE">NE (New)</option>
                      <option value="NS">NS (New Surplus)</option>
                      <option value="SV">SV (Serviceable)</option>
                      <option value="OH">OH (Overhauled)</option>
                      <option value="AR">AR (As Removed)</option>
                    </select>
                  </div>

                  {/* Operational Context */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Aircraft / Platform</label>
                    <input type="text" name="aircraft" value={formData.aircraft} onChange={handleChange} placeholder="E.g. B737-800 / A320" className="rfq-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Required Certification</label>
                    <input type="text" name="certification" value={formData.certification} onChange={handleChange} placeholder="E.g. FAA 8130-3 / EASA Form 1" className="rfq-input" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Target Delivery Date</label>
                    <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className="rfq-input appearance-none bg-white" />
                  </div>

                  {/* AOG Checkbox */}
                  <div className="flex items-center gap-4 bg-white/50 border border-primary/5 px-6 py-4 rounded-xl">
                    <input 
                      type="checkbox" 
                      id="isAOG" 
                      name="isAOG" 
                      checked={formData.isAOG} 
                      onChange={handleChange} 
                      className="w-5 h-5 accent-secondary cursor-pointer"
                    />
                    <label htmlFor="isAOG" className="text-sm font-bold uppercase tracking-widest text-primary cursor-pointer">
                      Mark as <span className="text-red-600">AOG Priority</span>
                    </label>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 opacity-60">Procurement Notes / Trace Requirements</label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Specify additional trace requirements or delivery constraints..."
                      className="rfq-input resize-none"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-6">
                    <button
                      type="submit"
                      className="btn-primary w-full py-5 text-base shadow-2xl shadow-secondary/20 flex items-center justify-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Submit Technical RFQ</span>
                    </button>
                    <p className="text-[10px] text-center mt-6 text-[#374151] opacity-50 uppercase tracking-widest font-bold">
                      Direct RFQs to rfq@purviaero.com for prioritized processing.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>

      <style jsx>{`
        .rfq-input {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid rgba(0, 5, 67, 0.08);
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 500;
          color: #000543;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .rfq-input:focus {
          outline: none;
          border-color: #0071CE;
          box-shadow: 0 0 0 4px rgba(0, 113, 206, 0.05);
        }
        .rfq-input::placeholder {
          opacity: 0.4;
          font-weight: 400;
        }
      `}</style>
    </main>
  );
}
