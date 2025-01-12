import React, {useContext} from 'react'
import { Card, Paper, useMediaQuery } from '@mui/material'
import { AppContext } from '../../context/AppContext'

//provides the functionality for storm violation location preferences for the individual user

const StormProfile = ()=> {
    const {setStormSplashToggle, stormSplashToggle, capeStormToggle, setCapeStormToggle, kscStormToggle, setKscStormToggle, psfbStormToggle, setPsfbStormToggle} = useContext(AppContext)
    const flexBasis = useMediaQuery('(min-width: 700px)')
    const handleStormSplash = () =>{
        stormSplashToggle === true ? setStormSplashToggle(false) : setStormSplashToggle(true)
    }
    const handleCapeStorms = () =>{
        capeStormToggle === true ? setCapeStormToggle(false) : setCapeStormToggle(true)
    }
    const handleKscStorms = () => {
        kscStormToggle === true ? setKscStormToggle(false) : setKscStormToggle(true)
    }
    const handlePsfbStorms = () =>{
        psfbStormToggle === true ? setPsfbStormToggle(false) : setPsfbStormToggle(true)
    }
    return(
        <Card elevation={10} sx={
            {
                height:(flexBasis ? '90%' : '92%'),
                width:'97%',
                margin:'1.5%',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                flexDirection:'row'
            }
        }>
            <Paper elevation={2} sx={{ width:'100%', height:(flexBasis ? '20%' : '22%'), display:'flex', justifyContent:'center'}}>
            <label style = {{width:(flexBasis ? '35%' : '100%'), paddingLeft:(flexBasis ?'15%': '1%'), marginTop:(flexBasis ? '1.5%': '.5%'), height:'10%', paddingLeft:'1.5%'}}>
                <input type = 'checkbox'
                value= {'storms'}
                style={{
                    margin:'1%'
                }}
                onChange = {handleStormSplash}
                />{stormSplashToggle === false ? 'Enable All Severe Storm Monitoring' : 'Disable All Severe Storm Monitoring'}
            </label>
            </Paper>
            <div style ={{width:'100%',height:(flexBasis ? 'auto' : '60%') ,display:'flex', flexDirection:'column', marginTop:'-5%'}}>
                <label style={{width:'100%', paddingLeft:(flexBasis ?'15%': '1%'),  margin:'1%'}}>
                    <input type= 'checkbox' value ={'Cape Storms'}
                    style={{
                        margin:'1%'
                    }}
                    disabled= {stormSplashToggle === false}
                    onChange={handleCapeStorms}/>{capeStormToggle === true ?
                        'Disable Cape Canaveral Storm Monitoring' : 'Enable Cape Canaveral Storm Monitoring'}
                    
                </label>
                <label style={{width:'100%', paddingLeft:(flexBasis ?'15%': '1%'),  margin:'1%'}}>
                    <input type= 'checkbox' value = {'KSC Storms'}
                    style={{
                        margin:'1%'
                    }}
                    disabled= {stormSplashToggle === false}
                    onChange={handleKscStorms}/>{kscStormToggle === true ?
                        'Disable Kennedy Space Center Storm Monitoring' : 'Enable Kennedy Space Center Storm Monitoring'}
                </label>
                <label style={{width:'100%', paddingLeft:(flexBasis ?'15%': '1%'),  margin:'1%'}}>
                    <input type= 'checkbox' value={'PSFB Storms'}
                    style={{
                        margin:'1%'
                    }}
                    disabled= {stormSplashToggle === false}
                    onChange={handlePsfbStorms}/>{psfbStormToggle === true ?
                    'Disable Patrick SFB Storm Monitoring' : 'Enable Patrick SFB Storm Monitoring'}
                </label>
            </div>
        </Card>
    )   
}
export default StormProfile