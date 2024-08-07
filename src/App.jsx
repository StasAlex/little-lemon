import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './App.css';
import Header from './components/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Booking from './pages/Booking';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Dish from './pages/Dish';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SuccessCheckout from './pages/SuccessCheckout';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <div className='flex flex-col min-h-screen font-primary'>
          <Header />
          <main className='flex flex-grow flex-col w-full'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:link" element={<AboutPage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/order/:slug" element={<OrderOnline />} />
              <Route path="/login" element={<Login />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dishes/:slug" element={<Dish />} />
              <Route path="/menu/dishes/:slug" element={<Dish />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success-checkout" element={<SuccessCheckout />} />
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
