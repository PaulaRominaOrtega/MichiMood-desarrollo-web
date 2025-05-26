import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const products = [
  {
    id: 1,
    nombre: 'Michi Agenda',
    precio: 12000,
    imagen: '/images/cuaderno.jpg',
  },
  {
    id: 2,
    nombre: 'Taza Michi Mood',
    precio: 13000,
    imagen: '/images/taza.jpg',
  },
  {
    id: 3,
    nombre: 'Portallaves',
    precio: 15000,
    imagen: '/images/portallave.jpg',
  },
  {
    id: 4,
    nombre: 'Pines x5',
    precio: 10000,
    imagen: '/images/pines.jpg',
  },
  {
    id: 5,
    nombre: 'Llavero',
    precio: 6000,
    imagen: '/images/llavero.jpg',
  },
  {
    id: 6,
    nombre: 'Lámpara',
    precio: 17000,
    imagen: '/images/lampara.jpg',
  },
  {
    id: 7,
    nombre: 'Mochila',
    precio: 27000,
    imagen: '/images/mochila.jpg',
  },
  {
    id: 8,
    nombre: 'Lapicera',
    precio: 5000,
    imagen: '/images/lapicera.jpg',
  },
  {
    id: 9,
    nombre: 'Pantuflas',
    precio: 16000,
    imagen: '/images/pantufla.jpg',
  },
  {
    id: 10,
    nombre: 'Medias',
    precio: 9000,
    imagen: '/images/medias.jpg',
  },
];
const ProductList = () => {
    return (
      <Box sx={{ padding: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)', 
            },
            gap: 3,
          }}
        >
          {products.map((product) => (
            <Card key={product.id} sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={product.imagen}
                alt={product.nombre}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">{product.nombre}</Typography>
                <Typography color="text.secondary">${product.precio}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Agregar al carrito
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    );
  };
export default ProductList;