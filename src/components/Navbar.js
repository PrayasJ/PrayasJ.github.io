import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Blogs',
        to: '/blogs',
        active: 'blogs'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box className={Style.noselect} component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '1.5rem', md: '4rem'}}
                 fontSize={{xs: '1rem', md:'1.5rem'}}
                 paddingTop={'1rem'}>
                {links.map(link => (
                    <Link to={link.to} onClick={() => setActive(link.active)}>
                        <Box component={'li'} className={(link.active === active && !link.type) && Style.active} sx={{borderImageSource: info.gradient }}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                        </Box>
                    </Link>
                ))}
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </Box>
        </Box>
    )
}