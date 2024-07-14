
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Layout from '../components/layout.jsx';
import farmDataEN from '../locales/farmData-en.json';
import farmDataHI from '../locales/farmData-hi.json';

const FarmDetail = () => {
    const { t, i18n } = useTranslation();
    const { id } = useParams(); 

    const farmData = i18n.language === 'hi' ? farmDataHI : farmDataEN;
    const farm = farmData.find(f => f.id === id); 

    if (!farm) {
        return <div>Farm not found</div>;
    }


    return (
        <Layout>
            <Navbar />
            <div className="container mx-auto mt-8 mb-8 px-10 text-justify relative bg-gray-100 p-10 rounded-lg shadow-lg">
                <div className="absolute top-0 right-10 z-10">
                    <Link to="/farms" >
                        <svg
                            className="h-8 w-8 text-gray-600 hover:text-gray-900"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </Link>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center text-green-800">{farm.title}</h1>
                <img className="w-80 mb-4 rounded-lg shadow-lg block mx-auto hover:scale-105 transition-transform duration-300" src={farm.imageUrl} alt={`Image for ${farm.title}`} />
                <p className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed mb-8">{farm.description}</p>

                {farm.details.map((section, index) => (
                    <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300">
                        <h2 className="font-sans text-xl md:text-2xl font-semibold mb-4 text-green-800">{section.title}</h2>
                        <ul className="list-disc pl-6">
                            {section.points.map((point, idx) => (
                                <li key={idx} className="trykker-regular text-lg text-black-700 mb-2">{point}</li>
                                
                            ))}
                        </ul>
                    </div>
                    
                ))}
                <div className="mb-8 bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300">
                    <h2 className="font-sans text-xl md:text-2xl font-semibold mb-4 text-green-800">{t('Conclusion')}</h2>
                    <p className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed mb-8">{farm.conclusion}</p>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default FarmDetail;
