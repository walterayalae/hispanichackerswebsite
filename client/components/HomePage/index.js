import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { Route, Link } from 'react-router-dom';
import style from './style';

const HomePage = () => {

  return (
    <div style={style.mainDiv}>
    <div style={style.div}>
    <div style={style.headerP}>
    <h1> Welcome to Hispanic Hackers</h1>
     <p>Come meet with us,  showcase your accomplishments, <br/>
      learn  from each other, and get to know your fellow Hispanic <br/>
      hackers! All skill levels and career stages are welcome.
     </p>
     <RaisedButton
      label="Join Us!"
      labelPosition="before"
      primary={true}
      icon={<i className="fa fa-meetup" aria-hidden="true" />}
      style={style.button}
      href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"
     />
     </div>
    </div>
    <div style={style.afterHomeDiv}>
      <div style={style.afterHomeDivOverlay}>

      <h1>Hispanic Hackers</h1>
      <p>This is a group for software and hardware engineers of Hispanic ethnicity to showcase their knowledge and experience,<br/>
      and to build their professional network. If you're not Hispanic, this is a great place to get to know Austin's Hispanic hacker<br/>
      community! Our meetings feature topics in software and hardware technology presented by Austin's Hispanic hackers. </p>

      </div>
    </div><br />
    <div style={style.midDiv}>
    <div style={style.midSecDiv}>
      <h2>Help</h2>
      <i className="fa fa-handshake-o" aria-hidden="true" style={{fontSize:'130px'}}></i>
      <p>Hispanic Hackers helps cultivate diversity in the Tech Community through
      our informative and thought provoking monthly meetups surrounding the topics
      in the Latino Community. Our three core values Help, Hack and Hire provide support and
      connect Latinos accross the Tech Industry in Austin, TX.</p>

    </div>
    <div style={style.midSecDiv}>
    <h2>Hack</h2>
    <i className="fa fa-laptop" aria-hidden="true" style={{fontSize:'130px'}}></i>
    <p>Hispanic Hackers uses technology as a conduit to empower our community.During our Hack series
      we present topics relevant to Hispanics in Tech with a goal to learn from each other and provide
      an environment to share opinions and different point of views.
    </p>
    </div>
    <div style={style.midSecDiv}>
    <h2>Hire</h2>
    <i className="fa fa-users" aria-hidden="true" style={{fontSize:'130px'}}></i>
    <p> Hispanic Hackers serves as a liaison between companies hoping to hire a more diverse workforce and technology
    professionals searching for the next step in their career. Coding Interview Practices and other workforce
    development programs represent some of our leadership in promoting diversity.</p>

    </div>
    </div><br />

    </div>
    );
}

export default HomePage;
