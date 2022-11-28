import { Paper } from '@material-ui/core'
import React from 'react'
import AdbIcon from './Images/kllogo.jpg';
import bglogo from './Images/bglogo.png';
import { Grid, Button, Typography,Link } from '@material-ui/core'
import './Login.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useShadeInputBaseStyles } from '@mui-treasury/styles/inputBase/shade';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

import { useHistory} from 'react-router-dom'

import { useState } from 'react';

function NavBar() {
    const history=useHistory();

   const [emailValue,setEmailValue]= useState('');
   const [passwordValue,setPasswordValue]= useState('');
   
    const style={marginLeft:"-1.5%",width:"70vw",height:"75vh",justifyContent:"center ",borderRadius:"20px", alignItems: 'center',display:'flex',background:'rgba(255,255,255,0.58)',marginTop:'6.5%'};
    const paperStyle={padding :15,marginLeft:"8%",height:'60vh',width:"30vw",background: 'linear-gradient(68deg, rgba(63,94,251,0.7794468129048494) 0%, rgba(252,70,107,0.5777661406359419) 100%',borderRadius:'10px'}
    
    const styles1 = useShadeInputBaseStyles();
    const chubbyStyles = useGradientBtnStyles({ chubby: true });
  return (
    <div className="Login">
        <div1 >
  
        <center>
        
        <Paper style={style}>
        <img src={bglogo} alt="ERP"  style={{width:"25vw",height:"48vh",marginRight:"6%"}}/>
        <Grid>
            <Paper elevation={10} style={paperStyle}sx={{display:'flex'}} >
                <Grid align='center'>
                <img src={AdbIcon}  alt="KLLOGO"style={{width:"12vw",height:"8vh",fontWeight:"600"}} />
                    <p style={{fontWeight:"600",fontSize:"1.5rem",color:"black"}}>Log In</p>
                </Grid>
                <InputBase classes={styles1}value={emailValue} onChange={e=>setEmailValue(e.target.value)} style={{background:'rgba(255,255,255,0.65)',borderRadius:10}} placeholder={'Enter ID'} fullWidth required />
      <Box pb={1} />
      <br></br>
      <InputBase type='password'classes={styles1}value={passwordValue} onChange={e=>setPasswordValue(e.target.value)} style={{background:'rgba(255,255,255,0.65)',borderRadius:10}} placeholder={'Enter Password'} fullWidth required />
      <Box pb={1} />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /><br></br>
                <Button 
                disabled={!emailValue || !passwordValue}classes={chubbyStyles} style={{background:'linear-gradient(191deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%',width:"28vw",height:"6vh",marginBottom:10}} onClick={()=>{
                    history.push("/Home");
                }} >Log in</Button>
                <br></br>
                <Typography >
                    
                        Forgot password ?
              
                </Typography>
                
                <br></br>
                <Typography > Do you have an account ?
                     <Link href="/Registration" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </Paper>
        </center>
        </div1>
    </div>
  )
}

export default NavBar