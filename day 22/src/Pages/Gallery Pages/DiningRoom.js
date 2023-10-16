import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import "./GalleryPages.css";


function DiningRoom(){
    return(
        <ImageList  sx={{ width: 900, height: 750 }} >
                    <ImageListItem key="Subheader" cols={4}>
                      <ListSubheader component="div" id='text'>DINING ROOM DESIGNS</ListSubheader>
                    </ImageListItem>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        console.log({item.img})
                        <img
                          srcSet={`${item.img}?w=200&fit=crop&auto=format&dpr=2 2x`}
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
              img: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=400   ',
              title: 'DRD-Type 1',
              width: 500,
              height: 500,
              rows: 2,
              cols: 2,
              featured: true,
            },
            {
              img: 'https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&w=600  ',
              title: 'DRD-Type 2',
              width: 500,
              height: 500,
            },
            {
              img: 'https://images.pexels.com/photos/6492401/pexels-photo-6492401.jpeg?auto=compress&cs=tinysrgb&w=600      ',
              title: 'DRD-Type 3',
              width: 500,
              height: 500,
            },
            {
              img: 'https://images.pexels.com/photos/6492393/pexels-photo-6492393.jpeg?auto=compress&cs=tinysrgb&w=600              ',
              title: 'DRD-Type 4',
              width: 500,
              height: 500,
              cols: 2,
            },
            {
              img: 'https://images.pexels.com/photos/6284229/pexels-photo-6284229.jpeg?auto=compress&cs=tinysrgb&w=600              ',
              title: 'DRD-Type 5',
              width: 500,
              height: 500,
              cols: 2,
            },
            {
              img: 'https://images.pexels.com/photos/259819/pexels-photo-259819.jpeg?auto=compress&cs=tinysrgb&w=600       ',
              title: 'DRD-Type 6',
              rows: 2,
              width: 500,
              height: 500,
              cols: 2,
              featured: true,
            },
            {
              img: 'https://images.pexels.com/photos/5998119/pexels-photo-5998119.jpeg?auto=compress&cs=tinysrgb&w=600      ',
              title: 'DRD-Type 7',
              width: 500,
              height: 500,
            },
            {
              img: 'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=400',
              title: 'DRD-Type 8',
              width: 500,
              height: 500,
            },
            {
              img: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=400      ',
              title: 'DRD-Type 9',
              width: 500,
              height: 500,
              rows: 2,
              cols: 2,
            },
            {
              img: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=400',
              width: 500,
              height: 500,
              title: 'DRD-Type 10',
            },
            {
              img: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=400      ',
              title: 'DRD-Type 11',
            },
            {
              img: 'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=400      ',
              title: 'DRD-Type 12',
              cols: 2,
            },
          ];
        
export default DiningRoom;