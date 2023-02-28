import React from 'react'
import { Alert, AlertTitle, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LeftBar from './LeftBar'
import {red} from '@mui/material/colors'
import { BsExclamationCircle } from 'react-icons/bs'
const NotFoundAlert = () => {
    const navigate = useNavigate()
    return (
        <>
        <LeftBar/>
            <Alert sx={{marginTop:'60px', bgcolor:red[600], display:'flex', justifyContent:'center', color:'white'}}
                   icon={<BsExclamationCircle color='white'/>}
                   
            >
                <AlertTitle sx={{fontWeight:'bold'}}> Error domain not found!</AlertTitle>
            </Alert>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Button sx={{
                  mt: 3, mb: 2, bgcolor: 'text.primary', color: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'text.secondary',
                    color: 'text.primary'
                  }
                }} onClick={() => navigate('/')}>Return to Home Page</Button>
            </div>
        </>
    )
}

export default NotFoundAlert