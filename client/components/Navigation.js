import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navigation = () => (
  <AppBar
    title={<span style={styles.title}>Austin Hispanic Hackers</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<FlatButton label="About Us" />}
  />
);

export default Navigation;

// <NavItem eventKey={1} href="#">Join Us!</NavItem>
// <NavItem eventKey={2} href="./Blog">Blog</NavItem>
// <NavItem eventKey={2} href="#">Contact</NavItem>
// <NavItem eventKey={2} href="#">Become a Sponsor</NavItem>
// <NavItem eventKey={2} href="#">Our Team</NavItem>
