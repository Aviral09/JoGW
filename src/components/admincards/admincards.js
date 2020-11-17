import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({

    margi:{
      borderRadius:'15px',
      backgroundColor: ' #E7B8B8'
    },
  Gin:{
    marginTop:'8px',
    marginRight:'10px',
    whiteSpace:'nowrap',
    overflow:'hidden'
  },
  jojo:{
      margin:'10px'
  },
  jin:{
    marginTop:'8px' 
  }
  }));

export default function AdminCards(){
    const classes = useStyles();
return(
<React.Fragment>

      {['Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',  'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ', 'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add','Whether article spirits new her covered hastily sitting her. Money witty books nor son add'].map((text, index) => (
    <Grid container direction={'column'} className={classes.jojo}> 
         <Container className={classes.margi}>
   <Grid container direction={'row'}   >

   <Grid item xs lg={2} className={classes.Gin}>
              <Typography variant="h6" edge='start'><b>{text}</b></Typography>
</Grid>

<Grid item xs className={classes.jin}>
<Typography variant="h6" ><b>...</b></Typography>
</Grid>
<Grid item xs alignContent='flex-end'>

</Grid>
<IconButton><CheckCircleOutlineIcon></CheckCircleOutlineIcon></IconButton>
    </Grid> 
</Container> 
</Grid>   
              
      ))}
    
</React.Fragment>
)
}


