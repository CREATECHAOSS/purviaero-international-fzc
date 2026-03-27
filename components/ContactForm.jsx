'use client';

import { useState } from 'react';

const CONDITIONS = ['NE (New)', 'OH (Overhauled)', 'SV (Serviceable)', 'AR (As Removed)'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    platform: '',
    partNumber: '',
    condition: '',
    deliveryDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading font-bold text-white mb-3 tracking-tight">RFQ Submitted</h3>
        <p className="text-gray-400 font-medium">Our procurement team will reach out within 2 business hours.</p>
        <button 
           onClick={() => setSubmitted(false)}
           className="mt-8 text-accent text-sm font-bold hover:underline"
        >
          Send another RFQ
        </button>
      </div>
    );
  }

  const inputClasses = "w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200";
  const labelClasses = "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="fullName">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="company">
            Company <span className="text-accent">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={handleChange}
            placeholder="Airline / MRO Name"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="platform">
            Aircraft Platform <span className="text-accent">*</span>
          </label>
          <input
            id="platform"
            name="platform"
            type="text"
            required
            value={form.platform}
            onChange={handleChange}
            placeholder="e.g. A320, PT6T"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="partNumber">
            Part Number (P/N) <span className="text-accent">*</span>
          </label>
          <input
            id="partNumber"
            name="partNumber"
            type="text"
            required
            value={form.partNumber}
            onChange={handleChange}
            placeholder="e.g. 2592100-6"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="condition">
            Condition Required <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="condition"
              name="condition"
              required
              value={form.condition}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled className="bg-surface">Select condition...</option>
              {CONDITIONS.map((c) => (
                <option key={c} value={c} className="bg-surface">{c}</option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label className={labelClasses} htmlFor="deliveryDate">
            Target Delivery Date <span className="text-accent">*</span>
          </label>
          <input
            id="deliveryDate"
            name="deliveryDate"
            type="date"
            required
            value={form.deliveryDate}
            onChange={handleChange}
            className={`${inputClasses} [color-scheme:dark]`}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Message / Additional Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Quantity, certifications, shipping destination..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary w-full py-5 text-base tracking-normal group transition-all">
        Submit RFQ to Procurement 
        <svg className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
