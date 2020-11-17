import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'; 
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Personal from '../personal/personal';
import { IconButton } from '@material-ui/core';
import Notifs from '../Popups/notifs';
import AdminCards from '../admincards/admincards';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "grey",
  },
  title: {
    textAlign: "center",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: "right",
    width: "2rem",
    height: "2rem",
  },
  appBar: {
    zIndex:1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  margin:{
    borderBottom: "3px solid green"
  },
  card: {
    backgroundColor: ' #E7B8B8'
  },
  margi:{
    borderBottom: "3px solid purple"
  },

}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}



export default function Navbar ({ navHeading },props)  {
  const classes = useStyles();
  if (navHeading == null)
    navHeading = "DashBoard";

  return (
    <React.Fragment>


      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Typography variant="h4" edge='start'><b>JoGW</b></Typography>
            </Grid>
            <Grid item xs>
              <Typography className={classes.title} variant="h4"><b>{navHeading}</b></Typography>
            </Grid>
            <Grid item xs alignContent='flex-end'>

            <IconButton className={classes.menuButton}><AccountCircleRoundedIcon /></IconButton>

              {/* <IconButton className={classes.menuButton}><NotificationsActiveIcon  /></IconButton> */}
              <Notifs/>


              <IconButton className={classes.menuButton}><SearchIcon  /></IconButton>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />

      <Box textAlign='center'>
      <Button size="medium" className={classes.margin}>
         <b>Inbox</b> 
        </Button>
        <Button size="medium" className={classes.margin}>
        <b>Sent</b> 
        </Button>
    </Box>

<AdminCards/>
      
     
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      </React.Fragment>
  );
}

