import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Fade,
  Modal,
  Backdrop,
  InputBase,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      background: '#00CF53',
      color: 'white',
      borderRadius: '25px',
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      textTransform: 'none',
      '&:hover': {
        background: '#00CF53',
        color: 'white',
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      color: '#ffffff',
      outline: 'none',
      width: '100%',
      maxWidth: '45%',
    },
    heading: {
      width: '100%',
      display: 'flex',
      padding: '0rem 1rem 0rem 1rem',
      alignItems: 'center',
      background: '#EF4646',
    },
    close: {
      color: '#000',
      fontSize: '32px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    modalBody: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.2rem 1rem 0.8rem 1rem',
      background: '#FFD94D',
    },
    search: {
      width: '100%',
      borderRadius: '10px',
      background: '#FFFDE8',
      margin: '0.2rem 0rem 0.2rem 0rem',
    },
    searchResults: {
      width: '100%',
      borderRadius: '10px',
      background: '#FFFDE8',
      margin: '0.2rem 0rem 0.2rem 0rem',
    },
    resultItemName: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    name: {
      fontWeight: '800',
    },
    bitsId: {
      fontSize: '0.9rem',
    },
  })
);

const searchResultsData = [
  {
    id: 0,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
  {
    id: 1,
    name: 'Nipun Gupta',
    bitsId: '2019B4PS1111G',
  },
  {
    id: 2,
    name: 'Rohit Mundada',
    bitsId: '2019A3PS0343G',
  },
  {
    id: 3,
    name: 'Vedant Bang',
    bitsId: '2019AAPS0251G',
  },
  {
    id: 4,
    name: 'Taarush Bhatia',
    bitsId: '2019A7PS0159G',
  },
  {
    id: 5,
    name: 'Himanshu Jain',
    bitsId: '2019A3PS0432G',
  },
];

const NamesList = ({ searchedData, data }) => {
  const classes = useStyles();
  return (
    <List>
      {!searchedData
        ? data.map((result, index) => {
            return (
              <ListItem button key={index}>
                <ListItemAvatar>
                  <Avatar alt={result.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <div className={classes.resultItemName}>
                  <Typography className={classes.name}>
                    {result.name}
                  </Typography>
                  <Typography className={classes.bitsId}>
                    {result.bitsId}
                  </Typography>
                </div>
              </ListItem>
            );
          })
        : searchedData.map((result, index) => {
            return (
              <ListItem button key={index}>
                <ListItemAvatar>
                  <Avatar alt={result.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <div className={classes.resultItemName}>
                  <Typography className={classes.name}>
                    {result.name}
                  </Typography>
                  <Typography className={classes.bitsId}>
                    {result.bitsId}
                  </Typography>
                </div>
              </ListItem>
            );
          })}
    </List>
  );
};

const AssignCoreMembersPopup = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    setSearchResults(searchResultsData);
  }, [searchResults, setSearchResults]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filterSearch = () => {
    const names = searchResults.map((a) => a.name);
    if (searchTerm) {
      const searchedName = names.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return searchResults.filter((result) =>
        searchedName.includes(result.name)
      );
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        size="large"
        onClick={handleOpen}
      >
        Assign
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.heading}>
              <CloseIcon onClick={handleClose} className={classes.close} />
              <h3 style={{ paddingLeft: '2rem' }}>Assign Core Members</h3>
            </div>
            <div className={classes.modalBody}>
              <Paper component="form" className={classes.search}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search for Core Member"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Paper>
              <Paper className={classes.searchResults}>
                <NamesList searchedData={filterSearch()} data={searchResults} />
              </Paper>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default AssignCoreMembersPopup;
