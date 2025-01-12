import { HiOutlineXCircle } from 'react-icons/hi'
import { BsExclamationCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
import { GiCancel } from 'react-icons/gi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import LightningCountdown from './LightningCountdown'
import { AppContext } from '../../context/AppContext'
import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'

const InnerConditions = ({ item, location }) => {
    const navigate = useNavigate()
    const { showCountdowns,site, setSite, setArea, setImagePath, area } = useContext(AppContext)
    const { mode } = useContext(AppContext)
    const HandleRouting = () =>{
        if (location === 'Patrick SFB') {
            setArea([location])
            setImagePath('../../images/psfb.PNG')
            navigate('/area')
        }else {
            (location === 'KSC Industrial' || location === 'LC-39' || location === 'SLF') ? setArea(['KSC Industrial', 'LC-39', 'SLF']) :
            (location === 'Cape Central' || location ===  'Port' || location ===  'CX-20-16-LZ' || location ===  'CX-36-46' || location ===  'CX-37-ASOC-PPF' || location ===  'CX-40-41-SPOC') ? setArea(['Cape Central', 'Port', 'CX-20-16-LZ', 'CX-36-46', 'CX-37-ASOC-PPF', 'CX-40-41-SPOC']) :
             setArea(['CIDCO Park', 'Astrotech'])
            setSite(location)
            navigate(`/site/${location}`)
            
        } 
    }

    let border = (
        (item.type == 'Clear' ? mode.clear.border : (item.category == 'Warning') ? mode.warning.border : (item.category == 'Watch') ? mode.watch.border : mode.advisory.border)
        )
    return (
        <div  style={{
            display: 'flex',
            marginBottom:'3px',
            lineHeight: '100%',
            width:'100%',
        }}
            >
            <div onClick={HandleRouting} style={{
                cursor:'pointer',
                width: '40%',
                marginRight: '10%',
                fontSize:'115%',
                verticalAlign: 'middle',
                color: (item.type == 'Clear' ? mode.clear.locationColor : (item.category == 'Warning') ? mode.warning.locationColor : (item.category == 'Watch') ? mode.watch.locationColor : mode.advisory.locationColor),
                fontWeight: 'bold',
               

            }}>
                {location} <div style={{
                    fontStyle: 'italic',
                    color: '#747474'
                }}>{item.category}</div>
            </div>


            <div onClick={HandleRouting} style={{
                cursor:'pointer',
                width: '75%',
                margin: '0 auto',
                marginRight: '5px',
                marginBottom: '5px',
                backgroundColor: ((item.type === 'Clear')? mode.clear.innerDiv : (item.category === 'Warning') ? mode.warning.innerDiv : (item.category==='Watch')? mode.watch.innerDiv : mode.advisory.innerDiv),
                border:`2px solid ${border}`,
                borderRadius: '25px',
                textAlign: 'left',
                
                filter: 'drop-shadow(0 2px 0.2rem black',
                display: 'flex',
                justifyContent: 'space-evenly',
                height: 'auto',
            }}>
                <div style={{
                    width: '5%'
                }}><div style={{
                    width: '95%',
                    marginTop: '3px',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    marginBottom: '3px',
                }}>
                        {item.type === 'Clear' && <BsCheckCircle style={{color: mode.clear.iconColor, height:'100%', width:'auto'}} />}
                        {item.category === 'Watch' && <BsExclamationCircle style={{ color: mode.watch.iconColor, height: '100%', width: 'auto' }} />}
                        {item.category === 'Warning' && <HiOutlineXCircle style={{ color: mode.warning.iconColor, height: '100%', width: 'auto' }} />}
                        {item.category === 'Advisory' && <AiOutlineQuestionCircle style={{ color: mode.advisory.iconColor, height: '100%', width: 'auto' }} />}
                    </div>
                </div>
                <div style={{
                    width: '20%',
                    color: (item.type == 'Clear' ? mode.clear.textColor : (item.category == 'Warning') ? mode.warning.textColor : (item.category == 'Watch') ? mode.watch.textColor : mode.advisory.textColor),
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                    }}>
                        {item.type === 'Clear' ? 'Clear' : item.type}
                    </div>
                </div>
                <div style={{
                    width: '20%',

                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.category == 'Warning') ? mode.warning.textColor : (item.category == 'Watch') ? mode.watch.textColor : mode.advisory.textColor),

                    }}>
                        {item.type === 'Clear' ? '00:00' : `${item.start.slice(11, 16)}L`}

                    </div>
                </div>
                <div style={{
                    width: '20%',
                }}>
                    <div style={{
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.category == 'Warning') ? mode.warning.textColor : (item.category == 'Watch') ? mode.watch.textColor : mode.advisory.textColor),

                    }}>
                        {item.type == 'Clear' ? '00:00 ' : (item.category == 'Warning' ? "INDEF" : item.category == 'Watch' ? `${item.end.slice(11, 16)}L` : "00:00")}
                    </div>
                </div>
                <div style={{
                    width: '20%'
                }}>{showCountdowns === true &&
                    <div style={{
                        backgroundColor: ((item.type === 'Clear') ? mode.clear.innerDiv : (item.category === 'Warning') ? 'white' : (item.category === 'Watch') ? mode.watch.innerDiv : mode.advisory.innerDiv),
                        color: (item.type == 'Clear' ? mode.clear.textColor : (item.category == 'Warning') ? 'black' : (item.category == 'Watch') ? mode.watch.textColor : mode.advisory.textColor),
                        width: '95%',
                        marginTop: '3px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        marginBottom: '3px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        border: '1px solid black',
                    }}>
                        {item.category == 'Clear' ? '00:00' : (item.category == 'Warning' ? "INDEF" : item.category == 'Watch' ? <LightningCountdown item={item} /> : "00:00")}
                    </div>}
                </div>
            </div>
        </div >
    )
}

export default InnerConditions