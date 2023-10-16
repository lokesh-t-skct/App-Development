import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import "./GalleryPages.css"

function LivingRoom(){
    return(
<ImageList variant="masonry" sx={{ width: 900, height: 750 }} >
            <ImageListItem key="Subheader" cols={4}>
              <ListSubheader component="div" id='text'>LIVING ROOM DESIGNS</ListSubheader>
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
      img: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=400      ',
      title: 'LRD-Type 1',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'LRD-Type 2',
    },
    {
      img: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600      ',
      title: 'LRD-Type 3',
    },
    {
      img: 'https://images.pexels.com/photos/6758788/pexels-photo-6758788.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'LRD-Type 4',
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400 ',
      title: 'LRD-Type 5',
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/5998119/pexels-photo-5998119.jpeg?auto=compress&cs=tinysrgb&w=600      ',
      title: 'LRD-Type 6',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.pexels.com/photos/5998119/pexels-photo-5998119.jpeg?auto=compress&cs=tinysrgb&w=600      ',
      title: 'LRD-Type 7',
    },
    {
      img: 'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'LRD-Type 8',
    },
    {
      img: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=400      ',
      title: 'LRD-Type 9',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'LRD-Type 10',
    },
    {
      img: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=400      ',
      title: 'LRD-Type 11',
    },
    {
      img: 'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=400      ',
      title: 'LRD-Type 12',
      cols: 2,
    },
  ];

export default LivingRoom;