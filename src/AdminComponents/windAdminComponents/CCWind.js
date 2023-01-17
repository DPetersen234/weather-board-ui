import { TextField } from "@mui/material"
import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../context/AppContext";

//Provides the types of WWA violations in wind conditions for CCSFS within the wind splash panel of the Admin Page
const CCWind = () => {


    const { CCWindProperties, setCCWindProperties, CCcheckedValues, setCCcheckedValues } = useContext(AppContext);

    //have to make some type of stateful object, that holds the value from the checkboxes & the value of the direction/speed
    const handleCheck = (event) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        if (CCcheckedValues.includes(event.target.value)) {
            let newArr = CCcheckedValues.filter(value => value !== event.target.value)
            setCCcheckedValues(newArr)
        } else {
            setCCcheckedValues([...CCcheckedValues, event.target.value])
        }
        //if event.target.value does not exist within checkedValues, push to checkedValues
        //if the event.tagert value exists within checkedValues, then filter and push new array to checkedValues, it means that value has been unclicked
    }

    const handleNumber = (event) => {
        let name = event.currentTarget.id
        setCCWindProperties({ ...CCWindProperties, [name]: event.target.value })
        //have checks that are based on the ID that push the values to CCWindProperties
        //setCCWindProperties({...CCWindProperties, [name]: event.target.value})

    }
    //(event.currentTarget.id)
    //event.target.value
    return (
        <>
            <div style={{
                margin: '15px',
            }}>
                <div style={{
                    display: 'flex',
                    marginTop: '15px',
                }}>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"18 kt steady-state"}
                                onChange={(e) => handleCheck(e)}
                                disabled={CCcheckedValues.includes("18 kt steady-state clear") == true}
                            />
                            <span style={{
                            }}>18 kt steady-state</span>
                        </label>
                    </div>
                    <div style={{
                        width: '25%',
                    }}>

                        <TextField id="18 kt steady-state" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={CCcheckedValues.includes("18 kt steady-state clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />
                    </div>
                    <div style={{width: '25%',}}></div>
                    <div>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"18 kt steady-state clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>
                    </div>

                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '15px',
                }}>
                    <div style={{
                        width: "25%",
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }}
                                onChange={(e) => handleCheck(e)}
                                value={"22 kt steady-state"}
                                disabled={CCcheckedValues.includes("22 kt steady-state clear") == true}

                            />
                            <span>22 kt steady-state</span>
                        </label>

                    </div>
                    <div style={{
                        width: "25%",
                    }}>
                        <TextField id="22 kt steady-state" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={CCcheckedValues.includes("22 kt steady-state clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />

                    </div>
                    <div style={{ width: '25%', }}>

                    </div>
                    <div style={{
                        width: "25%",
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"22 kt steady-state clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '5px',
                }}>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }}
                                onChange={(e) => handleCheck(e)}
                                value={"Strong Winds"}
                                disabled={CCcheckedValues.includes("Strong Winds clear") == true}

                            />
                            <span style={{
                                width: '50%',
                            }}>Strong Winds </span>
                        </label>
                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Strong Winds 1" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',

                        }}
                            disabled={CCcheckedValues.includes("Strong Winds clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />
                    </div>

                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Strong Winds 2" type="number" label="Speed" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={CCcheckedValues.includes("Strong Winds clear") == true}
                            onChange={(e) => handleNumber(e)} />

                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"Strong Winds clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>

                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginTop: '15px',
                }}>
                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} onChange={(e) => handleCheck(e)}
                                value={"Damaging Winds"}
                                disabled={CCcheckedValues.includes("Damaging Winds clear") == true}
                            />
                            <span style={{
                                width: '50%',
                            }}>Damaging Winds</span>
                        </label>

                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Damaging Winds 1" type="number" label="Direction" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={CCcheckedValues.includes("Damaging Winds clear") == true}
                            onChange={(e) => handleNumber(e)}
                        />


                    </div>
                    <div style={{
                        width: '25%',
                    }}>
                        <TextField id="Damaging Winds 2" type="number" label="Speed" variant="outlined" size="small" style={{
                            width: '85%',
                        }}
                            disabled={CCcheckedValues.includes("Damaging Winds clear") == true}
                            onChange={(e) => handleNumber(e)} />
                    </div>

                    <div style={{
                        width: '25%',
                    }}>
                        <label>
                            <input type="checkbox" style={{
                                margin: '15px',
                            }} value={"Damaging Winds clear"}
                                onChange={(e) => handleCheck(e)}
                            />
                            <span style={{
                            }}>Cancel</span>
                        </label>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CCWind