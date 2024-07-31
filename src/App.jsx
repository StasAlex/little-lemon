import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Header from './components/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Login from './pages/Login';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';
import Dish from './pages/Dish';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
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
              <Route path="/dishes/:slug" element={<Dish />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
