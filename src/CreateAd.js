// CreateAd.js

import React, { useState } from "react";
import { Button, Checkbox, Card, CardContent, Container, Box, Grid, Typography } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useNavigate } from 'react-router-dom';
import textad from './textad.png';
import mediaad from './mediaad.png';

const useStyles = makeStyles({
    cardContent: {
        position: 'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'400px',
        justifyContent:'center'
    },
    checkbox: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    Contentcontainer:{
        marginTop:'50px'
    },
    nextButton: {
        position: 'absolute',
        bottom: '10px',
        right: '10px'
    }
});

const CreateAd = () => {
    const classes = useStyles(); 
    const [selectedAdType, setSelectedAdType] = useState();
    const navigate = useNavigate();

    const handleAdTypeChange = (event) => {
        setSelectedAdType(prevSelectedAdType => prevSelectedAdType === event.target.value ? '' : event.target.value);
    }

    return (
        <Box m={1} style={{position: 'relative', margin: '10px', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)'}}> 
        <h4 style={{padding:'10px'}}>Create Ads</h4>
            <Container maxWidth="sm" className={classes.Contentcontainer}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card variant="outlined">
                            <label htmlFor="textAd-checkbox">  
                                <CardContent className={classes.cardContent}>
                                    <Checkbox
                                        id="textAd-checkbox"
                                        className={classes.checkbox}
                                        checked={selectedAdType === "TextAd"}
                                        onChange={handleAdTypeChange}
                                        value="TextAd"
                                    />
                                    <img src={textad} alt="Text Ad Example" style={{width: '100%'}}/>
                                    <Typography variant="caption" display="block">Create</Typography>
                                    <Typography variant="subtitle1" display="block"><b>Text Ad</b></Typography>
                                </CardContent>
                            </label>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined">
                            <label htmlFor="mediaAd-checkbox">
                                <CardContent className={classes.cardContent}>
                                    <Checkbox 
                                        id="mediaAd-checkbox"
                                        className={classes.checkbox}
                                        checked={selectedAdType === "MediaAd"}
                                        onChange={handleAdTypeChange}
                                        value="MediaAd"
                                    />  
                                    <img src={mediaad} alt="Media Ad Example" style={{width: '100%'}}/>
                                    <Typography variant="caption" display="block">Create</Typography>
                                    <Typography variant="subtitle1" display="block"><b>Media Ad</b></Typography>  
                                </CardContent>
                            </label>
                        </Card>
                    </Grid>  
                </Grid>
                <Button 
                    variant="contained" 
                    color="primary" 
                    disabled={!selectedAdType} 
                    style={{ marginTop: '20px' }}
                    className={classes.nextButton}
                    onClick={() => navigate(`/create-ad/${selectedAdType}`)}
                >
                    Next
                </Button>
            </Container>
        </Box>
    );
}

export default CreateAd;