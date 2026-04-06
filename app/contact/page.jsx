"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/* ─────────────────────────────────────────────
   Contact Page — Purvi Aero International FZC
───────────────────────────────────────────── */
export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    partNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ─────────────────────────────────────────────
    // REPLACE ENDPOINT HERE (Formspree/Netlify)
    // ─────────────────────────────────────────────
    // For now, simulating a successful submission
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <main className="bg-white py-20 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* ───── LEFT SIDE: INFO ───── */}
          <FadeIn className="lg:w-1/3">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-8 text-[#0E1C36]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get In Touch
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed mb-12">
              Submit your parts requirement or general enquiry and our team will respond within 24 hours.
            </p>

            <div className="space-y-8">
              {/* Email Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0E1C36]/5 flex items-center justify-center rounded-xl">
                  <svg className="w-6 h-6 text-[#B8872A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#B8872A] mb-1">Email Our Team</p>
                  <p className="text-[#0E1C36] font-medium text-lg">info@purviaero.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0E1C36]/5 flex items-center justify-center rounded-xl">
                  <svg className="w-6 h-6 text-[#B8872A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#B8872A] mb-1">Our Location</p>
                  <p className="text-[#0E1C36] font-medium text-lg">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ───── RIGHT SIDE: FORM ───── */}
          <FadeIn delay={120} className="lg:w-2/3">
            {isSubmitted ? (
              <div className="bg-[#F5F3EE] p-12 rounded-[2rem] text-center border border-[#0E1C36]/5">
                <div className="w-20 h-20 bg-[#B8872A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#B8872A]/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2
                  className="text-3xl font-bold text-[#0E1C36] mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Submission Received
                </h2>
                <p className="text-[#374151] text-lg max-w-md mx-auto">
                  Thank you for reaching out to Purvi Aero International. Our technical team has received your enquiry and will respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-[#B8872A] font-bold border-b border-[#B8872A]/30 hover:border-[#B8872A] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0E1C36] mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    className="w-full bg-[#F5F3EE]/50 border border-[#0E1C36]/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#B8872A] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0E1C36] mb-2">Company Name</label>
                  <input
                    required
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Global Airways"
                    className="w-full bg-[#F5F3EE]/50 border border-[#0E1C36]/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#B8872A] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0E1C36] mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    className="w-full bg-[#F5F3EE]/50 border border-[#0E1C36]/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#B8872A] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0E1C36] mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#F5F3EE]/50 border border-[#0E1C36]/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#B8872A] transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0E1C36] mb-2">Part Number / Description (Optional)</label>
                  <input
                    type="text"
                    name="partNumber"
                    value={formData.partNumber}
                    onChange={handleChange}
                    placeholder="e.g. PN: 123456-789"
                    className="w-full bg-[#F5F3EE]/50 border border-[#0E1C36]/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#B8872A] transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0E1C36] mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you today?"
                    className="w-full bg-[#F5F3EE]/50 border border-[#0E1C36]/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#B8872A] transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="btn-gold w-full md:w-auto px-12 py-5 shadow-lg hover:shadow-[#B8872A]/20"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
