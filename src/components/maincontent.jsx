import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomCarousel from './Carousel';
import FarmersChallenges from './Farmersproblem';
import BuySomethingForm from './buysomething';
import Card from './servicecards';

const MainContent = () => {
  const { t } = useTranslation(); 

  return (
    <main className="flex-grow p-8 bg-white">
      <FarmersChallenges />
    


    
      <section className="relative py-16 bg-gray-100">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm" 
    style={{ 
      backgroundImage: "url('https://img.freepik.com/free-vector/fresh-green-leaves-flying-wind_107791-17198.jpg?t=st=1720597943~exp=1720601543~hmac=0ff6c0039b3ef10b989f6610eb0a649ef79618a42efecc17d11cdfeb75140758&w=1380')"
    }}
  ></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl md:text-5xl mb-4 font-extrabold text-center text-green-900 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-green-800" id="about-us">
  {t('whatwetexts.whatWeDoTitle')}
</h1>
<br></br>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 font-bold text-black hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h4 className="text-2xl  mb-2 text-center">{t('whatwetexts.whatWeDoBullet1')}</h4>
      </div>
      <div className="p-6 bg-grey-700 font-bold text-black rounded-lg  hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h4 className="text-2xl  mb-2 text-center">{t('whatwetexts.whatWeDoBullet2')}</h4>
      </div>
      <div className="p-6  bg-grey-700 font-bold text-black rounded-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h4 className="text-2xl  mb-2 text-center">{t('whatwetexts.whatWeDoBullet3')}</h4>
      </div>
      <div className="p-6  bg-grey-700 font-bold text-black rounded-lg  hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h4 className="text-2xl mb-2 text-center">{t('whatwetexts.whatWeDoBullet4')}</h4>
      </div>
      <div className="p-6  bg-grey-700 font-bold  text-black rounded-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h4 className="text-2xl  mb-2 text-center">{t('whatwetexts.whatWeDoBullet5')}</h4>
      </div>
      <div className="p-6  bg-grey-700 font-bold  text-black rounded-lg  hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h4 className="text-2xl mb-2 text-center">{t('whatwetexts.whatWeDoBullet6')}</h4>
      </div>
    </div>
  </div>
</section>


<div id="#projects">
        <CustomCarousel />
      </div>
      <Card />
      <BuySomethingForm />
    </main>
  );
};

export default MainContent;
