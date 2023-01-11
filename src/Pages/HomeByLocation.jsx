import React, {useContext} from 'react'
import { Card, Paper, Typography, useMediaQuery, Box } from '@mui/material'
import { AppContext } from '../context/AppContext'
import { colors } from '@mui/material'

const HomeByLocation = () =>{
    const {themetoggle} = useContext(AppContext)
    const lightBox = {
        width:'100%',
        height:'80%',
        flexGrow: 1,
        bgcolor: 'text.primary',
        p: 3,
        display:'flex',
        justifyContent:'center'

    }

    const darkBox = {
        width:'100%',
        height: '70%',
        flexGrow: 1,
        bgcolor: 'black',
        p: 3,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }

    const cardStyle={
        width:'33%',
        height: '90vh',
        margin: '.2%',
        marginTop:'2%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        textAlign:'center',
        bgcolor:'primary.main'
        
    }
    return(
        <Box sx={themetoggle === false ? lightBox : darkBox}>
            <Card sx={cardStyle}>
                <Paper elevation={4} sx={{width:'100%', bgcolor:'primary.main', marginBottomr:'.2%'}}>
                <Typography variant ='h4' sx={{ color:'text.primary', width:'100%', height:'5%', textDecoration:'underline'}}>Cape Canaveral SFS</Typography>
                </Paper>
                <Paper sx={{height:'52%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Lightning</Typography>
                </Paper>
                <Paper sx={{height:'30%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Winds</Typography>
                </Paper>
                <Paper sx={{height:'12%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Storm</Typography>
                </Paper>
            </Card>
            <Card sx={cardStyle}>
            <Paper elevation={4} sx={{width:'100%', bgcolor:'primary.main', marginBottomr:'.2%'}}>
                <Typography variant ='h4' sx={{ color:'text.primary', width:'100%', height:'5%', textDecoration:'underline'}}>Kennedy Space Center</Typography>
                </Paper>
                <Paper sx={{height:'52%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Lightning</Typography>
                </Paper>
                <Paper sx={{height:'30%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Winds</Typography>
                </Paper>
                <Paper sx={{height:'12%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Storm</Typography>
                </Paper>
            </Card>
            <div style={{display:'flex', flexDirection:'column', width:'33%',  margin:'.2%', marginTop:'1.4%', height:'90vh'}}> 
            <Card sx={cardStyle} style={{width:'100%', height:'75%'}}>
            <Paper elevation={4} sx={{width:'100%', bgcolor:'primary.main', marginBottomr:'.2%'}}>
                <Typography variant ='h4' sx={{ color:'text.primary', width:'100%', height:'5%', textDecoration:'underline'}}>Patrick SFB</Typography>
                </Paper>
                <Paper sx={{height:'50%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Lightning</Typography>
                </Paper>
                <Paper sx={{height:'30%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Winds</Typography>
                </Paper>
                <Paper sx={{height:'12%',width:'100%', bgcolor:'background.default'}}>
                <Typography variant ='h6' >Storm</Typography>
                </Paper>
            </Card>
            <Card sx={cardStyle}style={{width:'100%', height:'25%', marginBottom: '-2%'}}>
            <Paper elevation={4} sx={{width:'100%', bgcolor:'primary.main', marginBottomr:'.2%'}}>
                <Typography variant ='h4' sx={{ color:'text.primary', width:'100%', height:'5%', textDecoration:'underline'}}>Other</Typography>
                </Paper>
                <Paper sx={{height:'78%', width:'100%', bgcolor:'background.paper' }}>
                <Typography variant ='h6' >Lightning</Typography>
                </Paper>
            </Card>
            </div>

        </Box>
    )
}

export default HomeByLocation