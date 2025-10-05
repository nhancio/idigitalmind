import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Clients from '../components/Clients';
import Approach from '../components/Approach';
import Products from '../components/Products';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Approach />
      <WhyUs />
      <Clients />
      <About />
      <Contact />
    </>
  );
};

export default Home;