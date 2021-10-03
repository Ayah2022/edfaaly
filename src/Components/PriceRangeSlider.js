
import React, { useState ,Fragment} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  console.log("value " + value )
  return `${value}`;
}

function PriceRangeSlider(props) {
  const [value, setValue] = useState([0, 4500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.getRange(newValue);
  };

  return (
    <Fragment>
    <Box sx={{ width: 300 }}>
    <div className="priceRange">
      <input  placeholder="From" value={`$ ${value[0]} USD`} readOnly />
      <input  placeholder="To" value={`$ ${value[1]} USD`} readOnly/>
    </div>
    <Slider
      getAriaLabel={() => 'Price range'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={20} max={4500}
      getAriaValueText={valuetext}
    />
  </Box>
 
  </Fragment>
  )
}

export default PriceRangeSlider
