import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-green-700 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-green-700 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-green-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">Send Message</button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-green-600" size={24} />
              <span className="text-green-700">info@ecosofia.bg</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-green-600" size={24} />
              <span className="text-green-700">+359 2 123 4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-green-600" size={24} />
              <span className="text-green-700">1000 Sofia, Bulgaria</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Office Hours</h3>
            <p className="text-green-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-green-700">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;