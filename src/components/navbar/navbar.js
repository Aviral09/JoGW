import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './navbar.css';
import Grid from '@material-ui/core/Grid'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

     
      <AppBar position="fixed"  className={classes.appBar}>
<Toolbar>
 
      <Grid container   spacing={0}  alignItems='flex-start'>
          <Grid item xs={3} sm={4} md={4} lg={1} spacing={0}  >
                  
                 <div className='joe'>
                  <Typography variant="h4" edge='start'><div className='jay'><b>JoGW</b></div></Typography>
                  </div>
                  </Grid> 
                  <Grid item lg={3}></Grid>
                  <Grid item xs={6} sm={4} md={4} lg={4} spacing={0} >
                      
                  <Typography variant="h4" ><div className='jay'><b>Dashboard</b></div></Typography>
                  
               
                
                 </Grid>


                 <Grid  item xs={3} sm={4} md={4} lg={4} spacing={0} alignContent='flex-end'>
                 <div className='kod'>
                
            
                <div><SearchIcon/></div>
                <div><NotificationsActiveIcon/></div>
                <div><AccountCircleRoundedIcon/></div>
               </div> 
               </Grid>  
              
               
        </Grid>
         
        
       
        </Toolbar>
      </AppBar>


    </div>
  );
}
