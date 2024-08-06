import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import Button from '../utils/Button';
import { fetchAPI, submitAPI } from '../functions/index';
import dateIcon from '../assets/icons/date-icon.svg';
import persons from '../assets/icons/persons.svg';
import phoneReminderIcon from '../assets/icons/phone-reminder.svg';
import emailReminderIcon from '../assets/icons/email-reminder.svg';
import reminderChecked from '../assets/icons/reminder-checked.svg'
import reminderUnchecked from '../assets/icons/reminder-unchecked.svg'

// Initial state for useReducer
const initialState = {
  date: new Date(),
  time: null,
  phone: null,
  email: null,
  occasion: null,
  reminder: '',
  guests: 1,
  errors: {},
  availableTimes: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_OCCASION':
      return { ...state, occasion: action.payload };
    case 'SET_REMINDER':
      return { ...state, reminder: action.payload };
    case 'SET_GUESTS':
      return { ...state, guests: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SET_AVAILABLE_TIMES':
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

const BookingForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available times for the initial date
    const initialTimes = fetchAPI(state.date);
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: initialTimes });
  }, [state.date]);

  const availableTimes = state.availableTimes;
  const timeOptions = availableTimes.map(item => ({
    value: item,
    label: item
  }));

  const occasions = [
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' }
  ];

  const validate = () => {
    let tempErrors = {};
    tempErrors.date = state.date ? "" : "Date is required.";
    tempErrors.time = state.time ? "" : "Time is required.";
    tempErrors.phone = state.reminder === "remind-phone" && state.phone !== null ? "" : "Phone is required.";
    tempErrors.email = state.reminder === "remind-email" && state.email !== null ? "" : "Email is required.";
    tempErrors.occasion = state.occasion ? "" : "Occasion is required.";
    tempErrors.guests = state.guests >= 1 && state.guests <= 10 ? "" : "Number of guests must be between 1 and 10.";
    if (state.reminder.length === 0) {
      tempErrors.reminder = "You should pick how to remind you";
      tempErrors.phone =  "";
      tempErrors.email = "";
    }
    if (state.reminder === 'remind-phone') {
      tempErrors.email = "";
    }
    if (state.reminder === 'remind-email') {
      tempErrors.phone = "";
    }

    dispatch({ type: 'SET_ERRORS', payload: tempErrors });
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Submit form data
      const formData = {
        date: state.date,
        time: state.time.value,
        phone: state.phone,
        email: state.email,
        occasion: state.occasion.value,
        guests: state.guests
      };
      if (submitAPI(formData)) {
        console.log("Form submitted successfully!");
        navigate('/success');
      }
    }
  };

  return (
    <section className='container mx-auto p-4 grow'>
      <form className='mb-5 flex flex-wrap justify-between'>
        <div className='basis-full sm:basis-[49%]'>
          <div className='flex flex-col mb-3'>
          <h3 className='text-2xl font-bold text-center mb-3'>Time & Guests</h3>
            <label htmlFor="res-date" className='hidden'>Choose date</label>
            <div className='flex items-center'>
              <img src={dateIcon} alt="date-icon" className='mr-5'/>
              <DatePicker 
                selected={state.date} 
                onChange={(date) => dispatch({ type: 'SET_DATE', payload: date })} 
                className='bg-grey text-green font-bold text-base w-full grow rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:font-bold' 
              />
            </div>
            {state.errors.date && <span className="text-red-500 text-sm">{state.errors.date}</span>}
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor="booking-time" className='hidden'>Choose time</label>
            <Select
              id="booking-time"
              className="select-container"
              classNamePrefix="select"
              value={state.time}
              onChange={(option) => dispatch({ type: 'SET_TIME', payload: option })}
              options={timeOptions}
              placeholder="Select time"
            />
            {state.errors.time && <span className="text-red-500 text-sm">{state.errors.time}</span>}
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor="guests" className='hidden'>Choose number of guests</label>
            <div className='flex items-center'>
              <img src={persons} alt="persons-icon" className='mr-5'/>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={state.guests}
                onChange={(e) => dispatch({ type: 'SET_GUESTS', payload: parseInt(e.target.value) })}
                className='w-full bg-grey text-green font-bold text-base rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:text-green placeholder:font-bold'
              />
            </div>
            {state.errors.guests && <span className="text-red-500 text-sm">{state.errors.guests}</span>}
          </div>
        </div>
        <div className='basis-full sm:basis-[49%]'>
          <div className='flex flex-col mb-5'>
            <h3 className='text-2xl font-bold text-center mb-5'>Confirmation & Reminder</h3>
            <div className='flex flex-wrap'>
              <label htmlFor="phone-reminder" className='px-9 py-3 rounded-2xl bg-grey mr-5 w-[130px] flex items-center justify-center relative'>
                <img src={phoneReminderIcon} alt="phone-remind-icon" />
                <input
                  type="radio"
                  id="phone-reminder"
                  name="reminder"
                  value='remind-phone'
                  checked={state.reminder === 'remind-phone'}
                  onChange={() => dispatch({ type: 'SET_REMINDER', payload: 'remind-phone' })}
                  className='opacity-0'
                />
                {state.reminder === 'remind-phone' ?
                  <img className='absolute bottom-2 right-2' src={reminderChecked} alt="phone-remind-icon" /> :
                <img className='absolute bottom-2 right-2'  src={reminderUnchecked} alt="phone-remind-icon" />
                }
              </label>
              <label htmlFor="email-reminder" className='px-9 py-3 rounded-2xl bg-grey w-[130px] flex items-center justify-center relative'>
                <img src={emailReminderIcon} alt="email-icon" />
                <input
                  type="radio"
                  id="email-reminder"
                  name="reminder"
                  value='remind-email'
                  checked={state.reminder === 'remind-email'}
                  onChange={() => dispatch({ type: 'SET_REMINDER', payload: 'remind-email' })}
                  className='opacity-0'
                />
                {state.reminder === 'remind-email' ?
                  <img className='absolute bottom-2 right-2' src={reminderChecked} alt="phone-remind-icon" /> :
                <img className='absolute bottom-2 right-2' src={reminderUnchecked} alt="phone-remind-icon" />
                }
              </label>
            </div>
            {state.errors.reminder && <span className="text-red-500 text-sm">{state.errors.reminder}</span>}
            {state.reminder === 'remind-phone' ?
              <div>
                <input
                  type="text"
                  id="phone"
                  placeholder='Your phone'
                  required={state.reminder === 'remind-phone'}
                  onInput={(e) => dispatch({ type: 'SET_PHONE', payload: e.target.value })}
                  className='w-full mt-5 bg-grey text-green font-bold text-base rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:text-green placeholder:font-bold'
                />
                {state.reminder === 'remind-phone' && state.errors.phone && <span className="text-red-500 text-sm">{state.errors.phone}</span>}
              </div>
                :
                null
                }
            {state.reminder === 'remind-email' ?
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder='Your email'
                  required={state.reminder === 'remind-email'}
                  onInput={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                  className='w-full mt-5 bg-grey text-green font-bold text-base rounded-2xl h-10 p-2 placeholder-shown:text-green placeholder:text-green placeholder:font-bold'
                />
                {state.reminder === 'remind-email' && state.errors.email && <span className="text-red-500 text-sm">{state.errors.email}</span>}
              </div>
                :
                null
                }
          </div>

          <div className='flex flex-col mb-5'>
            <Select
              id="occasion"
              className="select-container"
              classNamePrefix="select"
              value={state.occasion}
              onChange={(option) => dispatch({ type: 'SET_OCCASION', payload: option })}
              options={occasions}
              placeholder="Occasion"
            />
            {state.errors.occasion && <span className="text-red-500 text-sm">{state.errors.occasion}</span>}
          </div>
        </div>  
        <Button action="primary" link="#" title="Reserve a table" position='center' onClick={handleSubmit} />
      </form>
    </section>
    
  );
};

export default BookingForm;
