import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Route, Link } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
    color:'white',
  },
  buttonTxt: {
    color:'white'
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navigation = () => (
  <AppBar
    title={<Link to="/" style={{textDecoration:'none'}}><span style={styles.title}>Austin Hispanic Hackers</span></Link>}
    iconElementRight={<Link to="/Blog" style={{textDecoration:'none'}}><FlatButton style={styles.buttonTxt} label="Blog & Recent Events" /></Link>}
    iconElementLeft={<img
                      src="https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg"
                      width="50" height="42"
                      style={{backgroundColor: 'white'}}
                     />}
  />

);

export default Navigation;
