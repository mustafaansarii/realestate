import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProperties } from '../services/api';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Box, 
  Container, 
  Button, 
  CardActions, 
  Chip, 
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { LocationOn, Hotel, SquareFoot, Bathtub } from '@mui/icons-material';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await getProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl" sx={{ py: 3, mt: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ 
        fontWeight: 'bold',
        mb: 6,
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -8,
          left: 0,
          width: 80,
          height: 4,
          backgroundColor: 'primary.main',
          borderRadius: 2
        }
      }}>
        Featured Properties
      </Typography>
      
      <Grid container spacing={4}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={property.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              },
              borderRadius: 2,
              overflow: 'hidden'
            }}>
              <CardMedia
                component="img"
                height="200"
                image={property.image || 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1'}
                alt={property.title}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Chip 
                    label="For Sale" 
                    color="primary" 
                    size="small"
                    sx={{ fontWeight: 'bold' }}
                  />
                  <Rating 
                    value={4.5} 
                    precision={0.5} 
                    size="small" 
                    readOnly 
                  />
                </Box>
                
                <Typography variant="h6" component="h3" gutterBottom sx={{ 
                  fontWeight: 'bold',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '3.5em'
                }}>
                  {property.title}
                </Typography>
                
                <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
                  ₹{property.price.toLocaleString()}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mb: 2,
                  flexWrap: 'wrap'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Hotel fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {property.bedrooms} Beds
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Bathtub fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {property.bathrooms || 2} Baths
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SquareFoot fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {property.areaSqft} sq.ft
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                  <LocationOn color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {property.city}, {property.state}
                  </Typography>
                </Box>
              </CardContent>
              
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button 
                  component={Link} 
                  to={`/property/${property.id}`} 
                  fullWidth 
                  variant="contained"
                  size={isMobile ? 'medium' : 'large'}
                  sx={{
                    fontWeight: 'bold',
                    py: 1.5,
                    textTransform: 'none',
                    borderRadius: 1,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 3
                    }
                  }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList;
