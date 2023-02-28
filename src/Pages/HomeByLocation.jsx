import React, { useContext } from 'react'
import { Card, Paper, Typography, useMediaQuery, Box, Button } from '@mui/material'
import { BsLightningFill, BsThermometer } from 'react-icons/bs'
import { RiWindyFill } from 'react-icons/ri'
import { RiHailFill, RiTornadoFill } from 'react-icons/ri'
import { AppContext } from '../context/AppContext'
import { colors } from '@mui/material'
import LeftBar from '../components/LeftBar'



const HomeByLocation = () => {
    const { themetoggle } = useContext(AppContext)
    const locations = ['Cape Central', 'Port', 'CX-20-16-LZ', 'CX-36-46', 'CX-37-ASOC-PPF', 'CX-40-41-SPOC']
    const KSCLocations =['LC-39', 'SLF', 'KSC Industrial']
    const OtherLocations = ['Astrotech', 'CIDCO Park']
    const PSFBLocations = ['PSFB']
    const lightBox = {
        width: '100%',
        height: '180%',
        flexGrow: 1,
        bgcolor: 'text.primary',
        mt: 4,
        pt: 5,
        p: 4,
        display: 'flex',
        justifyContent: 'center'

    }

    const darkBox = {
        width: '100%',
        height: '120%',
        flexGrow: 1,
        bgcolor: 'black',
        mt: 2,
        pt: 5,
        pb:14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

    const cardStyle = {
        width: '100%',
        height: '100%',
        margin: '.2%',
        marginTop: '2%',
        padding: '.2%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        textAlign: 'left',
        bgcolor: 'background.paper'

    }
    const CCSFSPaperStyle = {
        width: 'auto',
        height: '420px',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'row',

    }
    const KSCPaperStyle = {
        width: 'auto',
        height: '33%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'row',

    }
    const PSFBPaperStyle = {
        width: 'auto',
        height: '25%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'row',

    }
    const OtherPaperStyle = {
        width: 'auto',
        height:'18%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'row',

    }
    const h3Style = {
        textAlign: 'left',
        justifyContent: 'left',
        textDecoration: 'underline',
        fontfamily: 'Kanit',
        marginLeft: '1%'
    }
    const h4Style = {
        width: '50%',
        height: '100%',
        marginLeft: '.5%'
    }
    const h5Style = {
        textDecoration: 'underline',
        fontFamily: 'Kanit'
    }
    const Phase1Button = {
        bgcolor: '#FFFE00',
        width: '48px',
        height: '48px',
        color: 'black',
        '&:hover': {
            border: '3px solid #FFFE00',
            bgcolor: 'black',
            color: 'yellow'
        }

    }
    const Phase2Button = {
        bgcolor: '#FF0700',
        width: '48px',
        height: '48px',
        border: '3px solid #FF0700',
        color: 'white',
        '&:hover': {
            bgcolor: 'white',
            color: '#FF0700'
        }
    }
    const AdvisoryButton = {
        bgcolor: 'purple',
        width: '48px',
        height: '48px',
        marginLeft: '35px',
        color: 'white',
        '&:hover': {
            bgcolor:'white',
            border:'3px solid purple',
            color: 'purple'
        }
    }
    const ClearButton = {
        bgcolor: 'green',
        width: '48px',
        height: '48px',
        marginLeft: '35px',
        color: 'white',
        '&:hover': {
            bgcolor:'white',
            border:'3px solid green',
            color: 'green'
        }
    }
    const WarningButton ={
        bgcolor: 'red',
        width: '48px',
        height: '48px',
        marginLeft: '35px',
        color: 'white',
        '&:hover': {
            bgcolor:'white',
            border:'3px solid red',
            color: 'red'
        }
    }
    return (
        <>
            <Box sx={themetoggle === false ? lightBox : darkBox}>
                <LeftBar />
                <Card sx={cardStyle}>
                    <Paper sx={CCSFSPaperStyle}>
                        <div style={{
                            width: '40%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft:'12px'
                        }}>
                            <h2 style={h3Style}>CCSFS WWA Information</h2>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '8%',
                                display: 'flex',
                                flexDirection: 'row',
                                bgcolor: 'black',
                                
                            }}>
                                <div style={{ width: '50%' }} >
                                    <h3 style={h3Style}>Lightning WWA's</h3>
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <h5 style={h5Style}>Phase 1</h5>
                                    <h5 style={h5Style}>Phase 2</h5>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                bgcolor: 'black'

                            }}>{locations.map((item) => {
                                return (
                                    <div style={{
                                        height: '12%',
                                        display: 'flex',
                                        flexDirection: 'row'


                                    }}>
                                        <h4 style={h4Style}>{item}</h4>
                                        <div style={{
                                            width: '50%',
                                            display: 'flex',
                                            justifyContent: 'space-evenly'

                                        }}>
                                            <Button sx={Phase1Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                            <Button sx={Phase2Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                            </Card>
                        </div>
                        <div style={{
                            width: '60%',
                            height: 'auto',
                            marginTop: '1.65%',
                            marginLeft: '2px',
                            display:'flex',
                            flexDirection:'row'
                        }}>
                            <Card elevation={3} sx={{
                                width: '32.9%',
                                bgcolor: 'black',
                                marginRight: '2px'
                            }}><h3 style={h3Style}>Wind WWA's</h3>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>18 KT Steady State</h4>
                                        <Button sx={AdvisoryButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>22KT Steady State</h4>
                                        <Button sx={AdvisoryButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Strong Wind Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Damaging Wind Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '33%',
                                bgcolor: 'black',
                                marginRight: '2px'
                            }}><h3 style={h3Style}>Severe Storm WWA's</h3>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Hail Expected</h4>
                                        <Button sx={WarningButton}>
                                            <RiHailFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Damaging Winds Expected</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Tornado Watch</h4>
                                        <Button sx={WarningButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Tornado Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '33%',
                                bgcolor: 'black',

                            }}><h3 style={h3Style}>Temperature and Waterspout WWA's</h3>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>32° F Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <BsThermometer style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Water Spout Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    
                                </div></Card>

                        </div>
                    </Paper>
                    <Paper sx={KSCPaperStyle}>
                        <div style={{
                            width: '40%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft:'12px'
                        }}>
                            <h2 style={h3Style}>KSC WWA Information</h2>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '20%',
                                display: 'flex',
                                flexDirection: 'row',
                                bgcolor: 'black',
                                
                            }}>
                                <div style={{ width: '50%' }} >
                                    <h3 style={h3Style}>Lightning WWA's</h3>
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <h5 style={h5Style}>Phase 1</h5>
                                    <h5 style={h5Style}>Phase 2</h5>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '270px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                bgcolor: 'black'

                            }}>{KSCLocations.map((item) => {
                                return (
                                    <div style={{
                                        height: '12%',
                                        display: 'flex',
                                        flexDirection: 'row'


                                    }}>
                                        <h4 style={h4Style}>{item}</h4>
                                        <div style={{
                                            width: '50%',
                                            display: 'flex',
                                            justifyContent: 'space-evenly'

                                        }}>
                                            <Button sx={Phase1Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                            <Button sx={Phase2Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                            </Card>
                        </div>
                        <div style={{
                            width: '60%',
                            height: 'auto',
                            marginTop: '1.65%',
                            marginLeft: '2px',
                            display:'flex',
                            flexDirection:'row'
                        }}>
                            <Card elevation={3} sx={{
                                width: '32.9%',
                                bgcolor: 'black',
                                marginRight: '2px'
                            }}><h3 style={h3Style}>Wind WWA's</h3>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>18 KT Steady State</h4>
                                        <Button sx={AdvisoryButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Strong Wind Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Damaging Wind Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '33%',
                                bgcolor: 'black',
                                marginRight: '2px'
                            }}><h3 style={h3Style}>Severe Storm WWA's</h3>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Hail Expected</h4>
                                        <Button sx={WarningButton}>
                                            <RiHailFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Damaging Winds Expected</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Tornado Watch</h4>
                                        <Button sx={WarningButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Tornado Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '33%',
                                bgcolor: 'black',

                            }}><h3 style={h3Style}>Temperature and Waterspout WWA's</h3>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>32° F Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <BsThermometer style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>28° F Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <BsThermometer style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Water Spout Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    
                                </div></Card>

                        </div>
                    </Paper>
                    <Paper sx={PSFBPaperStyle}>
                        <div style={{
                            width: '40%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft:'12px'
                        }}>
                            <h2 style={h3Style}>PSFB WWA Information</h2>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '10%',
                                display: 'flex',
                                flexDirection: 'row',
                                bgcolor: 'black',
                                
                            }}>
                                <div style={{ width: '50%' }} >
                                    <h3 style={h3Style}>Lightning WWA's</h3>
                                </div>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <h5 style={h5Style}>Phase 1</h5>
                                    <h5 style={h5Style}>Phase 2</h5>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '270px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                bgcolor: 'black'

                            }}>{PSFBLocations.map((item) => {
                                return (
                                    <div style={{
                                        height: '12%',
                                        display: 'flex',
                                        flexDirection: 'row'


                                    }}>
                                        <h4 style={h4Style}>{item}</h4>
                                        <div style={{
                                            width: '50%',
                                            display: 'flex',
                                            justifyContent: 'space-evenly'

                                        }}>
                                            <Button sx={Phase1Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                            <Button sx={Phase2Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                            </Card>
                        </div>
                        <div style={{
                            width: '60%',
                            height: 'auto',
                            marginTop: '1.65%',
                            marginLeft: '2px',
                            display:'flex',
                            flexDirection:'row'
                        }}>
                            <Card elevation={3} sx={{
                                width: '32.9%',
                                bgcolor: 'black',
                                marginRight: '2px'
                            }}><h3 style={h3Style}>Wind WWA's</h3>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>25KT Observed</h4>
                                        <Button sx={AdvisoryButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Strong Wind Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Damaging Wind Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '33%',
                                bgcolor: 'black',
                                marginRight: '2px'
                            }}><h3 style={h3Style}>Severe Storm WWA's</h3>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Hail Expected</h4>
                                        <Button sx={WarningButton}>
                                            <RiHailFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Damaging Winds Expected</h4>
                                        <Button sx={WarningButton}>
                                            <RiWindyFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>Tornado Watch</h4>
                                        <Button sx={WarningButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Tornado Warning</h4>
                                        <Button sx={WarningButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '33%',
                                bgcolor: 'black',

                            }}><h3 style={h3Style}>Temperature and Waterspout WWA's</h3>
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom:'2%'
                                    }}><h4 style={h4Style}>32° F Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <BsThermometer style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}><h4 style={h4Style}>Water Spout Advisory</h4>
                                        <Button sx={ClearButton}>
                                            <RiTornadoFill style={{
                                                width: '50px',
                                                height: '50px',

                                            }} />
                                        </Button>
                                    </div>
                                    
                                </div></Card>

                        </div>
                    </Paper>
                    <Paper sx={OtherPaperStyle}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft:'12px'
                        }}>
                            <h2 style={h3Style}>Other WWA Information</h2>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '10%',
                                display: 'flex',
                                flexDirection: 'row',
                                bgcolor: 'black',
                                
                            }}>
                                <div style={{ width: '13%' }} >
                                    <h3 style={h3Style}>Lightning WWA's</h3>
                                </div>
                                <div style={{
                                    width: '39%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    marginRight:'2%'
                                }}>
                                    <h5 style={{
                                        marginLeft:'6%',
                                        paddingRight:'5%',
                                        textDecoration:'underline',
                                        fontWeight:'bold',
                                        marginTop: '2px'
                                    }}>Phase 1</h5>
                                    <h5 style={{
                                        marginLeft:'-10%',
                                        textDecoration:'underline',
                                        fontWeight:'bold',
                                        marginTop: '2px'
                                    }}>Phase 2</h5>
                                </div>
                                <div style={{
                                    width: '40%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <h5 style={{
                                        marginLeft:'47%',
                                        
                                        textDecoration:'underline',
                                        fontWeight:'bold',
                                        marginTop: '2px'
                                    }}>Phase 1</h5>
                                    <h5 style={{
                                        paddingLeft:'12%',
                                        textDecoration:'underline',
                                        fontWeight:'bold',
                                        marginTop: '2px'
                                    }}>Phase 2</h5>
                                </div>
                            </Card>
                            <Card elevation={3} sx={{
                                width: '100%',
                                height: '80px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                bgcolor: 'black'

                            }}>{OtherLocations.map((item) => {
                                return (
                                    <div style={{
                                        height: '12%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width:'50%'


                                    }}>
                                        <h4 style={h4Style}>{item}</h4>
                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection:'row',
                                            justifyContent: 'space-evenly'

                                        }}>
                                            <Button sx={Phase1Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                            <Button sx={Phase2Button}>
                                                <BsLightningFill style={{ height: 'auto', width: '50px' }} />
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                            </Card>
                        </div>
                    </Paper>
                </Card>
            </Box>
        </>
    )
}

export default HomeByLocation