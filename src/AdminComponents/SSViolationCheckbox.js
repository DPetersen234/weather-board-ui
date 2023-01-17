import React from "react";
import { useState } from "react";

//functionality for the checkbox forms in the severe storm splash on the Admin Page

const SSViolationCheckbox = ({label, stormViolationValues, setStormViolationValues }) => {
    const [checked, setChecked] = useState(false)
    
    const handleChange = () => {
        if (checked == true) {
            setStormViolationValues(stormViolationValues.filter(value => value != label))
            setStormViolationValues(false)
        }
        if (checked == false) {
            if (stormViolationValues == undefined) {
                setStormViolationValues([label])
                setChecked(true)
            } else {
                setStormViolationValues([...stormViolationValues, label])
                setChecked(true)
            }
        }
    }
    return(
        <div>
            <label>
                <input onChange={handleChange} type="checkbox" />
                <span>{label}</span>
            </label>
        </div>
    )
}

export default SSViolationCheckbox;