import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Style from './Portfolio.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   console.log(props)
   return (
      <Box height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'end'} alignItems={'center'}>
         <LazyLoadImage
         alt={'mockup'}
         src={image}
         style={{
            width: '100%',
            height: undefined,
            aspectRatio: 135 / 76,
            padding: '2em'
          }} />

         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} className={`${Style.button1} ${props.darkMode?'dark':'white'}`} >
               <IconLink link={live} title={'View'} icon={'fa fa-safari'}/>
            </Box>
            {source?
            <Box p={1} className={`${Style.button1} ${props.darkMode?'dark':'white'}`}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
            : null }
         </Box>
      </Box>
   );
}


export default PortfolioBlock;