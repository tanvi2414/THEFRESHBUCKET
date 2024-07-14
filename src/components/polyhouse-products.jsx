import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import BuySomethingForm from './buysomething';
import LikeButton from './Likebutton';

const PolyhouseProduct = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = [
    { title: t('polyhouse-products.product1.title'), imageUrl: "../images/polyethylene.jpg" },
    { title: t('polyhouse-products.product2.title'), imageUrl: "../images/zigzagwire.jpg" },
    { title: t('polyhouse-products.product3.title'), imageUrl: "../images/insectnet.jpg" },
    { title: t('polyhouse-products.product4.title'), imageUrl: "../images/shade.jpg" },
    { title: t('polyhouse-products.product5.title'), imageUrl: "../images/gutter.jpg" },
    { title: t('polyhouse-products.product6.title'), imageUrl: "../images/joint.jpg" },
    { title: t('polyhouse-products.product7.title'), imageUrl: "../images/aluminuimprofile.jpg" },
    { title: t('polyhouse-products.product8.title'), imageUrl: "../images/screws.jpg" },
    { title: t('polyhouse-products.product9.title'), imageUrl: "../images/nutbolt.jpg" },
    { title: t('polyhouse-products.product10.title'), imageUrl: "../images/clamp.jpg" }
  ];

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    navigate('/buysomething'); // Navigate to /buysomething
  };

  return (
    <div className="mx-10 mt-8">
      <div className="flex flex-wrap -mx-4">
        {productData.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto">
              <div className="h-48">
                <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" src={product.imageUrl} alt={`Image for ${product.title}`} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <button
                  className="bg-green-950 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddToCart(product)}
                >
                  {t('polyhouse-products.addToCart')}
                </button>
                <LikeButton />
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && <BuySomethingForm product={selectedProduct} />}
    </div>
  );
};

export default PolyhouseProduct;
