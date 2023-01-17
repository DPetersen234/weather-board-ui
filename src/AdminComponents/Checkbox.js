import React from "react";

import { useState } from "react";

//The checkbox component present within the lightning splash panel. Used for capturing the information presented to the later fetch
//call within the lightining button

const CheckboxComponent = ({label, setCheckedValues, checkedValues }) => {
    const [checked, setChecked] = useState(false)
    
    
    const handleChange = () => {
        if (checked == true) {
            setCheckedValues(checkedValues.filter(value => value != label))
            setChecked(false)
        }
        if (checked == false) {
            if (checkedValues == undefined) {
                setCheckedValues([label])
                setChecked(true)
            } else {
                setCheckedValues([...checkedValues, label])
                setChecked(true)
            }
        }
    }
    return(
        
        <div>
            <label>
                <input onChange={handleChange} type="checkbox" style={{
                            margin: '15px',
                        }}/>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckboxComponent