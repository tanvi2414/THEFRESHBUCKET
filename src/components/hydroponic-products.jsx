import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import LikeButton from './Likebutton';

const HydroponicProduct = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const productData = [
    { title: t('hydroponic-products.product1.title'), imageUrl: "../images/teflon.jpg" },
    { title: t('hydroponic-products.product2.title'), imageUrl: "../images/upvc.jpg" },
    { title: t('hydroponic-products.product3.title'), imageUrl: "../images/cropnet.jpg" },
    { title: t('hydroponic-products.product4.title'), imageUrl: "../images/twinerope.jpg" },
    { title: t('hydroponic-products.product5.title'), imageUrl: "../images/nft2mm.jpg" },
    { title: t('hydroponic-products.product6.title'), imageUrl: "../images/nft3mm.jpg" },
  ];

  const handleAddToCart = () => {
    // Implement action on add to cart, such as navigation or state update
    // For example, navigate to /buysomething
    navigate('/buysomething'); // Navigate to /buysomething
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap -mx-4">
        {productData.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto">
              <img className="w-full" src={product.imageUrl} alt={`Image for ${product.title}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <button
                  className="bg-green-950 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleAddToCart}
                >
                  {t('hydroponic-products.AddToCart')}
                </button>
                <LikeButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HydroponicProduct;
