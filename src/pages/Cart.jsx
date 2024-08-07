import React , { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from '../utils/Button';
import removeIcon from '../assets/icons/cart/delete.svg'

const Cart = ({items}) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.qty * parseFloat(item.price);
  }, 0);


  return (
    <section className='container mx-auto p-4'>
        <h1 className='text-primary text-3xl md:text-5xl font-semibold my-5 xs:my-7'>Cart</h1>
        {cartItems && cartItems.length > 0 ?
        <>
        <ul className='flex items-center mb-3 w-full'>
          <li className='basis-[20%] grow-0 px-2'></li>
          <li className='basis-[50%] grow-0 px-2'>Title</li>
          <li className='basis-[10%] grow-0 px-2 text-center'>Price</li>
          <li className='basis-[10%] grow-0 px-2 text-center'>Qty</li>
          <li className='basis-[10%] grow-0 px-2 text-center'></li>
        </ul>
        <ul>
            {cartItems.map(item => (
              <li key={item.id} className='flex items-center mb-3'>
                <img className='max-w-[20%] max-h-[100px] basis-[20%] grow-0 shrink-0 px-2' src={item.img} alt={item.title} />
                <h3 className='px-2 basis-[50%] grow h-full font-bold text-base sm:text-xl'>{item.title}</h3>
                <p className='basis-[10%] grow-0 text-center px-2'>{item.price}</p>
                <p className='basis-[10%] grow-0 text-center px-2'>{item.qty}</p>
                <button className='basis-[10%] grow-0 flex items-center justify-center' onClick={() => removeFromCart(item.id)}>
                  <img className='max-w-5 sm:max-w-10' src={removeIcon} alt="remove-icon" />
                </button>
              </li>
            ))}
          </ul>
          <div className='flex justify-end items-center mt-5'>
            <h3 className='text-2xl font-bold mr-5'>Total: ${totalPrice.toFixed(2)}</h3>
            <Button action='primary' link='/checkout' title='Checkout'/>
          </div>
          
        </>
        :
        <>
            <h3 className='mb-5'>Your cart is empty</h3>
            <Button action="primary" link="/" title="Return to Home" position='center'/>
        </>
        }
    </section>
  )
}

export default Cart
