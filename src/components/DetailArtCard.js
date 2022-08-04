import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const DetailArtCard = ({ art }) => {
  return (
    <Card id={art.id} sx={{ backgroundColor: 'antiquewhite', padding: 5, maxWidth: '80%', mt: 15, mb: 5, ml: 'auto', mr: 'auto' }}>
      <CardMedia
        component="img"
        sx={{ width: '100%', height: 480, objectFit: 'contain' }}
        image={art.card_images[0].image_url !== "" ? `${art.card_images[0].image_url}` : 'https://via.placeholder.com/360x480'}
        alt={art.name}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {art.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {art.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {art.type}
        </Typography>
      </CardContent>
    </Card >
  );
}

export default DetailArtCard;