import React from 'react';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import BlogBlock from "./BlogBlock"

export default function Blogs() {
    document.title = "Blogs"
    return (
        <Box paddingTop={'8em'}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.blogs.map((blog, index) => (
                    <Grid item xs={12} md={6}>
                        <BlogBlock title={blog.title} md={blog.md} index={index} date={blog.date}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};