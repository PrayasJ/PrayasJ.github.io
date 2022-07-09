import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio(props) {
    document.title = "Portfolio"
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map(project => (
                   <Grid item xs={12} md={4}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} darkMode={props.darkMode} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};