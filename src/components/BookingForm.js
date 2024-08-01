import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../utils/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import dateIcon from '../assets/icons/date-icon.svg';
import persons from '../assets/icons/persons.svg';
import {fetchAPI, submitAPI} from '../functions/index'

// Initial state for useReducer
const initialState = {
  date: new Date(),
  time: null,
  occasion: null,
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
    case 'SET_OCCASION':
      return { ...state, occasion: action.payload };
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
    tempErrors.occasion = state.occasion ? "" : "Occasion is required.";
    tempErrors.guests = state.guests >= 1 && state.guests <= 10 ? "" : "Number of guests must be between 1 and 10.";
    dispatch({ type: 'SET_ERRORS', payload: tempErrors });
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      const formData = {
        date: state.date,
        time: state.time,
        occasion: state.occasion,
        guests: state.guests
      };
      if (submitAPI(formData)) {
        console.log("Form submitted successfully!");
        navigate('/success')
      }
    }
  };

  return (
    <form className='mb-5'>
      <div className='flex flex-col mb-3'>
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

      <div className='flex flex-col mb-5'>
        <label htmlFor="occasion" className='hidden'>Occasion</label>
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

      <Button action="primary" link="#" title="Make Your reservation" position='center' onClick={handleSubmit}/>
    </form>
  );
};

export default BookingForm;
