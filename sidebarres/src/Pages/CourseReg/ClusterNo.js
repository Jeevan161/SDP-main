import React from 'react'
import { Paper } from '@mui/material'
import kllogo from '../kllogo.jpg';
import { SDivider } from '../../components/Sidebar/styles';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Item from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Demo from './Demo'
import Select from '@mui/material/Select';
import DropDown from './DropDown';
import Header from '../Header';
import Courseselection from './Courseselection';



const style={Width:"100%",height:"100%",paddingTop:25,paddingBottom:25,borderRadius:"20px", alignItems: 'center',display:'grid',background:'rgba(255,255,255,0.28)',marginLeft:"4%",marginRight:"4%"};
function ClusterNo() {
  
    const [age, setAge] = React.useState('');
    const x=8;
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <div>
    <Header/>
      <SDivider style={{marginTop:"0.5%",marginLeft:"0.5%"}} />
      </div>

   
<Paper style={style}>
 
 <Box Width='800px' borderWidth='1px' borderRadius='10px' overflow='hidden'>
      <Grid container spacing={2} style={{alignItems:"center",justifyContent:"center"}}>
  <Grid item xs={2} md={2.7} sm={6} style={{width:"80vw",justifyContent:"center"}}>
  <Courseselection c1="AOOP" c2="DAA" rv="Regular" av="Advanced"  pv="Peermentoring" r="R" a="A"  p="P"/> 
  </Grid>     
  <Grid item xs={2} md={2.7} sm={6} style={{width:"80vw"}}>
  <Courseselection c1="OS" c2="AIDS" rv="Regular" av="disabled" disabled  pv="Peermentoring" r="R" a="A"  p="P"/> 
  </Grid>  
  <Grid item xs={2} md={2.7} sm={6}>
  <Courseselection c1="CNS" c2="SE"rv="Regular" av="Advanced"  pv="Peermentoring" r="R" a="A"  p="P"/> 
  </Grid> 
  <Grid item xs={2} md={2.7} sm={6}>
  <Courseselection c1="DBMS" c2=" "   rv="Regular" av="Advanced"  pv="Peermentoring" r="R" a="A"  p="P"/> 
  </Grid>     
  <Grid item xs={2} md={2.7} sm={6}>
  <Courseselection c1="MSWD" c2="PSFD" rv="Regular" av="Advanced"  pv="Peermentoring" r="R" a="A"  p="P"/> 
  </Grid>  
  <Grid item xs={2} md={2.7} sm={6}>
  <Courseselection c1="MP" c2="PSQT" rv="Regular" av="Advanced"  pv="Peermentoring" r="R" a="A"  p="P"/> 
  </Grid> 
<br/><br></br>
  
  </Grid> 
  <div style={{marginLeft:"40%"}}> 
  <Demo></Demo>
  </div>
  </Box>
</Paper>
    </div>
  )
}

export default ClusterNo;