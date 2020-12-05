import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../personal/personal.css';

console.log(screen.width);
console.log(screen.height);
const height = screen.height;
const width = screen.width;
//const mT1= (8/1024)*height;
//const mR1= (8/1440)*width;

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    width: `${width}px`,
    height: `${height * 0.885}px`,

    /* Red Primary */
    //overflow: 'hidden' ,
    background: '#EF4646',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  mid: {
    position: 'absolute',
    width: `${(481 * width) / 1440}px`,
    height: `${(452 * height) / 1024}px`,
    left: `${(194 * width) / 1440}px`,
    top: `${(140 * height) / 1024}px`,
    overflow: 'hidden',
    background: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  message: {
    position: 'absolute',
    width: `${(373 * width) / 1440}px`,
    height: `${(56 * height) / 1024}px`,
    left: `${(222 * width) / 1440}px`,
    top: `${(641 * height) / 1024}px`,
    overflow: 'hidden',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: `${(44 * height * width) / (1024 * 1440)}px`,
    lineHeight: `${(48 * height) / 1024}px`,
    textAlign: 'right',

    color: '#FFFDE8',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  scaff2: {
    //position: 'absolute',
    position: 'fixed',
    width: `${(533 * width) / 1440}px`,
    height: `${(910 * height) / 1024}px`,
    // left:  `${907*width/1440}px`,
    //overflow: 'hidden' ,
    top: `${(0 * height) / 1024}px`,
    background: '#FFFDE8',
    border: '0.01px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px 0px 0px 20px',
    right: `${(0 * width) / 1440}px`,
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
    // [`@media (min-height: ${0 *height/960 })px`]: {
    // backgroundColor: 'red',
    // bottom: `${150*height/960}px`,
    //},
  },
  point: {
    position: 'absolute',
    width: `${(153 * width) / 1440}px`,
    height: `${(71 * height) / 1024}px`,
    left: `${(360 * width) / 1440}px`,
    top: `${(30 * height) / 1024}px`,
    opacity: 0.87,
    background: 'rgba(207, 0, 0, 0.77)',
    borderRadius: '15px',
    // overflow: 'hidden' ,
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  joint: {
    position: 'absolute',
    width: `${(459 * width) / 1440}px`,
    height: `${(722 * height) / 1024}px`,
    left: `${(30 * width) / 1440}px`,
    top: `${(69 * height) / 1024}px`,
    // overflow: 'hidden' ,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: `${(32 * height * width) / (1024 * 1440)}px`,
    lineHeight: `${(38 * height) / 1024}px`,
    textAlign: 'right',

    color: '#000000',
    [theme.breakpoints.down('md')]: {
      // backgroundColor: 'red',
    },
  },
  log: {
    position: 'absolute',
    width: `${(376 * width) / 1440}px`,
    height: `${(100 * height) / 1024}px`,
    left: `${(80 * width) / 1440}px`,
    bottom: `${(75 * height) / 1024}px`,
    // overflow: 'hidden' ,
    background: '#FFFFFF',
    border: '0.05px solid #000000',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    //[`@media (min-height: ${0 *height/960 })px`]: {
    // backgroundColor: 'red',
    //bottom: `${150*height/960}px`,
    // },
  },
  inner: {
    minHeight: '100%',
  },
}));

export default function Welcome1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.main} id="main">
        <div className={classes.mid} id="mid"></div>
        <div className={classes.message} id="message">
          Message of Joy
        </div>
        <div className={classes.scaff2} id="scaff2">
          <div className={classes.inner}>
            <div className={classes.point} id="point"></div>
            <div className={classes.joint} id="joint">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam
            </div>
            <div className={classes.log} id="log"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
