import React, {useContext} from 'react'
import {
    Grid, Card,
} from '@mui/material'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { AppContext } from '../../context/AppContext'
import SiteTabs from './sitetabs'
import LeftBar from '../../components/LeftBar'
import NotFoundAlert from '../../components/NotFoundAlert'
const cookies = new Cookies()
const MobileSiteView = () => {

    const imageArray=[
        {location:'Astrotech', imgsrc:'../images/astrotech.PNG'},
        {location:'Cape Central', imgsrc:'../images/cape central.PNG'},
        {location:'CIDCO Park', imgsrc:'../images/cidco park.PNG'},
        {location:'CX-20-16-LZ', imgsrc:'../images/cx-20-16.PNG'},
        {location:'CX-36-46', imgsrc:'../images/cx-36-46.PNG'},
        {location:'CX-37-ASOC-PPF', imgsrc:'../images/cx-37-asoc.PNG'},
        {location:'CX-40-41-SPOC', imgsrc:'../images/cx-40-41.PNG'},
        {location:'KSC Industrial', imgsrc:'../images/KSC Industrial.PNG'},
        {location:'LC-39', imgsrc:'../images/LC-39.PNG'},
        {location:'Port', imgsrc:'../images/port.PNG'},
        {location:'SLF', imgsrc:'../images/SLF.PNG'}
        
    ]

    const { area, imagePath} = useContext(AppContext)
    const params = useParams()
    const site = params.id
    cookies.set('area', area, {path:'/'})
    cookies.set('imagePath', imagePath, {path:'/'})
    if (site!==[]){
        cookies.set('site', site, {path:'/'})
        cookies.set('area', area, {path:'/'})
    }

    if (site ==='Astrotech' ||
        site === 'Cape Central' ||
        site === 'CIDCO Park' ||
        site === 'CX-20-16-LZ' ||
        site === 'CX-36-46' ||
        site === 'CX-37-ASOC-PPF'||
        site === 'CX-40-41-SPOC' ||
        site === 'KSC Industrial' ||
        site === 'LC-39' ||
        site === 'Port' ||
        site === 'SLF') {
    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{marginBottom:'-50%'}} >
                    <Card >
                        <LeftBar/>
                    </Card>
                </Grid>
                <Box sx={{height:'52%'}}>
                <Grid item  xs={12} md={12} lg={12} xl={12} sx={{display:'flex', justifyContent:'center', margin:'1.5%', marginTop:'-28%'}}>
                    <Card elevation={6}>
                        <SiteTabs image={imageArray.filter((image)=>image.location===site)}/>
                    </Card>
                </Grid>
                </Box>
            </Grid>
        </Box>

    )} else {
        return(
            <NotFoundAlert/>
        )
    }
}

export default MobileSiteView