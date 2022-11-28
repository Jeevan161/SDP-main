import { Paper } from '@material-ui/core'
import React from 'react'
import AdbIcon from './Images/kllogo.jpg';
import bglogo from './Images/bglogo.png';
import { Grid, Button, Typography,Link } from '@material-ui/core'
import './Login.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Signup from './Signup/signup';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useShadeInputBaseStyles } from '@mui-treasury/styles/inputBase/shade';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

import { useHistory} from 'react-router-dom'



function NavBar() {
    let history=useHistory();

   
   
    const style={width:"170%",marginLeft:"-35%",height:"750px",justifyContent:"center ",borderRadius:"20px", alignItems: 'center',display:'flex',background:'rgba(255,255,255,0.58)',marginTop:'10%'};
    const paperStyle={padding :20,height:'500px',width:480,marginLeft:150,background: 'linear-gradient(68deg, rgba(63,94,251,0.7794468129048494) 0%, rgba(252,70,107,0.5777661406359419) 100%',borderRadius:'10px'}
    
    const styles1 = useShadeInputBaseStyles();
    const chubbyStyles = useGradientBtnStyles({ chubby: true });
  return (
    <div className="Login">

  
        <center>
        
        <Paper style={style}>
        <img src={bglogo} alt="ERP"  style={{width:"420px",height:"500"}}/>
        <Grid style={{marginLeft:"15%"}}>
            <Signup/>
        </Grid>
        </Paper>
        </center>
        
    </div>
  )
}

export default NavBar