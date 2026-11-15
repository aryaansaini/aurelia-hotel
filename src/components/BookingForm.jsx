import React from "react";
import { useState } from 'react';
import { ArrowUpRight, CalendarDays, Users } from 'lucide-react';

export default function BookingForm() {
  const [message, setMessage] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const today = new Date().toLocaleDateString('en-CA');

  function handleSubmit(event) {
    event.preventDefault();

    if (checkOut <= checkIn) {
      setMessage('Check-out date must be after check-in date.');
      return;
    }

    // TODO: Connect this form to your booking/availability backend.
    setMessage('Demo only: live room availability is not connected yet.');
  }

  return (
    <form id="booking" className="booking" onSubmit={handleSubmit}>
      <label>
        <span><CalendarDays size={15} /> CHECK IN</span>
        <input type="date" min={today} value={checkIn} onChange={(event) => setCheckIn(event.target.value)} required />
      </label>
      <label>
        <span><CalendarDays size={15} /> CHECK OUT</span>
        <input type="date" min={checkIn || today} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} required />
      </label>
      <label>
        <span><Users size={15} /> GUESTS</span>
        <select defaultValue="2" aria-label="Number of guests">
          {[1, 2, 3, 4].map((count) => <option key={count} value={count}>{count} {count === 1 ? 'Guest' : 'Guests'}</option>)}
        </select>
      </label>
      <button type="submit">CHECK AVAILABILITY <ArrowUpRight size={17} /></button>
      {message && <p role="status">{message}</p>}
    </form>
  );
}
