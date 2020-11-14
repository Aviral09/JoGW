import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';


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
    }
  }));


  export default function Personal ({ navHeading },props)  {
    const classes = useStyles();
    if (navHeading == null)
      navHeading = "DashBoard";
  
    return (
<React.Fragment>
<Container>
      
<h1>Welcome Nipun </h1>

</Container>
<Box textAlign='center'>
<h3>Messages</h3>
</Box>

<Container>


      {['Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',  'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add'].map((text, index) => (
        <Card variant="outlined" className={classes.card} key={text}>
  <CardContent>
    <List>
        <ListItem button  key={text} >
          <ListItemIcon></ListItemIcon>

          <ListItemText primary={text} className={classes.margi}/>
        
        </ListItem>
        </List>
    </CardContent>
    </Card>
       
      ))}
    
    </Container>



</React.Fragment>
  );
}
