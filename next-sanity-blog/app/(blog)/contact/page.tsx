"use client"

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { IoHome } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import "./contact.css";

const Contact = () => {
  const [notification, setNotification] = useState(""); // State for notification

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success notification
    setNotification("Message sent successfully!");
    setTimeout(() => setNotification(""), 3000); // Clear the notification after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-5/12 bg-gradient-to-br from-purple-600 to-purple-800 p-8 lg:p-12 text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h1>
              <p className="text-purple-100 text-lg mb-12">
                Have a question or feedback? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                <ContactItem 
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  detail="contact@yourblog.com"
                />
                <ContactItem 
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  detail="+1 (123) 456-7890"
                />
                <ContactItem 
                  icon={<MapPin className="w-6 h-6" />}
                  title="Address"
                  detail="123 Blog Street, Content City"
                />
                <ContactItem 
                  icon={<Clock className="w-6 h-6" />}
                  title="Hours"
                  detail="Mon - Fri: 9AM - 6PM"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-7/12 p-8 lg:p-12 bg-white">
            <div className="animate-fade-in-up delay-200">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <FormInput
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />
                  <FormInput
                    type="email"
                    placeholder="Your Email"
                    name="email"
                  />
                  <FormInput
                    type="text"
                    placeholder="Subject"
                    name="subject"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             hover:bg-gray-100 transition-all duration-300
                             placeholder-gray-400 text-gray-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-purple-600 text-white rounded-xl font-semibold
                           transform transition-all duration-300
                           hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

// Contact Item Component
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const ContactItem = ({ icon, title, detail }: ContactItemProps) => (
<div className="flex items-start space-x-4 group">
  <div className="p-3 bg-white/10 rounded-lg transform transition-all duration-300 group-hover:scale-110">
    {icon}
  </div>
  <div>
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-purple-100">{detail}</p>
  </div>
</div>
);

// Form Input Component
interface FormInputProps {
  type: string;
  placeholder: string;
  name: string;
}

const FormInput = ({ type, placeholder, name }: FormInputProps) => (
<input
  type={type}
  placeholder={placeholder}
  name={name}
  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 
             focus:ring-2 focus:ring-purple-500 focus:border-transparent
             hover:bg-gray-100 transition-all duration-300
             placeholder-gray-400 text-gray-700"
/>
);

// Add these styles to your global CSS file
const styles = `
@keyframes fade-in-up {
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

.animate-fade-in-up {
animation: fade-in-up 0.8s ease-out forwards;
}

.delay-200 {
animation-delay: 200ms;
}
`;



export default Contact;