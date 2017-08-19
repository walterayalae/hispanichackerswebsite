import React from 'react';
import style from './style';

// TO DO: Add sponsor logos

const Footer = () => {

  return (
    <div style={style.footer}>
      <div style={style.divStyle}>
        <a href="https://www.facebook.com/hispanichackers/"><i className="fa fa-facebook-official fa-2x" aria-hidden="true" style={style.facebook} /></a>
        <a href="https://twitter.com/hispanichackers"><i className="fa fa-twitter fa-2x" aria-hidden="true" style={style.twitter} /></a>
        <a href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"><i className="fa fa-meetup fa-2x" aria-hidden="true" style={style.twitter} /></a>
      </div>
    </div>
  );
};

export default Footer;
