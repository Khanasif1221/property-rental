import React, { useState } from 'react';
import { projectsData } from '../assets/assets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProperty || !checkInDate || !checkOutDate || !userName || !userEmail || !userPhone) {
      setMessage('Please fill out all the fields.');
    } else {
      setMessage('Your booking has been successfully submitted!');
      // You can add more actions like sending this data to an API here.
    }
  };

  return (
    <div className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8">
        Book Your Dream Property
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* Property Selection */}
        <div className="mb-6">
          <label htmlFor="property" className="block text-lg font-medium mb-2">Select Property</label>
          <select
            id="property"
            value={selectedProperty}
            onChange={(e) => setSelectedProperty(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Choose a property</option>
            {projectsData.map((project) => (
              <option key={project.title} value={project.title}>
                {project.title} - {project.location}
              </option>
            ))}
          </select>
        </div>

        {/* Check-in and Check-out Date Picker */}
        <div className="mb-6 flex gap-6">
          <div className="w-full">
            <label htmlFor="checkIn" className="block text-lg font-medium mb-2">Check-in Date</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              minDate={new Date()}
              className="w-full p-3 border border-gray-300 rounded-md"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select check-in date"
            />
          </div>
          <div className="w-full">
            <label htmlFor="checkOut" className="block text-lg font-medium mb-2">Check-out Date</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              minDate={checkInDate ? checkInDate : new Date()}
              className="w-full p-3 border border-gray-300 rounded-md"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select check-out date"
            />
          </div>
        </div>

        {/* User Details */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md"
        >
          Submit Booking
        </button>
      </form>

      {/* Success/Failure Message */}
      {message && (
        <div className="mt-6 text-center text-xl">
          <p className={message === 'Your booking has been successfully submitted!' ? 'text-green-600' : 'text-red-600'}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
