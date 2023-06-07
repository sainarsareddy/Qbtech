import React, { useState } from 'react';

const BookingForm = () => {
  const selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      movieName: selectedMovie.name,
      name,
      email,
    };

    sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Booking successful!');
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <h3>Movie: {selectedMovie.name}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
