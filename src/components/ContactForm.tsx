'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '083 123 4567',
    service: 'table-mountain',
    date: '2024-08-20',
    message: 'Hi, I would like to book a Table Mountain tour for 2 people. We are staying at the V&A Waterfront and would prefer an afternoon tour. Please let me know availability and pricing. Thank you!'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionId = Math.random().toString(36).substring(7);
    const startTime = Date.now();
    
    console.log(`🚀 [Client-${submissionId}] Form submission started at ${new Date().toISOString()}`);
    console.log(`📋 [Client-${submissionId}] Form data being submitted:`, formData);
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log(`📤 [Client-${submissionId}] Sending POST request to /api/contact`);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(`📥 [Client-${submissionId}] Response received:`, {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers)
      });

      const result = await response.json();
      console.log(`📋 [Client-${submissionId}] Response body:`, result);

      if (result.success) {
        console.log(`✅ [Client-${submissionId}] Form submission successful`);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        });
        console.log(`🧹 [Client-${submissionId}] Form data cleared`);
      } else {
        console.log(`❌ [Client-${submissionId}] Form submission failed:`, result.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      const processingTime = Date.now() - startTime;
      console.error(`💥 [Client-${submissionId}] Error submitting form after ${processingTime}ms:`, error);
      console.error(`💥 [Client-${submissionId}] Error details:`, {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : 'No stack trace'
      });
      setSubmitStatus('error');
    } finally {
      const totalTime = Date.now() - startTime;
      console.log(`🏁 [Client-${submissionId}] Form submission completed in ${totalTime}ms`);
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h4 className="text-2xl font-bold text-gray-900 mb-6">Book Your Experience</h4>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! Your enquiry has been sent successfully. We will contact you soon!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          Sorry, there was an error sending your enquiry. Please call us directly at{' '}
          <a href="tel:0839546069" className="underline font-semibold">083 954 6069</a> or email{' '}
          <a href="mailto:info@capeadvancedtours.com" className="underline font-semibold">info@capeadvancedtours.com</a>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-2">Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-base placeholder-gray-500" 
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-2">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-base placeholder-gray-500" 
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-2">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-base placeholder-gray-500" 
            placeholder="083 123 4567"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-base font-semibold text-gray-900 mb-2">Service *</label>
          <select 
            id="service" 
            name="service" 
            value={formData.service}
            onChange={handleChange}
            required 
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-base"
          >
            <option value="" className="text-gray-500">Select a service</option>
            <option value="airport-transfer" className="text-gray-900">Airport Transfer</option>
            <option value="city-tour" className="text-gray-900">City Tour</option>
            <option value="table-mountain" className="text-gray-900">Table Mountain Tour</option>
            <option value="cape-point" className="text-gray-900">Cape Point Tour</option>
            <option value="wine-tour" className="text-gray-900">Wine Country Tour</option>
            <option value="custom" className="text-gray-900">Custom Tour</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="date" className="block text-base font-semibold text-gray-900 mb-2">Preferred Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-base" 
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-base font-semibold text-gray-900 mb-2">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-base placeholder-gray-500 resize-vertical" 
            placeholder="Tell us about your requirements, number of people, special requests, etc."
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Enquiry'}
        </button>
      </form>
    </div>
  );
}