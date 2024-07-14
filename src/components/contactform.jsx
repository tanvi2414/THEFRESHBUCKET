import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../font.css';

const ContactForm = () => {
  const { t } = useTranslation();
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
    if (!formData.name) tempErrors.name = t('contactUs.name') + ' ' + t('contactUs.isRequired');
    if (!formData.email) {
      tempErrors.email = t('contactUs.email') + ' ' + t('contactUs.isRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t('contactUs.invalidEmail');
    }
    if (!formData.phone) tempErrors.phone = t('contactUs.phone') + ' ' + t('contactUs.isRequired');
    if (!formData.subject) tempErrors.subject = t('contactUs.subject') + ' ' + t('contactUs.isRequired');
    if (!formData.message) tempErrors.message = t('contactUs.message') + ' ' + t('contactUs.isRequired');
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', formData);
      alert(t('contactUs.formSubmitted'));
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('../images/farmProduce.jpg')" }}
    >
      {/* Close Button */}
      <Link to="/home" className="absolute top-4 right-4 text-black md:text-white z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>
      
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center py-5 relative z-10">
        {/* Contact Details */}
        <div className="w-full md:w-1/3 pr-8 pt-6 bg-white p-6 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-3 playfair-display">{t('contactUs.contactDetails')}</h2>
          <div className="mb-4">
            <p className="text-gray-800 mb-2">{t('contactUs.locationAddress')}</p>
            <p className="text-gray-600">680, Adarsh Vihar, Kuleshra, Greater Noida, Uttar Pradesh, India</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-800 mb-2">{t('contactUs.emailAddress')}</p>
            <p className="text-gray-600">info@thefreshbucket.com</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-800 mb-2">{t('contactUs.phoneNumber')}</p>
            <p className="text-gray-600">+91-7053855854</p>
          </div>
        </div>
        {/* Get in touch */}
        <div className="w-full md:w-2/3 pl-8 pt-6 bg-white p-6">
          <h2 className="text-2xl font-bold mb-3 playfair-display">{t('contactUs.getInTouch')}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">{t('contactUs.name')}:</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">{t('contactUs.email')}:</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">{t('contactUs.phone')}:</label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">{t('contactUs.subject')}:</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                name="subject"
                id="subject"
                autoComplete="off"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="project">{t('contactUs.project')}:</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name="project"
                id="project"
                autoComplete="off"
                value={formData.project}
                onChange={handleChange}
              >
                <option value="">{t('contactUs.selectProject')}</option>
                <option value="project1">{t('contactUs.projects.project1')}</option>
                <option value="project2">{t('contactUs.projects.project2')}</option>
                <option value="project3">{t('contactUs.projects.project3')}</option>
                <option value="project4">{t('contactUs.projects.project4')}</option>
                <option value="project5">{t('contactUs.projects.project5')}</option>
              </select>
            </div>

            <div className="mb-4 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="product">{t('contactUs.product')}:</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  name="product"
                  id="product"
                  autoComplete="off"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option value="">{t('contactUs.selectProduct')}</option>
                  <option value="product1">{t('contactUs.products.product1')}</option>
                  <option value="product2">{t('contactUs.products.product2')}</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="service">{t('contactUs.service')}:</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  name="service"
                  id="service"
                  autoComplete="off"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">{t('contactUs.selectService')}</option>
                  <option value="service1">{t('contactUs.services.service1')}</option>
                  <option value="service2">{t('contactUs.services.service2')}</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">{t('contactUs.message')}:</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                name="message"
                id="message"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-950 text-white py-2 px-4 rounded-lg hover:bg-green-750 focus:outline-none focus:bg-green-600"
            >
              {t('contactUs.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
