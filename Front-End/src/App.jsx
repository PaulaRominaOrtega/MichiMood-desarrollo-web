import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <FilterBar/>
      <ProductList/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;