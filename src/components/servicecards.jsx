import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Card() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', image: '' });

  const handleReadMore = (title, description, image) => {
    setModalContent({ title, description, image });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const cardData = [
    { id: 1, title: t('card.service1.title'), description: t('card.service1.description'), image: "/images/organic.jpg" },
    { id: 2, title: t('card.service2.title'), description: t('card.service2.description'), image: "/images/hydroponic.jpg" },
    { id: 3, title: t('card.service3.title'), description: t('card.service3.description'), image: "/images/training.jpg" },
    { id: 4, title: t('card.service4.title'), description: t('card.service4.description'), image: "/images/agri-consult.jpg" },
    { id: 5, title: t('card.service5.title'), description: t('card.service5.description'), image: "/images/community.jpg" },
    { id: 6, title: t('card.service6.title'), description: t('card.service6.description'), image: "/images/supply.jpg" }
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-green-800 my-4 text-center">{t('card.ourServices')}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center'>
        {cardData.map((card) => (
          <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
            <img className="w-full" src={card.image} alt={`${card.title} image`} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">{card.description.slice(0, 100)}...</p>
              <button onClick={() => handleReadMore(card.title, card.description, card.image)} className="text-blue-500">{t('card.readMore')}</button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 mt-20 overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="relative bg-white max-w-lg mx-auto p-8 rounded-lg shadow-xl">
            <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900">&times;</button>
            <h2 className="text-xl font-bold mb-4">{modalContent.title}</h2>
            <img className="w-full mb-4" src={modalContent.image} alt={`${modalContent.title} image`} />
            <p className="text-gray-700">{modalContent.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
