import React, { useContext } from 'react'
import LeftBar from "../components/LeftBar"
import InnerText from "../components/InnerText"
import AreaView from "../components/AreaView"
import { Box } from "@mui/system"
import Cookies from 'universal-cookie'
import { AppContext } from '../context/AppContext'
import { CircularProgress } from '@mui/material'
import Grid from '@mui/material/Grid';
import HomeByLocation from './HomeByLocation'





const UserPage = () => {
    const { site, area, storm, lightning, wind, themeToggle } = useContext(AppContext)

    if (storm == [] || lightning == [] || wind == []) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CircularProgress />
            </Box>
        )
    } else {

        return (
            <Box sx={{ display: 'flex', height: 'auto', flexDirection: 'row', bgcolor: (themeToggle === false ? 'text.primary' : 'background.default') }}>
                <LeftBar />
                <InnerText />
                {/* <HomeByLocation/> */}

            </Box>
        )
    }
}

export default UserPage