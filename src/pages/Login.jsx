import React, { useState } from 'react';
import Button from '../utils/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/success.css';
import {toastConfig} from '../constants/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      login(email);
      toast('Successfully logged in', toastConfig);
      navigate('/');

      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className='container mx-auto px-4 grow flex flex-col'>
      <h2 className='text-primary text-3xl md:text-5xl font-semibold my-5 xs:my-7'>Login</h2>
      <form onSubmit={handleSubmit} className='mt-5 md:mt-10 md:max-w-screen-sm'>
        <div className='flex flex-col mb-1'>
          <label htmlFor="email" className='text-xl'>Email</label>
          <input
            id='email'
            name='email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder='Email'
            className='rounded-2xl bg-grey h-10 p-[10px] text-green placeholder-shown:text-green placeholder-shown:font-bold'
          />
          {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
        </div>
        <div className='flex flex-col mb-1'>
          <label htmlFor="password" className='text-xl'>Password</label>
          <input
            id='password'
            name='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder='Password'
            className='rounded-2xl bg-grey h-10 p-[10px] text-green placeholder-shown:text-green placeholder-shown:font-bold'
          />
          {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
        </div>
        <Button type="submit" action='primary' title="Login" className='mt-4' onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Login;
