import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../utils/Button';

const Checkout = () => {
  const { cartItems, updateCartItem } = useContext(CartContext);

  const navigate = useNavigate();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    reminder: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    // Filter cart items to only include items with qty > 0
    const submittedCartItems = cartItems.filter(item => item.qty > 0);
  
    console.log('Order submitted', { submittedCartItems, deliveryDetails });
  
    navigate('/success-checkout', { state: { submittedCartItems } });
  
    cartItems.forEach(item => updateCartItem(item.id, 0));
  };
  

  const validateForm = () => {
    const newErrors = {};
    if (!deliveryDetails.name) newErrors.name = 'Name is required';
    if (!deliveryDetails.address) newErrors.address = 'Address is required';
    if (deliveryDetails.reminder === 'remind-phone' && !deliveryDetails.phone) newErrors.phone = 'Phone is required';
    if (deliveryDetails.reminder === 'remind-email' && !deliveryDetails.email) newErrors.email = 'Email is required';
    if (!deliveryDetails.reminder) newErrors.reminder = 'Reminder is required';
    return newErrors;
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.qty * parseFloat(item.price), 0);

  return (
    <section className='container mx-auto p-4'>
      <h1 className='text-primary text-3xl md:text-5xl font-semibold my-5 xs:my-7'>Checkout</h1>
      <form onSubmit={handleSubmit} className='mb-5 flex flex-wrap justify-between'>
        <div className='basis-full sm:basis-[49%]'>
          <div className='flex flex-col mb-3'>
            <h3 className='text-2xl font-bold text-center mb-3'>Delivery Details</h3>
            <label htmlFor="name" className='hidden'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={deliveryDetails.name}
              onChange={handleChange}
              placeholder='Your Name'
              required
              className='bg-grey text-green font-bold text-base w-full grow rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:font-bold'
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor="address" className='hidden'>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={deliveryDetails.address}
              onChange={handleChange}
              placeholder='Your Address'
              required
              className='bg-grey text-green font-bold text-base w-full grow rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:font-bold'
            />
            {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
          </div>
        </div>
        <div className='basis-full sm:basis-[49%]'>
          <div className='flex flex-col mb-3'>
            <h3 className='text-2xl font-bold text-center mb-3'>Confirmation & Reminder</h3>
            <div className='flex flex-wrap mb-3'>
              <label htmlFor="phone-reminder" className='px-9 py-3 rounded-2xl bg-grey mr-5 w-[130px] flex items-center justify-center relative'>
                <input
                  type="radio"
                  id="phone-reminder"
                  name="reminder"
                  value='remind-phone'
                  checked={deliveryDetails.reminder === 'remind-phone'}
                  onChange={handleChange}
                  className='opacity-0'
                />
                <span className='absolute bottom-1 right-1'>{deliveryDetails.reminder === 'remind-phone' ? '✔' : ''}</span>
                Phone
              </label>
              <label htmlFor="email-reminder" className='px-9 py-3 rounded-2xl bg-grey w-[130px] flex items-center justify-center relative'>
                <input
                  type="radio"
                  id="email-reminder"
                  name="reminder"
                  value='remind-email'
                  checked={deliveryDetails.reminder === 'remind-email'}
                  onChange={handleChange}
                  className='opacity-0'
                />
                <span className='absolute bottom-1 right-1'>{deliveryDetails.reminder === 'remind-email' ? '✔' : ''}</span>
                Email
              </label>
            </div>
            {errors.reminder && <span className="text-red-500 text-sm">{errors.reminder}</span>}
            {deliveryDetails.reminder === 'remind-phone' && (
              <div className='flex flex-col mb-3'>
                <label htmlFor="phone" className='hidden'>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={deliveryDetails.phone}
                  onChange={handleChange}
                  placeholder='Your Phone'
                  required
                  className='bg-grey text-green font-bold text-base w-full grow rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:font-bold'
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </div>
            )}
            {deliveryDetails.reminder === 'remind-email' && (
              <div className='flex flex-col mb-3'>
                <label htmlFor="email" className='hidden'>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={deliveryDetails.email}
                  onChange={handleChange}
                  placeholder='Your Email'
                  required
                  className='bg-grey text-green font-bold text-base w-full grow rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:font-bold'
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
            )}
          </div>
        </div>
      </form>

      <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className='flex items-center mb-3'>
            <img className='max-w-[20%] max-h-[100px] basis-[20%] grow-0 shrink-0 px-2' src={item.img} alt={item.title} />
            <h3 className='px-2 basis-[50%] grow h-full font-bold text-base sm:text-xl'>{item.title}</h3>
            <p className='basis-[10%] grow-0 text-center px-2'>{item.price}</p>
            <p className='basis-[10%] grow-0 text-center px-2'>{item.qty}</p>
          </li>
        ))}
      </ul>
      <div className='flex justify-end items-center mt-5'>
        <h3 className='text-2xl font-bold mr-5'>Total Price: ${totalPrice.toFixed(2)}</h3>
        <Button action="primary" link="#" position='end' title="Confirm Order" onClick={handleSubmit} />
      </div>
    </section>
  );
};

export default Checkout;
