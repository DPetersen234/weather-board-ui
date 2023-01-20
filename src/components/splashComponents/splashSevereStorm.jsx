import React, { useContext } from 'react'
import { Card, Grid, Paper, useMediaQuery } from '@mui/material';
import { RiThunderstormsLine } from 'react-icons/ri'
import SevereStormBar from './severeStormBar';
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
import StormSplashPop from './StormSplashInfoPop';



const SplashSevereStorm = ({ states }) => {
    const CCSFSSevere = ['CCSFS']
    const KSCSevere = ['KSC']
    const PSFBSevere = ['PSFB']
    const { showCountdowns, capeStormToggle, kscStormToggle, psfbStormToggle } = useContext(AppContext)
    const navigate = useNavigate()

    const handleCCSFS = () => {
        
        navigate('/area/CCSFS')
    }

    const handleKSC = () => {
        
        navigate('/area/KSC')
    }

    const handlePatrick = () => {
        
        navigate('/area/PSFB')
    }

    const tabletFlex = useMediaQuery('(min-width: 1200px)')
    return (
        <Card elevation={5} sx={{
            height: '50%',
            margin: '15px',
            bgcolor: 'primary.main'


        }}><div style={{ display: 'flex', position: 'relative' }}>
                <h1 style={{

                    width: '96.5%',
                    textAlign: "left",
                    margin: '10px',
                    marginLeft: '1%'

                }}><RiThunderstormsLine /> Severe Storms</h1>
                <StormSplashPop />
            </div>
            <div className="outerContainer" style={{
                display: 'flex',
            }}>
                <div className="textContainer" style={{
                    flex: '1',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: (tabletFlex ? undefined : 'column')
                    }}>
                        {capeStormToggle === true &&
                            <Card elevation={10}
                                style={{

                                    margin: '10px',
                                    height: '75%',
                                    width: (tabletFlex ? '50%' : '98%'),
                                    flex: 1

                                }}>

                                <h2 onClick={handleCCSFS} style={{
                                    textAlign: "left",
                                    marginLeft: '5px',
                                    cursor: 'pointer',
                                    textDecoration: 'underline'

                                }}>Cape Canaveral Space Force Station</h2>
                                <div style={{
                                    display: 'flex',
                                    marginBottom: '5px',
                                }}>
                                    <div style={{
                                        width: '78%',
                                        margin: '0'
                                    }}></div>
                                        <div style={{
                                            width: '5%'
                                        }}>

                                        </div>
                                        <div style={{
                                            width: '22%',
                                            fontSize: '100%',
                                            
                                        }}>
                                            Status
                                        </div>
                                        <div style={{
                                            width: '25%',
                                            fontSize: '100%',
                                            
                                        }}>
                                            Start Time
                                        </div>
                                    
                                    <div style={{
                                        width: '25%',
                                        fontSize: '100%',
                                        
                                    }}>
                                        End Time
                                    </div>


                                    <div style={{
                                        width: '25%',
                                        fontSize: '100%',
                                        
                                    }}>
                                        {showCountdowns === true ? "Countdown" : ''}
                                    </div>

                                </div>


                                {CCSFSSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === 'CCSFS')} location={location} />)}

                            </Card>}
                        {kscStormToggle === true &&
                            <Card elevation={10}
                                style={{

                                    margin: '10px',
                                    height: '75%',
                                    width: (tabletFlex ? '50%' : '98%'),
                                    flex: 1

                                }}>

                                <h2 onClick={handleKSC} style={{
                                    textAlign: "left",
                                    marginLeft: '5px',
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }}>Kennedy Space Center</h2>
                                <div style={{
                                    display: 'flex',
                                    marginBottom: '5px',
                                }}>
                                    <div style={{
                                        width: '40%',
                                        margin: '0'
                                    }}></div>
                                    <div style={{
                                        display: 'flex',
                                        width: '70%',
                                        justifyContent: 'space-evenly'

                                    }}>
                                        <div style={{
                                            width: '5%'
                                        }}></div>
                                        <div style={{
                                            width: '22%',
                                            paddingLeft: '22px',
                                            fontSize: '100%',
                                            
                                        }}>
                                            Status
                                        </div>
                                        <div style={{
                                            width: '20%',
                                            fontSize: '100%',
                                            
                                        }}>
                                            Start Time
                                        </div>
                                        <div style={{
                                            width: '20%',
                                            fontSize: '100%',
                                            
                                        }}>
                                            End Time
                                        </div>
                                        <div style={{
                                            width: '20%',
                                            marginRight: '2px',
                                            fontSize: '100%',
                                            
                                        }}>
                                            {showCountdowns === true &&
                                                "Countdown"}
                                        </div>
                                    </div>
                                </div>
                                {KSCSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === 'KSC')} location={location} />)}

                            </Card>}
                        {psfbStormToggle === true &&
                            <Card elevation={10}
                                style={{

                                    margin: '10px',
                                    height: '75%',
                                    width: (tabletFlex ? '50%' : '98%'),
                                    flex: 1

                                }}>

                                <h2 onClick={handlePatrick} style={{
                                    textAlign: "left",
                                    marginLeft: '5px',
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }}>Patrick Space Force Base</h2>
                                <div style={{
                                    display: 'flex',
                                    marginBottom: '5px',
                                }}>
                                    <div style={{
                                        width: '40%',
                                        margin: '0'
                                    }}></div>
                                    <div style={{
                                        display: 'flex',
                                        width: '70%',
                                        justifyContent: 'space-evenly'

                                    }}>
                                        <div style={{
                                            width: '5%'
                                        }}></div>
                                        <div style={{
                                            width: '22%',
                                            paddingLeft: '22px',
                                            fontSize: '100%',
                                            
                                        }}>
                                            Status
                                        </div>
                                        <div style={{
                                            width: '20%',
                                            fontSize: '100%',
                                            
                                        }}>
                                            Start Time
                                        </div>
                                        <div style={{
                                            width: '20%',
                                            fontSize: '100%',
                                            
                                        }}>
                                            End Time
                                        </div>
                                        <div style={{
                                            width: '20%',
                                            marginRight: '2px',
                                            fontSize: '100%',
                                            
                                        }}>
                                            {showCountdowns === true &&
                                                "Countdown"}
                                        </div>
                                    </div>
                                </div>
                                {PSFBSevere.map((location, index) => <SevereStormBar key={index} states={states.filter((item) => item.location === location)} location={location} />)}

                            </Card>}
                    </div>

                </div>
            </div>
        </Card >
    )
}

export default SplashSevereStorm