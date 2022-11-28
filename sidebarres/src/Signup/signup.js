import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useRoundInputBaseStyles } from '@mui-treasury/styles/inputBase/round';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useShadeInputBaseStyles } from '@mui-treasury/styles/inputBase/shade';

const Signup = () => {
    const styles1 = useShadeInputBaseStyles();
    const [studName,setName]=useState("");
  const [studEmail,setEmail]=useState("");
  const [studPassword,setPassword]=useState("");
  const [studNumber,setNumber]=useState(0);
  
   console.log(studName); 
 
  const addToList=()=>
  {
    axios.post("/newstud",{studName: studName, studNumber : studNumber,studEmail:studEmail,studPassword:studPassword});
    console.log(studName,studNumber);
  }
    const chubbyStyles = useGradientBtnStyles({ chubby: true });
    const styles = useRoundInputBaseStyles();
    const paperStyle={padding :15,marginLeft:"8%",height:'60vh',width:"30vw",background: 'linear-gradient(68deg, rgba(63,94,251,0.7794468129048494) 0%, rgba(252,70,107,0.5777661406359419) 100%',borderRadius:'10px'}
    const headerStyle = { margin: 0 }
    const avatarStyle={backgroundColor:'#242323',padding:20,background: ' linear-gradient(68deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)'}
    const marginTop = { marginTop: 5 }
    return (
        <div >
        <Grid>
          <Paper  elevation={24} style={paperStyle} sx={{borderRadius:20}} >
                <Grid align='center'>
                     <Avatar style={avatarStyle}sx={{fontSize : 40}}></Avatar>
                       
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <br></br>
                    <InputBase classes={styles1} style={{background:'rgba(255,255,255,0.58)',borderRadius:10}} 
onChange={(event)=>setName(event.target.value)}placeholder='Enter Student Name'fullWidth required/>&nbsp;<br/>
  <Box pb={1} />

<InputBase classes={styles1} style={{background:'rgba(255,255,255,0.58)',borderRadius:10}} 
onChange={(event)=>setNumber(event.target.value)} placeholder='Enter Registration Number' fullWidth required/>&nbsp;<br/>
<InputBase classes={styles1} style={{background:'rgba(255,255,255,0.58)',borderRadius:10}} 
onChange={(event)=>setEmail(event.target.value)}placeholder='Enter Email'fullWidth required/>&nbsp;<br/>
<InputBase classes={styles1} style={{background:'rgba(255,255,255,0.58)',borderRadius:10}} 
onChange={(event)=>setPassword(event.target.value)}placeholder='Enter Password Name' fullWidth required/>&nbsp;<br/>
      <Box pb={1} /><br></br>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    /><br></br>
                    <Button style={{padding :12,background: 'linear-gradient(68deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%'}}type='submit' color='primary' variant="contained"onClick={addToList} classes={chubbyStyles} fullWidth>Sign up </Button>
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signup;