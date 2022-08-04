import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const DetailArtCard = ({ art }) => {
  return (
    <Card className='rowDetail' id={art.id} sx={{ backgroundColor: '#444', padding: 5, mt: 15, mb: 5, ml: 5, mr: 5 }}>
      <CardMedia
        component="img"
        sx={{ objectFit: 'contain' }}
        image={art.card_images[0].image_url !== "" ? `${art.card_images[0].image_url}` : 'https://via.placeholder.com/421x614'}
        alt={art.name}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" color="tan" component="div">
          {art.name}
        </Typography>
        <Typography variant="body2" color="#ccc">
          {art.desc}
        </Typography>
        <Typography variant="body2" color="#ccc">
          Type: {art.type}
        </Typography>
      </CardContent>
    </Card >
  );
}

export default DetailArtCard;