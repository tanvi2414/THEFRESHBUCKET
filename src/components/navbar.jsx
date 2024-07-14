import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from "react-icons/gr";
import { Link } from 'react-router-dom';
import '../App.css';
import '../font.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [navServicesOpen,setNavServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [navProductsOpen,setNavProductsOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [navbarLanguageDropdownOpen, setNavbarLanguageDropdownOpen] = useState(false);
  const [sideMenuLanguageDropdownOpen, setSideMenuLanguageDropdownOpen] = useState(false);
  
  const toggleNavServices=()=>{
    setNavServicesOpen(!navServicesOpen)
    setServicesOpen(false);
    setProductsOpen(false);
    setNavbarLanguageDropdownOpen(false);
    setNavProductsOpen(false);
    setSideMenuLanguageDropdownOpen(false);
    setSideMenuOpen(false);
  }
  const toggleNavProducts=()=>{
    setNavProductsOpen(!navProductsOpen)
    setNavServicesOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setNavbarLanguageDropdownOpen(false);
    setSideMenuLanguageDropdownOpen(false);
    setSideMenuOpen(false);
  }
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
    setNavProductsOpen(false);
    setNavServicesOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setNavbarLanguageDropdownOpen(false);
    setSideMenuLanguageDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setProductsOpen(!productsOpen);
    setServicesOpen(false);
    setNavbarLanguageDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
    setProductsOpen(false);
    setNavbarLanguageDropdownOpen(false);
  };

  const toggleNavbarLanguageDropdown = () => {
    setNavbarLanguageDropdownOpen(!navbarLanguageDropdownOpen);
    setProductsOpen(false);
    setServicesOpen(false);
    setNavProductsOpen(false);
    setNavServicesOpen(false);
    setSideMenuOpen(false);
    setSideMenuLanguageDropdownOpen(false);
  };

  const toggleSideMenuLanguageDropdown = () => {
    setSideMenuLanguageDropdownOpen(!sideMenuLanguageDropdownOpen);
    setProductsOpen(false);
    setServicesOpen(false);
    setNavbarLanguageDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setProductsOpen(false);
    setServicesOpen(false);
    setNavbarLanguageDropdownOpen(false);
    setSideMenuLanguageDropdownOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang); 
    setNavbarLanguageDropdownOpen(false);
    setSideMenuLanguageDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar fixed top-0 w-full bg-green-950 text-white flex justify-between items-center px-4 py-2 md:p-4">
        <div className="flex items-center">
          <button onClick={toggleSideMenu} className="text-white focus:outline-none mr-2">
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center justify-center flex-grow">
            <img src="../images/logo2.png" alt="logo" className="h-20 w-20 md:object-contain mr-2" />
            <h2 className="text-xl md:text-2xl font-semibold uppercase playfair-display">
              {t('navbar.websiteTitle')}
            </h2>
          </div>
        </div>
        <ul className="hidden md:flex space-x-6 text-2xl pr-3">
          <Link to="/home">
            <li className="hover:scale-110 hover:underline transition-transform duration-200">{t('navbar.home')}</li>
          </Link>
          <Link to="/farms">
            <li className="hover:scale-110 hover:underline transition-transform duration-200">{t('navbar.farms')}</li>
          </Link>
          <li className="relative hover:scale-110 hover:underline transition-transform duration-200">
            <a href="#products" onClick={toggleNavProducts}>
              {t('navbar.products')}
            </a>
            {navProductsOpen && (
              <ul className="absolute right-0 w-48 bg-white text-black shadow-lg">
                <li className="py-1">
                  <Link to="/polyhouse-products" className="block px-4 hover:bg-gray-200 text-base">{t('navbar.polyhouseProducts')}</Link>
                </li>
                <li className="py-1">
                  <Link to="/hydroponic-products" className="block px-4 hover:bg-gray-200 text-base">{t('navbar.hydroponicProducts')}</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative hover:scale-110 hover:underline transition-transform duration-200">
            <a href="#services" onClick={toggleNavServices}>
              {t('navbar.services')}
            </a>
            {navServicesOpen && (
              <ul className="absolute right-0 w-48 bg-white text-black shadow-lg">
                <li className="py-1">
                  <Link to="/AMCservices" className="block px-4 hover:bg-gray-200 text-base">{t('navbar.tfbAMCService')}</Link>
                </li>
                <li className="py-1">
                  <Link to="/Buybackservices" className="block px-4 hover:bg-gray-200 text-base">{t('navbar.tfbBuybackService')}</Link>
                </li>
              </ul>
            )}
          </li>
          <Link to="/contactus">
            <li className="hover:scale-110 hover:underline transition-transform duration-200">{t('navbar.contactUs')}</li>
          </Link>
          <div className="relative">
            <button className="focus:outline-none hover:scale-110 hover:underline transition-transform duration-200" onClick={toggleNavbarLanguageDropdown}>
              <GrLanguage className='w-8 h-8'/>
            </button>
            {navbarLanguageDropdownOpen && (
              <ul className="absolute right-0 w-32 bg-white text-black shadow-lg">
                <li className="p-2 hover:bg-gray-200" onClick={() => changeLanguage('en')}>{t('navbar.english')}</li>
                <li className="p-2 hover:bg-gray-200" onClick={() => changeLanguage('hi')}>{t('navbar.hindi')}</li>
              </ul>
            )}
          </div>
        </ul>
      </nav>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full bg-green-950 text-white p-4 transition-transform transform ${sideMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`} style={{ width: '250px', zIndex: 2000 }}>
        <div className="flex justify-between items-center mb-4">
          <button onClick={toggleSideMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="relative">
            <button className="focus:outline-none hover:scale-110 hover:underline transition-transform duration-200" onClick={toggleSideMenuLanguageDropdown}>
              <GrLanguage className='w-8 h-8'/>
            </button>
            {sideMenuLanguageDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg">
                <li className="p-2 hover:bg-gray-200" onClick={() => changeLanguage('en')}>{t('navbar.english')}</li>
                <li className="p-2 hover:bg-gray-200" onClick={() => changeLanguage('hi')}>{t('navbar.hindi')}</li>
              </ul>
            )}
          </div>
        </div>
        <ul className="space-y-2">
          <li>
            <Link to="/home" className="nav-link text-lg font-medium hover:text-green-500" onClick={() => { closeDropdowns(); toggleSideMenu(); }}>
              {t('navbar.home')}
            </Link>
          </li>
          <li>
            <Link to="/farms" className="nav-link text-lg font-medium hover:text-green-500 flex justify-between items-center">
              {t('navbar.farms')}
            </Link>
          </li>
          <li>
            <a href="#products" className="nav-link text-lg font-medium hover:text-green-500 flex justify-between items-center" onClick={toggleProductsDropdown}>
              {t('navbar.products')}
              <svg className={`h-5 w-5 transition-transform transform ${productsOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 14l-6-6h12l-6 6z" clipRule="evenodd" />
              </svg>
            </a>
            {productsOpen && (
              <ul className="ml-4 mt-1 text-white">
                <li className="py-1">
                  <Link to="/polyhouse-products" className="block px-4 py-2 hover:bg-gray-700">{t('navbar.polyhouseProducts')}</Link>
                </li>
                <li className="py-1">
                  <Link to="/hydroponic-products" className="block px-4 py-2 hover:bg-gray-700">{t('navbar.hydroponicProducts')}</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#services" className="nav-link text-lg font-medium hover:text-green-500 flex justify-between items-center" onClick={toggleServicesDropdown}>
              {t('navbar.services')}
              <svg className={`h-5 w-5 transition-transform transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 14l-6-6h12l-6 6z" clipRule="evenodd" />
              </svg>
            </a>
            {servicesOpen && (
              <ul className="ml-4 mt-1 text-white">
                <li className="py-1">
                  <Link to="/AMCservices" className="block px-4 py-2 hover:bg-gray-700">{t('navbar.tfbAMCService')}</Link>
                </li>
                <li className="py-1">
                  <Link to="/Buybackservices" className="block px-4 py-2 hover:bg-gray-700">{t('navbar.tfbBuybackService')}</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/home" className="nav-link text-lg font-medium hover:text-green-500" onClick={() => { closeDropdowns(); toggleSideMenu(); }}>
              {t('navbar.mentorship')}
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="nav-link text-lg font-medium hover:text-green-500 flex justify-between items-center">
              {t('navbar.blog')}
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="nav-link text-lg font-medium hover:text-green-500" onClick={() => { closeDropdowns(); toggleSideMenu(); }}>
              {t('navbar.contactUs')}
            </Link>
          </li>
          <li className="md:hidden">
            <WhatsAppButton phoneNumber={phoneNumber} message={message} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
