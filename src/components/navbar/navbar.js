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
import Grid from '@material-ui/core/Grid';

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


export default ({ navHeading }) => {
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
              <AccountCircleRoundedIcon className={classes.menuButton} />
              <NotificationsActiveIcon className={classes.menuButton} />
              <SearchIcon className={classes.menuButton} />
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