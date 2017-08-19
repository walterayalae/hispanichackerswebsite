import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import styles from './style';

const Navigation = () => (
  <AppBar
    title={<Link to="/" style={styles.link}><span style={styles.title}>Austin Hispanic Hackers</span></Link>}
    iconElementRight={<Link to="/Blog" style={styles.link}><FlatButton style={styles.buttonTxt} label="Blog & Recent Events" /></Link>}
    iconElementLeft={<img
      src="https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg"
      width="50"
      height="42"
      style={styles.logo}
      alt="meetup"
    />}
  />

);

export default Navigation;
