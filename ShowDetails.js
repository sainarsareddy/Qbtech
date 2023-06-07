import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import BookingForm from './BookingForm';
const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }
  const handleBookTicket = (movie) => {
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    
  };
  return (
    
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <Button onClick={handleBookTicket(show)} variant="outlined">Book ticket</Button>
    </div>
  );
  
};

export default ShowDetails;
