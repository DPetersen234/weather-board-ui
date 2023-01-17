import React from "react";
import { useState } from "react";

//functionality of the checkboxes for wind violation criteria in the wind splash panel of the Admin Page

const CheckboxComponent = ({label, setwindCheckedLocationValues, windCheckedLocationValues }) => {
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
                <input onChange={handleChange} type="checkbox" />
                <span>{label}</span>
            </label>
        </div>
    )
}

export default CheckboxComponent