
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';

//the purpose of this function is to capture information of new storm WWA violations to be fed into the future fetch call 
//delivered to the Severe storm button

export default function SevereStormInputText({severeStormTime, setSevereStormTime, severeStormTime2, setSevereStormTime2, severeStormStartTime, setSevereStormStartTime, severeStormEndTime, setSevereStormEndTime}) {

  
  
  const handleChange = (event) => {
    setSevereStormTime(event.target.value);
  };

  const handleChange2 = (event) => {
    setSevereStormTime2(event.target.value)
  }

  const handleChange3 = (event) => {
    setSevereStormStartTime(event.target.value)
  }

  const handleChange4 = (event) => {
    setSevereStormEndTime(event.target.value)
  }



  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >
      <TextField
      sx={{
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.primary',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.secondary'
        }

      }}
      InputLabelProps={{
        shrink: true,
        sx: {
          color: 'text.primary',
          '&.Mui-focused': {
            color: 'text.secondary',
          },
        }
      }}
        type="date"
        id="beginning-date"
        label="Enter Beginning Date"

        value={severeStormStartTime}
        onChange={handleChange3}
        required
      />
      <TextField
      sx={{
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.primary',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.secondary'
        }

      }}
      InputLabelProps={{
        shrink: true,
        sx: {
          color: 'text.primary',
          '&.Mui-focused': {
            color: 'text.secondary',
          },
        }
      }}
        type="time"
        id="beginning-time"
        label="Enter Beginning Time"

        value={severeStormTime}
        onChange={handleChange}
        required
      />
      <TextField
      sx={{
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.primary',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.secondary'
        }

      }}
      InputLabelProps={{
        shrink: true,
        sx: {
          color: 'text.primary',
          '&.Mui-focused': {
            color: 'text.secondary',
          },
        }
      }}
        type="date"
        id="end-date"
        label="Enter Ending Date"

        value={severeStormEndTime}
        onChange={handleChange4}
        required
      />
      <TextField
      sx={{
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.primary',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'text.secondary'
        }

      }}
        InputLabelProps={{
        shrink: true,
        sx: {
          color: 'text.primary',
          '&.Mui-focused': {
            color: 'text.secondary',
          },
        }
      }}
        type="time"
        id="end-time"
        label="Enter Ending Time"

        value={severeStormTime2}
        onChange={handleChange2}
        required
      />
    </Box>
  );
}

