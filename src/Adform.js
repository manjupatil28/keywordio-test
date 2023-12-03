// AdForm.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Container, FormLabel, Select, MenuItem, InputLabel, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const AdForm = ({ formType , onSubmit}) => {
    const navigate = useNavigate();
    const [adData, setAdData] = useState({
        heading1: "",
        heading2: "",
        description: "",
        businessName: "",
        buttonLabel: "",
        websiteUrl: "",
        landscapeImage: "",
        portraitImage: "",
        squareImage: "",
        videoUrl: ""
    });

    const handleChange = (event) => {
        setAdData({ ...adData, [event.target.name]: event.target.value });
    };


    const textFieldStyle = {
        backgroundColor: 'white',
        marginTop: '8px',
        '& .MuiInputBase-root': {
            height: '40px',
        },
        '& .MuiInputBase-inputMultiline': {
            height: 'auto',
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Container
                maxWidth={false}
                style={{
                    padding: '15px',
                    boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)',
                    margin: '10px',
                    width: 'calc(100vw - 25px)',
                    overflow: 'auto',
                }}
            >
                <Typography variant="h6">{`Create Text & Media`}</Typography>
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <FormLabel>Heading 01</FormLabel>
                            <TextField fullWidth name="heading1" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                            <FormLabel>Heading 02</FormLabel>
                            <TextField fullWidth name="heading2" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                            <FormLabel>Description</FormLabel>
                            <TextField fullWidth name="description" multiline rows={3} onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                            <FormLabel>Business Name</FormLabel>
                            <TextField fullWidth name="businessName" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                        </Grid>
                        <Grid item xs={6}>
                            <FormLabel>Button Label</FormLabel>
                            <InputLabel id="button-label-select-label"></InputLabel>
                            <Select labelId="button-label-select-label" fullWidth name="buttonLabel" onChange={handleChange}>
                                <MenuItem value={"Option1"}>Option 1</MenuItem>
                                <MenuItem value={"Option2"}>Option 2</MenuItem>
                                <MenuItem value={"Option3"}>Option 3</MenuItem>
                            </Select>
                            <FormLabel>Website URL</FormLabel>
                            <TextField fullWidth name="websiteUrl" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                            {formType === "media" && (
                                <>
                                    <FormLabel>Landscape Marketing Image (1:9:1)</FormLabel>
                                    <TextField fullWidth name="landscapeImage" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                                    <FormLabel>Portrait Marketing Image (4:5)</FormLabel>
                                    <TextField fullWidth name="portraitImage" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                                    <FormLabel>Square Marketing Image (1:1)</FormLabel>
                                    <TextField fullWidth name="squareImage" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                                    <FormLabel>Video URL</FormLabel>
                                    <TextField fullWidth name="videoUrl" onChange={handleChange} InputLabelProps={{ shrink: false }} style={textFieldStyle} />
                                </>
                            )}
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Box m={1}><Button type="button" onClick={() => navigate('/create-ad')}>Back</Button></Box>
                            <Box m={1}><Button type="submit" color="primary" variant="contained" onClick={(event)=> { event.preventDefault(); onSubmit(); }}>Submit</Button></Box>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}
export default AdForm;