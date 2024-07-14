import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./Pages/Blogs.jsx";
import Home from "./Pages/Home.jsx";




const FarmDetail = lazy(() => import("./components/farmdetails.jsx") );

const ContactForm = lazy(() => import("./components/contactform.jsx") );

const PolyhouseProducts = lazy(() => import("./Pages/PolyhouseProducts.jsx") );

const HydroponicProducts = lazy(() => import("./Pages/HydroponicProducts.jsx") );

const Farms = lazy(() => import("./Pages/Farms.jsx") );

const BB = lazy(() => import("./Pages/BBservice.jsx") );

const AMC = lazy(() => import("./Pages/AMCservice.jsx") );


const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/polyhouseproducts" element={<PolyhouseProducts />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/farm/:id" element={<FarmDetail/>}/>
        <Route path="/AMCservices" element={<AMC />} />
        <Route path="/Buybackservices" element={<BB />} />
        <Route path="/polyhouse-products" element={<PolyhouseProducts />} />
        <Route path="/hydroponic-products" element={<HydroponicProducts />} />
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>{" "}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
