import React from 'react';
import Badge from 'material-ui/Badge';

const Footer = () => {

  const style={
    footer: {
      backgroundColor: '#80ced6',
      height: '400px',
      textAlign: 'center',
    },
  }

return (
<div style={style.footer}>
<div style={{paddingTop: '20px'}}>
  <a href="https://www.facebook.com/hispanichackers/"  ><i className="fa fa-facebook-official fa-2x" aria-hidden="true" style={{paddingLeft: '15px', color:'white'}}></i></a>
  <a href="https://twitter.com/hispanichackers"  ><i className="fa fa-twitter fa-2x" aria-hidden="true" style={{paddingLeft: '15px', color:'white'}}></i></a>
  <a href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"  ><i className="fa fa-meetup fa-2x" aria-hidden="true" style={{paddingLeft: '15px', color:'white'}}/></a>
</div>
</div>
  );
}

export default Footer;
