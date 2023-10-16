import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import "./GalleryPages.css"

function ModularKitchen(){
    return(
            <ImageList variant="masonry" sx={{ width: 900, height: 750 }} >
            <ImageListItem key="Subheader" cols={4}>
              <ListSubheader component="div" id='text'>MODULAR KITCHEN DESIGNS</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=2008&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
                  </ImageList>
    );
  }

  const itemData = [
    {
      img: 'https://images.pexels.com/photos/18470956/pexels-photo-18470956/free-photo-of-a-kitchen-in-an-apartment.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'MKD-Type 1',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.pexels.com/photos/18470954/pexels-photo-18470954/free-photo-of-modern-kitchen-interior.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'MKD-Type 2',
    },
    {
      img: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=400     ',
      title: 'MKD-Type 3',
    },
    {
      img: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'MKD-Type 4',
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=400      ',
      title: 'MKD-Type 5',
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=400 ',
      title: 'MKD-Type 6',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: ' https://images.pexels.com/photos/4992465/pexels-photo-4992465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'MKD-Type 7',
    },
    {
      img: 'https://images.pexels.com/photos/6782429/pexels-photo-6782429.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'MKD-Type 8',
    },
    {
      img: 'https://images.pexels.com/photos/6284235/pexels-photo-6284235.jpeg?auto=compress&cs=tinysrgb&w=600      ',
      title: 'MKD-Type 9',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/5998041/pexels-photo-5998041.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'MKD-Type 10',
    },
    {
      img: 'https://images.pexels.com/photos/6032416/pexels-photo-6032416.jpeg?auto=compress&cs=tinysrgb&w=600      ',
      title: 'MKD-Type 11',
    },
    {
      img: 'https://images.pexels.com/photos/6903149/pexels-photo-6903149.jpeg?auto=compress&cs=tinysrgb&w=600      ',
      title: 'MKD-Type 12',
      cols: 2,
    },
  ];

  export default ModularKitchen;   