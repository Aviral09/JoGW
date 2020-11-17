import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Navbar from "../navbar/navbar";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    appBar: {
      backgroundColor: "grey",
      zIndex:1,
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
    Gin:{
      marginTop:'8px',
      marginRight:'10px',
      whiteSpace:'nowrap',
      overflow:'hidden'
    },
    margi:{
      border: "3px solid black",
      backgroundColor: ' grey'
    }
}));


export default function Personal (props)  {
  const classes = useStyles();
  var det=['Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add'];
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
  return (
    <React.Fragment>
      {/*Nav bar*/}
      <Navbar navHeading="Dashboard"/>
      {/*Inbox and sent buttons*/}
      <Box textAlign='center'>
        <Button size="medium" className={classes.margin}>
          <b>Inbox</b> 
        </Button>
        <Button size="medium" className={classes.margin}>
          <b>Sent</b> 
        </Button>
      </Box>
      {/*Welcome message and heading*/}
      <Container>
        <h1>Welcome Nipun </h1>
      </Container>
      <Box textAlign='center'>
        <h3>Messages</h3>
      </Box>


      {/*Container to show all messages*/}


      {det.slice(0,50).map((text, index) => (
    <Grid container direction={'column'} > 
         <Container className={classes.margi} >
   <Grid container direction={'row'}   >
   <Grid item xs className={classes.jin}>
   <IconButton  ><ArrowForwardIcon ></ArrowForwardIcon ></IconButton>

</Grid>
<Grid item xs ><Typography variant="h6" p={1} ><b><IconButton>Subject</IconButton></b></Typography></Grid>

<Grid item xs alignContent='flex-end'>

</Grid>
<Grid item xs lg={2} className={classes.Gin}>
              <Typography variant="h6" edge='start'><b>{text}</b></Typography>
</Grid>

    </Grid> 
</Container> 
</Grid>   
              
      ))}

      {/*Scroll to top FAB*/}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
