import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DropDown from './DropDown';
import { Paper } from '@mui/material';
import Item from '@material-ui/core/MenuItem';
function Courseselection(props) {

  return (
    <div>
         <Item style={{justifyContent:"center",marginLeft:"0px",alignItems:"center",justifyItems:"center"}}>
        <Paper style={{borderRadius:'20px',paddingBottom:'20px',width:'75vw',height:"120%",background:'#f7e6ff',justifySelf:"center",justifyContent:"center",alignItems:"center",justifyItems:'center'}}>
      <div className="radio" style={{marginLeft:'25%',marginTop:"0.023%",justifyContent:"center",alignItems:"center",justifyItems:"center"}}> <FormControl>
  <FormLabel id="demo-radio-buttons-group-label"style={{marginLeft:"20%",marginTop:"20%"}}>Select Course</FormLabel>
  <RadioGroup
  row
  style={{marginTop:"10px"}}
    aria-labelledby="demo-row-radio-buttons-group-label"
   
    name="row-radio-buttons-group">
    <FormControlLabel value={props.c1} control={<Radio />} label={props.c1} />
    <FormControlLabel value={props.c2}control={<Radio />} label={props.c2} /><br></br>
    </RadioGroup>
   
    <RadioGroup
  row
  style={{marginTop:"10px"}}
    aria-labelledby="demo-row-radio-buttons-group-label"
   
    name="row-radio-buttons-group"
  >
    

      <FormControlLabel  value={props.r}   control={<Radio />} label={props.r} />
      <FormControlLabel  value={props.a}   control={<Radio />} label={props.a} />
      <FormControlLabel  value={props.p}   control={<Radio />} label={props.p} />


  </RadioGroup>
</FormControl>
<DropDown></DropDown>


</div>
      
        
        </Paper>
        </Item>
    </div>
  )
}

export default Courseselection