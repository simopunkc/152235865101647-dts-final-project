import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const ArtCard = ({ art }) => {
  return (
    <NavLink to={`/arts/${art.id}`} key={art.id} sx={{ textDecoration: 'none' }}>
      <Card id={art.id} sx={{ display: 'flex', backgroundColor: 'lemonchiffon', margin: 5 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225, objectFit: 'cover' }}
          image={art.card_images[0].image_url_small !== "" ? `${art.card_images[0].image_url_small}` : 'https://via.placeholder.com/150x225'}
          alt="Art poster"
        />
      </Card>
    </NavLink>
  );
}

export default ArtCard;