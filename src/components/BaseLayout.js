import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import NotFound from './notFound/notFound';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Blogs from './Blogs/Blogs';
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import BlogPage from './Blogs/BlogPage';
import { Scrollbars } from "react-custom-scrollbars-2";
import AnimatedCursor from 'react-animated-cursor';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Scrollbars style={{ width: '100vw', height: '100vh', background:'grey' }}>
         <Box className={darkMode ? Style.dark : Style.light}>
         <AnimatedCursor
            innerSize={12}
            outerSize={28}
            innerScale={0}
            outerScale={2}
            outerStyle={{
              border: '2px solid var(--cursor-color)',
              backgroundColor: 'rgba(190, 0, 0, 0.6)'
            }}
            innerStyle={{
              backgroundColor: 'var(--cursor-color)'
            }}
            />
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/blogs'} element={<Blogs/>}/>
                  <Route path="/blogs/:id" element={<BlogPage/>} />
                  <Route path="*" element={<NotFound darkMode={darkMode}/>} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.4}} width={'100%'}>
                  <p>Website created with &hearts; by Prayas Jain</p>
                  <p>&copy; 2022</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
      </Scrollbars>
   )
}

