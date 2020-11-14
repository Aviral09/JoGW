import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './navbar.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex:1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
})/*((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))*/);


/*const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);*/



function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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



export default function Navbar(props) {
  const classes = useStyles();
 



  return (
    <React.Fragment>


<CssBaseline />
      <AppBar position="fixed"  className={classes.appBar}>
<Toolbar >
 
      <Grid container   spacing={0}  >
          <Grid item xs={3} sm={4} md={4} lg={1} spacing={0}  >
                  
                 <div className='joe'>
                  <Typography variant="h4" edge='start'><div className='jay'><b>JoGW</b></div></Typography>
                  </div>
                  </Grid> 
                  <Grid item lg={4}></Grid>
                  <Grid item xs={6} sm={4} md={4} lg={3} spacing={0} >
                      
                  <Typography variant="h4" ><div className='jay'><b>DashBoard</b></div></Typography>
                  
               
                
                 </Grid>


                 <Grid  item xs={3} sm={4} md={4} lg={4} spacing={0} >
                 <div className='kod'>
                
                 
                 <IconButton >  <div><SearchIcon/></div></IconButton> 



                 <IconButton  ><div><NotificationsActiveIcon/></div></IconButton> 
                 <IconButton ><div><AccountCircleRoundedIcon/></div></IconButton> 
               </div> 
                  

               </Grid>  
              
               
        </Grid>
         
       
       
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
      <h1>Welcome Nipun </h1>
      </Container>
      <Container>
        <Box my={2}>
          {[...new Array(30)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>


   
    </React.Fragment>
   
  );
}


//onClick={()=>setOpen(!open)}>
/*<StyledMenu
id="customized-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
>
<StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
      </StyledMenu>*/



      /*      <main  className={classes.content}>
        <div className='zoho'>
        <AccountBoxIcon className='puff'/>
          
           <div className='teal'><b> Binod Tharu </b><br></br>f201X0XXX@goa.bits-pilani.ac.in</div>
          
        </div>  
       
       </main>
       
       
       
         const [anchorEl, setAnchorEl] = React.useState(null);

 

  const handleClose = () => {
    setAnchorEl(null);
  };
       */