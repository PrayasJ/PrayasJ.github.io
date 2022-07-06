import React, { useState } from 'react';
import Style from './notFound.module.scss';
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function NotFound(props) {
    return (
        <Box>
            <Box className={Style.error}>
                <figure>
                    <div className={props.darkMode ? Style.sad_mac : Style.sad_mac_dark}></div>
                    <figcaption>
                        <span className={Style.sr_text}>Error 404: Not Found</span>
                        <span className={Style.e}></span>
                        <span className={Style.r}></span>
                        <span className={Style.r}></span>
                        <span className={Style.o}></span>
                        <span className={Style.r}></span>
                        <span className={Style._4}></span>
                        <span className={Style._0}></span>
                        <span className={Style._4}></span>
                        <span className={Style.n}></span>
                        <span className={Style.o}></span>
                        <span className={Style.t}></span>
                        <span className={Style.f}></span>
                        <span className={Style.o}></span>
                        <span className={Style.u}></span>
                        <span className={Style.n}></span>
                        <span className={Style.d}></span>
                    </figcaption>
                </figure>
            </Box>
        </Box>
    )
}

export default NotFound