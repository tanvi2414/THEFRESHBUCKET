import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import farmDataEN from '../locales/farmData-en.json';
import farmDataHI from '../locales/farmData-hi.json';

const Farm = () => {
    const { t, i18n } = useTranslation();
    const farmData = i18n.language === 'hi' ? farmDataHI : farmDataEN; 

  return (
        <>
            <div className="mx-10 mt-8">
                <div className="flex flex-wrap -mx-4">
                    {farmData.map((farm, index)  => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto">
                                <img className="w-full transition-transform duration-300 ease-in-out transform hover:scale-105" src={farm.imageUrl} alt={`Image for ${farm.title}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{farm.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {farm.description.slice(0, 100)}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <Link to={`/farm/${farm.id}`}>
                                        <button className="bg-green-950 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                            {t('farms.viewDetails')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
  );
};

export default Farm;
