import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import {
    Grid, Card,
} from '@mui/material'
import { Box } from '@mui/material'
import LeftBar from '../../components/LeftBar'
import Cookies from 'universal-cookie'
import { AppContext } from '../../context/AppContext'
import AreaTabs from './areatabs'


const cookies = new Cookies()
const MobileArea = () => {
    
    const params = useParams()
    const id = params.id
    const {imagePath} = useContext(AppContext)
    const area = (id === 'CCSFS' ? ['Cape Central', 'Port', 'CX-20-16-LZ', 'CX-36-46', 'CX-37-ASOC-PPF', 'CX-40-41-SPOC']:
    id === 'KSC' ? ['KSC Industrial', 'LC-39', 'SLF'] :
    id === 'Other' ? ['CIDCO Park', 'Astrotech'] :
    ['Patrick SFB']
)
const imageArray = [
    {location:'CCSFS', image:'../images/CCSFS.jpg'},
    {location:'KSC', image:'../images/KSCArea.jpg'},
    {location:'Other', image:'../images/Other Area.jpg'},
    {location:'PSFB', image:'../images/psfb.PNG'}
]
const findImage = () => {
    let areaImage = imageArray.filter((item)=> item.location === id)
    
    return areaImage[0].image
 }
    cookies.set('area', area, {path:'/'})
    cookies.set('imagePath', imagePath, {path:'/'})

    return (

        <Box sx={{ width: '100%', height: '100vh' }}>
            <Grid container spacing={0} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                <Grid item sx={{marginBottom:'1%'}}  xs={12} md={12} lg={12} xl={12} >
                    <Card >
                        <LeftBar/>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{display:'flex', justifyContent:'center', margin:'1.5%'}}>
                    <Card elevation={6}>
                        <AreaTabs image={findImage()} area={area}/>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}

export default MobileArea