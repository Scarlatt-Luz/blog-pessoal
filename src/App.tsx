import React from 'react';
import './App.css';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
    <Navbar />
     <Home />
    <Footer />
  </>
  );
}

export default App;
