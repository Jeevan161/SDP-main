import React from 'react'
import Grid from '@mui/material/Grid'
import Item from '@material-ui/core/MenuItem'
import './card.css'
import Button from '@mui/material/Button';
import { Box } from '@chakra-ui/react'
import kllogo from '../assets/kllogo.jpg';
import MotionHoc from "./MotionHoc";
import { useHistory } from 'react-router-dom';
import { SDivider } from '../components/Sidebar/styles';
const Homepage=()=> {
  
  return (
    <div>
      
      <div style={{display:"flex",marginTop:'1%',justifyContent:'normal',height:"2%",alignItems:'center'}}>
      <img src={kllogo} alt="logo" style={{width:"10%",height:"10%",marginLeft:"2%",display:"flex"}} />
      <h1 style={{fontSize:"280%",marginLeft:"25%"}}>STUDENT-PORTAL</h1>
      </div>
      <SDivider style={{marginTop:"0.5%",marginLeft:"0.5%",width:"92%"}} />
     
    <div className='body' >
      
        <Box  borderWidth='1px' borderRadius='10px' overflow='hidden' >
      <Grid container spacing={6} style={{justifyContent:"center",alignItems:"center"}}>
  <Grid item xs={2} md={3} sm={6} style={{width:"70%",justifyContent:"center",alignItems:"center"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}} ><span> Registration</span><i></i></Button></Item>
  </Grid>     
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Attendance</span><i></i></Button></Item>
  </Grid>  
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Courses</span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Payments</span><i></i></Button></Item>
  </Grid>     
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>HallTickets</span><i></i></Button></Item>
  </Grid>  
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Profile</span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Results</span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Ticketing </span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>Time Table</span><i></i></Button></Item>
  </Grid> 
  <Grid item xs={2} md={3} sm={6}style={{width:"70%"}}>
    <Item> <Button className='hh'style={{height:"70px",width:'80%'}}><span>FeedBack</span><i></i></Button></Item>
  </Grid> 
  </Grid> 
  </Box>
     
    
</div>
</div>

  )
}
const Calender = MotionHoc(Homepage);

export default Homepage;