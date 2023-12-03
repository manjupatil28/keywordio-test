// Submitted.js
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Submitted = () => (
    <Box 
       style={{padding:"20px"}}
        display="flex"
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        top="50% "
        left="50%"
        transform="translate(-50%, -50%)"
        backgroundColor="rgba(255,255,255,0.8)"
        zIndex={2}
    >
        <CheckCircleOutlineIcon style={{ color: 'midnightblue', fontSize: 50,marginLeft:'40px'}} />
        <Typography variant="h4">Submitted</Typography>
    </Box>
);

export default Submitted;
