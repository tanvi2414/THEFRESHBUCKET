import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-green-950 text-white p-6 mt-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-2">{t('footer.visionTitle')}</h2>
          <p>{t('footer.visionContent')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">{t('footer.missionTitle')}</h2>
          <p>{t('footer.missionContent')}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">{t('footer.servicesTitle')}</h2>
          <ul className="space-y-1">
            <li><a href="/home" className="hover:underline">{t('footer.about')}</a></li>
            <li><a href="/home" className="hover:underline">{t('navbar.mentorship')}</a></li>
            <li><a href="/blogs" className="hover:underline">{t('navbar.blog')}</a></li>
            <li><a href="/home" className="hover:underline">{t('footer.faq')}</a></li>
            <li><a href="/contactus" className="hover:underline">{t('footer.contactUsTitle')}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">{t('contactUs.contactDetails')}</h2>
          <div className="mb-4">
            <p className="text-white mb-2">{t('contactUs.locationAddress')}</p>
            <p className="text-white">680, Adarsh Vihar, Kuleshra, Greater Noida, Uttar Pradesh, India</p>
          </div>
          <div className="mb-4">
            <p className="text-white mb-2">{t('contactUs.emailAddress')}</p>
            <div className='flex space-x-2'>
              <IoIosMail className='w-6 h-6'/>
              <p className='font-bold'>info@thefreshbucket.com</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-white mb-2">{t('contactUs.phoneNumber')}</p>
            <div className='flex space-x-2'>
              <IoIosCall className='w-6 h-6'/>
              <p className='font-bold'>7053855854</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-white font-bold">GSTIN:09BNQPG7463N1Z4</p>
          </div>
          <hr className="my-4 border-gray-400"/>
          <div className="flex space-x-4 justify-start">
            <img src="./images/msme.svg" alt="MSME Logo" className="h-16"/>
            <img src="./images/organiclogo.png" alt="Organic Logo" className="h-16"/>
            <img src="./images/startup.png" alt="Startup Logo" className="h-16"/>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xl font-bold mb-2">{t('footer.contactUsTitle')}</h2>
          <div className="flex space-x-8">
            <a href="https://www.instagram.com/thefreshbucket_india/" target="_blank" rel="noopener noreferrer"><FaSquareInstagram className="w-7 h-7" /></a>
            <a href="https://www.linkedin.com/company/the-fresh-bucket/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-7 h-7"/></a>
            <a href="https://x.com/Thefreshbucket?t=d6CHZ-TV7-0TeaHL7OgloA&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter className="w-8 h-8"/></a>
            <a href="https://www.facebook.com/freshbuckets/" target="_blank" rel="noopener noreferrer"><FaFacebook className="w-8 h-8"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
