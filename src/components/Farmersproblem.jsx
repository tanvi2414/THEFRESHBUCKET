import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const FarmersChallenges = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const cardRef = useRef(null);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMore]);

  return (
    <div className="relative w-full my-5">
      <img 
        src="../images/main.jpg" 
        alt="Farm" 
        className="w-full h-[300px] md:h-[500px] object-cover shadow-lg" 
      />
      <div 
        ref={cardRef}
        className={`absolute inset-0 bg-black bg-opacity-60 p-4 md:p-6 rounded-b-lg flex flex-col justify-start items-start transition-all duration-300 ease-in-out ${
          showMore ? 'max-h-screen overflow-y-auto' : 'h-40'
        }`}
      >
        <div className="p-2 md:p-4 bg-black bg-opacity-70 rounded-lg w-full">
          <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed drop-shadow-md">
            {t('farmers-challenges.summary')}
            {!showMore && (
              <span className="text-green-500 cursor-pointer underline ml-2" onClick={toggleText}>
                {t('farmers-challenges.readMore')}
              </span>
            )}
          </p>
          {showMore && (
            <div className="text-white mt-4 md:mt-6 text-base md:text-xl font-semibold leading-relaxed drop-shadow-md">
              <p className="mb-4">{t('farmers-challenges.details')}</p>
              <span className="text-green-500 cursor-pointer underline mt-2 md:mt-4" onClick={toggleText}>
                {t('farmers-challenges.readLess')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmersChallenges;
