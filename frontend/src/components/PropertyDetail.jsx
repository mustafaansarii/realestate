import React from 'react';
import { useParams } from 'react-router-dom';
import { getProperty } from '../services/api';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Chip, Container } from '@mui/material';
import { Skeleton } from '@mui/material';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = React.useState(null);

  React.useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await getProperty(id);
      setProperty(data);
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return (
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Skeleton variant="rectangular" width={300} height={200} />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 1000, m: 'auto' }}>
        <CardMedia
          component="img"
          height="20"
          width="20"
          image={property.image || 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&dpr=1'}
          alt={property.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {property.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.address}, {property.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.description}
          </Typography>
          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid item>
              <Chip label={`Price: ₹${property.price.toLocaleString()}`} />
            </Grid>
            <Grid item>
              <Chip label={`Bedrooms: ${property.bedrooms}`} />
            </Grid>
            <Grid item>
              <Chip label={`Bathrooms: ${property.bathrooms}`} />
            </Grid>
            <Grid item>
              <Chip label={`Area: ${property.areaSqft} sqft`} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PropertyDetail;
