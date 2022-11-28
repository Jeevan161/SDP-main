import React from 'react'
import { Paper } from '@mui/material'
import kllogo from '../kllogo.jpg';
import { SDivider } from '../../components/Sidebar/styles';
import MotionHoc from "./../MotionHoc";

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Item from '@material-ui/core/MenuItem';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom'
import Header from './../Header';
const style={maxWidth:"90vw",height:"80vh",borderRadius:"20px", alignItems: 'center',display:'flex',background:'rgba(255,255,255,0.28)',marginLeft:"5%",marginRight:"8%"};
const Cluster =() =>{
  let history=useHistory();
  
  return (
    <div>
      <div><div style={{display:"flex",marginTop:'1%',justifyContent:'normal',height:"2%",alignItems:'center'}}>
      <img src={kllogo} alt="logo" style={{width:"10%",height:"10%",marginLeft:"2%",display:"flex"}} />
      <h1 style={{fontSize:"280%",marginLeft:"25%"}}>STUDENT-PORTAL</h1>
      </div>
  
      <SDivider style={{marginTop:"0.5%",marginLeft:"0.5%",width:"92%"}} />
      </div>

      {/* <div className='body' >
      
      <Box maxW='900px' borderWidth='1px' borderRadius='10px' overflow='hidden'>
      <Grid container spacing={8} style={{alignItems:"center",justifyContent:"center"}}>
      <Grid item xs={2} md={3} sm={6} style={{width:"80%"}}>
    <Item><Paper></Paper></Item>
  </Grid> 
      </Grid>
</Box>
   
  
</div> */}
<Paper style={style}>
  <Paper elevation={24} style={{width:"90vw",height:"65vh",marginLeft:"8.5%",marginRight:"8.5%",justifyContent:"center",alignItems:"center",marginTop:"10%",marginBottom:"10%",borderRadius:"20px",background:'linear-gradient(155deg, rgba(166,69,252,0.10157566444546573) 52%, rgba(253,29,211,0.1183823871345413) 91%)'}}>
 <Box maxW='1000px' borderWidth='1px' borderRadius='10px' overflow='hidden' style={{justifyContent:"center",alignItems:"center",}}>
      <Grid container spacing={8} >
  <Grid item xs={12} md={12} sm={6} style={{width:"80%"}}>
    <Item style={{justifyContent:"center"}}>  <h1 style={{fontSize:"2vw",marginTop:"2.5%",color:'#383838',alignSelf:"center"}} >COURSE REGISTRATION</h1><br></br>
    </Item>
  </Grid>  
  <SDivider style={{marginLeft:"8.5%",marginRight:"1.5%"}}/>   
  <Grid item xs={12} md={12} sm={6} style={{width:"80%",paddingTop:"25px"}}>
    <Item style={{justifyContent:"center"}}>  <h1 style={{fontSize:"1.8vw",color:'#383838'}}>SELECT CLUSTER</h1><br></br>
    </Item>
  </Grid>  
  <Grid item xs={2} md={3} sm={6}>
    <Item > <Button className='hh'style={{height:"60px",color:"black"}} onClick={()=>{history.push('/courses');}}><span>Cluster 1</span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}>
    <Item > <Button className='hh'style={{height:"60px",color:"black"}}onClick={()=>{history.push('/courses');}}><span>Cluster 2</span><i></i></Button></Item>
  </Grid>     
  <Grid item xs={2} md={3} sm={6}>
    <Item > <Button className='hh'style={{height:"60px",color:"black"}}onClick={()=>{history.push('/courses');}}><span>Cluster 3</span><i></i></Button></Item>
  </Grid>  
  <Grid item xs={2} md={3} sm={6}>
    <Item > <Button className='hh'style={{height:"60px",color:"black"}}onClick={()=>{history.push('/courses');}}><span>Cluster 4</span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}>
    <Item > <Button className='hh'style={{height:"60px",color:"black"}}onClick={()=>{history.push('/courses');}}><span>Cluster 5</span><i></i></Button></Item>
  </Grid> 
 
 
  </Grid> 
  </Box> 
  </Paper>
</Paper>
    </div>
  )
}
const Clusters = MotionHoc(Cluster);

export default Clusters