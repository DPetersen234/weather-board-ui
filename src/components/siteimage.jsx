import React from 'react'
import { CardMedia } from '@mui/material'
import { ConstructionOutlined } from '@mui/icons-material'

const SiteImage = ({images}) =>{
 console.log('IMAGE',images[0].imgsrc)
    return (
        <img  style={{width: '100%', height: 'auto'}} src={images[0].imgsrc} alt='placeholder'></img>
    )
}
export default SiteImage