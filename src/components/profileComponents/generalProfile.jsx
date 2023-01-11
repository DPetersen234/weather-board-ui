import React, { useContext } from 'react'
import { Card, Paper, useMediaQuery, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { GiConsoleController } from 'react-icons/gi'

//SEE NOTES AT BOTTOM OF FILE FOR CONTINUATION AFTER HOLIDAY BREAK
const GeneralProfileSettings = () => {
    const flexBasis = useMediaQuery('(min-width: 700px)')
    const {
        userHold,
        profileObj,
        setProfileObj,
        CCSFSLightning,
        KSCLightning,
        capeLightningToggle,
        kscLightningToggle,
        otherLightningToggle,
        psfbLightningToggle,
        capeWindToggle,
        kscWindToggle,
        psfbWindToggle,
        OtherLightning,
        capeStormToggle,
        kscStormToggle,
        psfbStormToggle,
        setUserHold,
        setCCSFSLightning,
        setKSCLightning,
        SetTheming,
        setMode,
        setOtherLightning,
        setCapeLightningToggle,
        setKscLightningToggle,
        setOtherLightningToggle,
        setPsfbLightningToggle,
        setCapeWindToggle,
        setKscWindToggle,
        setPsfbWindToggle,
        setCapeStormToggle,
        setKscStormToggle,
        setPsfbStormToggle,
        protTheme,
        duetTheme,
        tritTheme,
        defaultTheme,
        darkTheme,
        lightTheme,
        setThemeText,
        themeText,
        modeText,
        setModeText,
        showCountdowns,
        setShowCountdowns,
        theming,
        stormSplashToggle,
        windSplashToggle,
        setThemeToggle
    } = useContext(AppContext)
    const navigate = useNavigate()
    const url = 'https://weather-board.onrender.com'
    const cardStyle = {
        height: '90%',
        width: '35%',
        margin: '.75%',
        marginTop: '.5%'


    }
    const buttonStyle = {
        height: '20%',
        width: ' 60%',
        borderRadius: '12px',
        bgcolor: 'text.primary',

        marginLeft: '20%',
        marginTop: '25%',
        fontSize: '16px',
        fontFamily: 'Kanit',
        '&:hover': {
            bgcolor: 'text.secondary',
            color: 'background.paper',

        }
    }

    // const profileSetter = () =>{
    //   setCCSFSLightning(profileObj.capeLightning)
    //   setKSCLightning(profileObj.kscLightning)
    //   setOtherLightning(profileObj.otherLightning)
    //   setCapeLightningToggle(profileObj.CCSFSLightningToggle)
    //   setKscLightningToggle(profileObj.KSCLightningToggle)
    //   setOtherLightningToggle(profileObj.OtherLightningToggle)
    //   setPsfbLightningToggle(profileObj.psfbLightningToggle)
    //   setCapeWindToggle(profileObj.capeWind)
    //   setKscWindToggle(profileObj.kscWind)
    //   setPsfbWindToggle(profileObj.psfbWind)
    //   setCapeStormToggle(profileObj.capeStorm)
    //   setKscStormToggle(profileObj.kscStorm)
    //   setPsfbStormToggle(profileObj.psfbStorm)
    //   SetTheming(profileObj.mode === 'dark' ? darkTheme : lightTheme)
    //   setMode(profileObj.accessibility === 'default' ? defaultTheme : profileObj.accessibility === 'protanopia' ? protTheme : profileObj.accessibility=== 'tritanopia' ? tritTheme : duetTheme)
    // }

    const handleSubmit = () => {
        console.log('USERHOLD', userHold)
        setProfileObj({
            id: userHold.id,
            user_id: userHold.user_id,
            capeLightning: CCSFSLightning,
            kscLightning: KSCLightning,
            otherLightning: OtherLightning,
            CCSFSLightningToggle: capeLightningToggle,
            KSCLightningToggle: kscLightningToggle,
            OtherLightningToggle: otherLightningToggle,
            psfbLightningToggle: psfbLightningToggle,
            capeWind: capeWindToggle,
            kscWind: kscWindToggle,
            psfbWind: psfbWindToggle,
            capeStorm: capeStormToggle,
            kscStorm: kscStormToggle,
            psfbStorm: psfbStormToggle,
            windSplash: windSplashToggle,
            stormSplash: stormSplashToggle,
            mode: modeText,
            accessibility: themeText,
        })
        fetch(`${url}/profiles`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: userHold.id,
                user_id: userHold.user_id,
                capeLightning: CCSFSLightning,
                kscLightning: KSCLightning,
                otherLightning: OtherLightning,
                CCSFSLightningToggle: capeLightningToggle,
                KSCLightningToggle: kscLightningToggle,
                OtherLightningToggle: otherLightningToggle,
                psfbLightningToggle: psfbLightningToggle,
                capeWind: capeWindToggle,
                kscWind: kscWindToggle,
                psfbWind: psfbWindToggle,
                capeStorm: capeStormToggle,
                kscStorm: kscStormToggle,
                psfbStorm: psfbStormToggle,
                windSplash: windSplashToggle,
                stormSplash: stormSplashToggle,
                mode: modeText,
                accessibility: themeText,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then((data) => console.log(data))
            
        
        navigate('/')
    }

    return (
        <>
            <Card sx={cardStyle} style={{ margin: '.75%', marginTop: '.5%' }}>
                <Paper elevation={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '20%',
                    marginBottom: '5%'
                }}>
                    <Typography variant='h6' sx={{ textDecoration: 'underline', marginTop: '1%' }}>Accessibility Settings</Typography>
                </Paper>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Default'}
                        style={{ margin: '1%' }}
                        disabled ={modeText === 'dark' }
                        onChange= {()=>{
                            setMode(defaultTheme)
                            setThemeText('default')
                            
                        }}

                    />Default
                </label>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Protanopia'}
                        style={{ margin: '1%' }}
                        onChange= {()=>{
                            setMode(protTheme)
                            setThemeText('protanopia')
                            
                        }}
                        disabled ={modeText === 'dark' }

                    />Protanopia
                </label>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Deuteranopia'}
                        style={{ margin: '1%' }}
                        disabled ={modeText === 'dark' }
                        onChange= {()=>{
                            setMode(duetTheme)
                            setThemeText('deuteranopia')
                            
                        }}

                    />Deuteranopia
                </label>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Tritanopia'}
                        style={{ margin: '1%' }}
                        disabled ={modeText === 'dark' }
                        onChange= {()=>{
                            setMode(tritTheme)
                            setThemeText('tritanopia')
                            
                        }}

                    />Tritanopia
                </label>
            </Card>
            <Card sx={cardStyle}>
                <Paper elevation={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '20%',
                    marginBottom: '5%'
                }}>
                    <Typography variant='h6' sx={{ textDecoration: 'underline', marginTop: '1%' }}>Theme Settings</Typography>
                </Paper>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Default'}
                        style={{ margin: '1%' }}
                        onChange= {()=>{
                            SetTheming(lightTheme)
                            setThemeToggle(false)
                            setModeText('light')
                            
                        }}

                    />Light Mode
                </label>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Default'}
                        style={{ margin: '1%' }}
                        onChange= {()=>{
                            setMode(defaultTheme)
                            SetTheming(darkTheme)
                            setThemeToggle(true)
                            setModeText('dark')
                            setThemeText('default')
                            
                        }}

                    />Dark Mode
                </label>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Default'}
                        style={{ margin: '1%' }}
                        onChange={()=> setShowCountdowns(!showCountdowns)}


                    />{showCountdowns === false ? 'Show Countdown Timers' : 'Hide Countdown Timers'}
                </label>
                <label style={{ width: '100%', paddingLeft: (flexBasis ? '14%' : '1%'), margin: '1%' }}>
                    <input type='checkbox'
                        value={'Default'}
                        style={{ margin: '1%' }}


                    />Show by location area
                </label>
            </Card>
            <Card sx={{
                width: '25%',
                margin: '.75%',
                marginTop: '.5%',
                height: '90%'
            }}>
                <Button onClick={handleSubmit} sx={buttonStyle}>Save Prefernces</Button>
            </Card>
        </>
    )
}

export default GeneralProfileSettings

//Notes for next time:
//import context for the different toggles
//create handle functions for the setting (?--tentative as they may not be necessary)
//add more functionality to the handleSubmit function to create the desired fetch (PATCH) to the profiles endpoint
//In app.js=> create a useEffect/fetch to the profiles endpoint that listens to a change in the profileHold object (will use the current browser settings as default), this
// fetch will then set the ProfileHold object so that the application refreshes to the new settings
//set up ternary statements that listen to the userHold on signIn, but if changes are made to the profileHold it will override the userHold settings, could also 
// possible just fetch the userHold again, will have to see what has the better/ more elegant outcome