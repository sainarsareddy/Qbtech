import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LiveTvIcon from '@mui/icons-material/LiveTv';
const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div>
      <div className='heading'>
        <h1>TV Shows</h1>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {shows.map(({ show }) => (
        <Grid key={show.id} item xs={2} sm={4} md={4}>
          <LiveTvIcon size = "large"></LiveTvIcon>
          <h3>{show.name}</h3>
          <p>{show.language}</p>
          <Link to={`/show/${show.id}`}>
          <Button variant="outlined">View Details</Button>
          </Link>
        </Grid>
      ))}
      </Grid>
    </div>
  );
};

export default Home;
