import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useContext } from "react";
import CCWind from "./windAdminComponents/CCWind";
import KSCWind from "./windAdminComponents/KSCWind";
import PSFBWind from "./windAdminComponents/PSFBWind";
import { AppContext } from "../context/AppContext";
import { Grid } from "@mui/material";

//functionality of the location checkboxes in the wind splash panel of the Admin Page

const WindCheckedLocationBox = ({ label, setWindCheckedLocationValues, windCheckedLocationValues }) => {
    const { setCCcheckedValues, setKSCCheckedValues, setPSFBCheckedValues } = useContext(AppContext);
    const [value, setValue] = React.useState(10);
    const handleChange = (event) => {
        setValue(event.target.value);
        setCCcheckedValues([])
        setKSCCheckedValues([])
        setPSFBCheckedValues([])
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={13} sx={{paddingLeft: '10px'}} >
                    
                            < div >
                            <Box style={{paddingLeft: '20px'}}>
                                <FormControl fullWidth sx={{
                                    '.MuiOutlinedInput-notchedOutline':{
                                        borderColor:'text.primary',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
                                        borderColor:'text.secondary'
                                    }
                                    
                                }}>
                                    <InputLabel id="demo-simple-select-label"
                                    sx={{
                                        color:'text.primary',
                                        '&.Mui-focused':{
                                            color:'text.secondary'
                                        },
                                    }}
                                    >Locations</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={value}
                                        label="Locations"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Cape Canaveral Space Force Station</MenuItem>
                                        <MenuItem value={30}>Kennedy Space Station</MenuItem>
                                        <MenuItem value={20}>Patrick Space Force Base</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                    </div>
                <div>
                    {value == 10 ? (<CCWind />) : (<></>)}
                    {value == 20 ? (<PSFBWind />) : (<></>)}
                    {value == 30 ? (<KSCWind />) : (<></>)}
                </div>
                
            </Grid>
        </Grid>
                </>
                );
}
export default WindCheckedLocationBox