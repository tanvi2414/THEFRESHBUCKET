import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const AddtoCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedProducts: '',
  });

  const [selectedPolyhouseProducts, setSelectedPolyhouseProducts] = useState([]);
  const [selectedHydroponicProducts, setSelectedHydroponicProducts] = useState([]);

  const polyhouseProducts = [
    { id: 'polyhouse-1', name: t('selectProducts.polyhouse.polyhouse-1') },
    { id: 'polyhouse-2', name: t('selectProducts.polyhouse.polyhouse-2') },
    { id: 'polyhouse-3', name: t('selectProducts.polyhouse.polyhouse-3') },
    { id: 'polyhouse-4', name: t('selectProducts.polyhouse.polyhouse-4') },
    { id: 'polyhouse-5', name: t('selectProducts.polyhouse.polyhouse-5') },
    { id: 'polyhouse-6', name: t('selectProducts.polyhouse.polyhouse-6') },
    { id: 'polyhouse-7', name: t('selectProducts.polyhouse.polyhouse-7') },
    { id: 'polyhouse-8', name: t('selectProducts.polyhouse.polyhouse-8') },
    { id: 'polyhouse-9', name: t('selectProducts.polyhouse.polyhouse-9') },
    { id: 'polyhouse-10', name: t('selectProducts.polyhouse.polyhouse-10') },
  ];

  const hydroponicProducts = [
    { id: 'hydroponic-1', name: t('selectProducts.hydroponic.hydroponic-1') },
    { id: 'hydroponic-2', name: t('selectProducts.hydroponic.hydroponic-2') },
    { id: 'hydroponic-3', name: t('selectProducts.hydroponic.hydroponic-3') },
    { id: 'hydroponic-4', name: t('selectProducts.hydroponic.hydroponic-4') },
    { id: 'hydroponic-5', name: t('selectProducts.hydroponic.hydroponic-5') },
    { id: 'hydroponic-6', name: t('selectProducts.hydroponic.hydroponic-6') },
  ];

  useEffect(() => {
    const selectedProducts = [...selectedPolyhouseProducts, ...selectedHydroponicProducts].join(', ');
    setFormData((prevData) => ({
      ...prevData,
      selectedProducts: selectedProducts,
    }));
  }, [selectedPolyhouseProducts, selectedHydroponicProducts]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePolyhouseCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedPolyhouseProducts(prev => [...prev, value]);
    } else {
      setSelectedPolyhouseProducts(prev => prev.filter(item => item !== value));
    }
  };

  const handleHydroponicCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedHydroponicProducts(prev => [...prev, value]);
    } else {
      setSelectedHydroponicProducts(prev => prev.filter(item => item !== value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestData = {
      ...formData,
      polyhouseProducts: selectedPolyhouseProducts,
      hydroponicProducts: selectedHydroponicProducts,
    };

    try {
      const response = await axios.post('/api/send-sms', requestData);
      console.log('Message sent:', response.data);

      setFormData({
        name: '',
        email: '',
        phone: '',
        selectedProducts: '',
      });
      setSelectedPolyhouseProducts([]);
      setSelectedHydroponicProducts([]);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleBack = () => {
    const previousPage = selectedPolyhouseProducts.length > 0 ? '/polyhouse-products' : '/hydroponic-products';
    navigate(previousPage);
  };

  return (
    <div className="relative w-full my-5">
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
      style={{ backgroundImage: 'url(./images/buyAProduct.jpg)' }}
    ></div>
    <div className="relative flex justify-end w-full my-8">
    <IoMdArrowRoundBack  className='h-8 w-8 absolute top-4 left-4 text-white' onClick={handleBack} />
      <div className="max-w-xl w-full p-4 bg-white shadow-md rounded-md mx-10 my-8">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">{t('buyProduct.formTitle')}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              {t('buyProduct.nameLabel')}
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder={t('buyProduct.namePlaceholder')}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {t('buyProduct.emailLabel')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={t('buyProduct.emailPlaceholder')}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              {t('buyProduct.phoneLabel')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder={t('buyProduct.phonePlaceholder')}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectedProducts">
              {t('buyProduct.selectedProductsLabel')}
            </label>
            <textarea
              id="selectedProducts"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              value={formData.selectedProducts}
              readOnly
            />
          </div>
          <div>
            <fieldset>
              <legend className="block text-gray-700 text-sm font-bold mb-2">{t('buyProduct.polyhouseProductsLabel')}</legend>
              {polyhouseProducts.map((product) => (
                <div key={product.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={product.id}
                    value={product.name}
                    onChange={handlePolyhouseCheckboxChange}
                    checked={selectedPolyhouseProducts.includes(product.name)}
                  />
                  <label htmlFor={product.id} className='ml-2'>{product.name}</label>
                </div>
              ))}
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend className="block text-gray-700 text-sm font-bold mb-2">{t('buyProduct.hydroponicProductsLabel')}</legend>
              {hydroponicProducts.map((product) => (
                <div key={product.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={product.id}
                    value={product.name}
                    onChange={handleHydroponicCheckboxChange}
                    checked={selectedHydroponicProducts.includes(product.name)}
                  />
                  <label htmlFor={product.id} className='ml-2'>{product.name}</label>
                </div>
              ))}
            </fieldset>
          </div>
          <div className="col-span-1 sm:col-span-2 flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t('buyProduct.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default AddtoCart;
