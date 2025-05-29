"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!, For quicker replies, reach out via my social channels!');
    // Reset the form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id='contact' className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mb-24">
      <h1 className='text-center font-extrabold text-gray-800 text-3xl mt-10 '>CONTACT <br /><span className='font-mono text-5xl bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent'>-</span></h1>
    
   
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full p-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-md  font-bold focus:outline-none  hover:shadow-lg hover:shadow-blue-700">
          Send Message
        </button>
      </form>
      
    </div>
  );
};

export default ContactForm;
