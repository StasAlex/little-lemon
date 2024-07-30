import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Login from './pages/Login';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';
import Dish from './pages/Dish';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen font-primary'>
        <Header />
        <main className='flex flex-grow flex-col w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order/:dish" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dishes/:slug" element={<Dish/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
