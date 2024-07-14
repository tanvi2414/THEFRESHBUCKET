import React, { useState } from 'react';

const MiniContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    project: '',
    product: '',
    service: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', formData);
      alert('Form submitted successfully');
    }
  };

  return (
    <div className='py-4 flex flex-wrap items-center'>
      <div className="w-full md:w-1/2 lg:w-1/3 md:mt-0 flex justify-center items-center bg-white mx-8 my-6 rounded-lg shadow-md" style={{ width: '50%'}}>
        <img src="../images/man-touching-his-phone.jpg" alt="Contact us image" className="bg-white rounded-lg shadow-md" style={{ width: '100%'}} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mx-8 my-6" style={{ width: '40%', marginLeft: 'auto' }}>
        <h2 className="text-2xl font-bold mb-3 playfair-display">Reach Out To Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email:</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone:</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">Subject:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="project">Project:</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              name="project"
              value={formData.project}
              onChange={handleChange}
            >
              <option value="">Select Project</option>
              <option value="project1">Urban Hydroponics Initiative</option>
              <option value="project2">Community Farming Programs</option>
              <option value="project3">Sustainable Agriculture Training Workshops</option>
              <option value="project4">School Gardens Project</option>
              <option value="project5">Farmer Support and Consulting</option>
            </select>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="product">Product:</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name="product"
                value={formData.product}
                onChange={handleChange}
              >
                <option value="">Select Product</option>
                <option value="product1">Hydroponic Products</option>
                <option value="product2">Polyhouse Products</option>
              </select>
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="service">Service:</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="service1">AMC service</option>
                <option value="service2">Buyback service</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Your Message:</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-80 bg-green-950 text-white py-2 px-4 rounded-lg hover:bg-green-750 focus:outline-none focus:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MiniContactForm;
