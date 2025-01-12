import React, { useState } from 'react'
import { useContext } from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CircularProgress from '@mui/material/CircularProgress'
import MapModal from './mapmodal'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessibilityMenu from '../test components/accessibilityMenu'
import { Paper, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material'
import NavBarMenu from '../test components/menu';
import AvatarMenu from './Avatar'

let wslogo = '../images/45th_Weather_Squadron_Patch.png';


const drawerWidth = 240;


const cookies = new Cookies()

export default function LeftBar() {

    const tabletFlex= useMediaQuery('(min-width: 1200px)')
    const mobileFlex= useMediaQuery('(min-width: 700px)')
    const cloudFlex = useMediaQuery('(min-width: 425px)')
    const handleChange = (event) => {
        setRefreshRate(event.target.value);
    };

    cookies.get('area')
    let userInfo = cookies.get('authentication')

    const { area, setArea, site, setSite, imagePath, setImagePath, cookieData, setCookieData, showCountdowns, setShowCountdowns, setRefreshRate, refreshRate } = useContext(AppContext)
    const navigate = useNavigate();

    const [checked, setChecked] = useState(true)
    const [loading, setLoading] = useState(false)
    cookies.get('site')

    const formStyle = {
        color: 'text.primary',
        borderColor: 'text.primary',
        '& label.Mui-focused': {
            color: 'text.secondary',
            borderColor: 'text.secondary'
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'text.secondary'
            }
        },
        '& .MuiOutlinedInput-selected': {
            borderColor: 'text.primary'
        },

    }

    const handleHome = () => {
        navigate('/')
    }

    const handleCCSFS = () => {
        setArea(['Cape Central', 'Port', 'CX-20-16-LZ', 'CX-36-46', 'CX-37-ASOC-PPF', 'CX-40-41-SPOC'])
        setImagePath('./images/CCSFS.jpg')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }

    const handleKSC = () => {
        setArea(['KSC Industrial', 'LC-39', 'SLF'])
        setImagePath('./images/KSCArea.jpg')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }

    const handleOther = () => {
        setArea(['CIDCO Park', 'Astrotech'])
        setImagePath('./images/Other Area.jpg')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }

    const handlePatrick = () => {
        setArea(['Patrick SFB'])
        setImagePath('./images/psfb.PNG')
        setCookieData({ area: area, site: site })
        navigate('/area')
    }
    const handleToggle = (event) => {
        if (checked === true) {
            setChecked(event.target.checked)
            navigate('/admin')
        } else {
            setChecked(event.target.checked)
            navigate('/')
        }

    }
        ;
    const handleSignIn = () => {
        setLoading(true)
        navigate('/sign_in')
        setLoading(false)
    }

    const handleSignOut = () => {
        setLoading(true)
        cookies.remove('authentication', { path: '/' })
        navigate('/')
        setLoading(false)

    }

    const handleCountdowns = () => {
        if (showCountdowns === true) {
            setShowCountdowns(false)

        } else {
            setShowCountdowns(true)

        }
    }

    const buttonSX = {
        width: 'auto',
        height: '50%',
        marginTop: '2%',
        color: 'white',
        backgroundColor: '#01042F',
        borderRadius: '20px',
        fontFamily: 'Kanit',
        border: 'none',
        textDecoration: 'underline',
        "&:hover": {
            color: '#01042F',
            backgroundColor: 'white',
            border: '1px solid #01042F',
            textDecoration: 'underline',
            fontWeight: 'bold'
        }
    }
    const dropDownSX = {
        width: 'auto',
        color: 'white',
        backgroundColor: '#01042F',
        borderRadius: '20px',
        fontFamily: 'Kanit',
        border: 'none',
        textDecoration: 'underline',
        "&:hover": {
            color: '#01042F',
            backgroundColor: 'white',
            border: '1px solid #01042F',
            textDecoration: 'underline',
            fontWeight: 'bold'
        }
    }
    const locationButtonSX = {
        display: 'flex',
        textAlign: 'center',
        fontSize: '16px',
        color: 'white',
        fontWeight: '900',
        fontFamily: 'Kanit',
        bgcolor: '#01042F',
        height: '40px',
        "&:hover": {
            bgcolor: 'white', color: '#01042F', border: '1px solid #01042F'
        }
    }
    const siteButtonSX = {
        textAlign: 'center',
        fontSize: '13px',
        color: 'white',
        fontWeight: '800',
        fontFamily: 'Kanit',
        bgcolor: '#01042F',
        height: '40px',
        "&:hover": {
            bgcolor: 'white', color: '#01042F', border: '1px solid #01042F'
        }

    }
    if (loading === true) {
        return (
            <Box sx={{ display: 'flex', placeContent: 'center center', paddingTop: '10%' }}>
                <CircularProgress />
            </Box>
        )
    } else {

        return (
            <>

                <AppBar
                    position="fixed"

                    sx={{ display: 'flex', flexDirection: 'row', width: `100%`, height: '5%', alignItems: 'center', bgcolor: 'primary.main' }}
                >
                    <Toolbar sx={{ paddingTop: '5px', width: '100%', display: 'flex' }}>

                            <NavBarMenu />
                        <div onClick={handleHome} style={{ margin:'10px',position:'fixed', left:(tabletFlex ?'5%' :'10%'), width: (tabletFlex ? '30%' : 'auto'), cursor: 'pointer', display: 'flex', justifyContent: 'left'}}>
                            <Typography sx={{marginLeft:'25px'}} color='text.primary' variant={tabletFlex ? 'h5' :'h7'} noWrap component="Paper" >
                                {cloudFlex && <CloudOutlinedIcon sx={{ height:'35px', width: 'auto' }} />}&nbsp;Weather Warning eBoard
                            </Typography>
                        </div>
                        {mobileFlex &&
                        <div style={{ marginLeft:'45.5%' }}>
                            <MapModal />
                        </div>}

                        <div style={{position:'fixed', right:'8%', width: '8%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            {/* <FormControl sx={formStyle} fullWidth style={{width: '28%'}}>
                                <InputLabel sx={formStyle} id="Refresh-Rate-label">Refresh Rate</InputLabel>
                                <Select
                                    labelId="Refresh-Rate-label"
                                    id="Refresh-Rate"
                                    value={refreshRate}
                                    label="Refresh Rate"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={30000}>30 Seconds</MenuItem>
                                    <MenuItem value={60000}>60 Seconds</MenuItem>
                                    <MenuItem value={300000}>5 Minutes</MenuItem>
                                </Select>
                            </FormControl> */}
                            <AvatarMenu />
                            <AccessibilityMenu />
                            

                        </div>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}


