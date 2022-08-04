import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const ArtCard = ({ art }) => {
  return (
    <Card className='column' id={art.id} sx={{ mt: 2, backgroundColor: '#444', textAlign: 'center' }}>
      <NavLink to={`/arts/${art.id}`} key={art.id} sx={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          sx={{ objectFit: 'cover' }}
          image={art.card_images[0].image_url !== "" ? `${art.card_images[0].image_url}` : 'https://via.placeholder.com/421x614'}
          alt="Art poster"
        />
      </NavLink>
    </Card>
  );
}

export default ArtCard;