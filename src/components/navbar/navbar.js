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
}));

export default ({ navHeading }) => {
  const classes = useStyles();
  if (navHeading == null)
    navHeading = "DashBoard";

  return (
    <div className={classes.root}>

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

    </div>
  );
}
