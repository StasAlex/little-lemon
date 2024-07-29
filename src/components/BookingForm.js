import Button from '../utils/Button';
import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="booking-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="booking-time">Choose time</label>
      <select id="booking-time" value={time} onChange={handleTimeChange} required>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <input type="number" placeholder="1" min="1" max="10" id="guests" required></input>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" required>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <Button action="primary" link="#" title="Make Your reservation"/>
    </form>
  );
};

export default BookingForm;
