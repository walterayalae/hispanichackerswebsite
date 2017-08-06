import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Navigation from './Navigation';



export default class HomePage extends React.Component {

render (){
  const style = {
    div: {
      height: '600px',
      background: 'url("https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg")',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'block',
    },
    headerP: {
      marginLeft: '800px',
      marginTop: '200px',
      fontSize: '20px',
      position: 'absolute',
    },
    button: {
      marginTop: 40,
      position: 'relative',
      marginRight: 60,
      width: 180,
    },
    afterHomeDiv: {
      background: 'url("https://cdn-images-1.medium.com/max/1600/1*S8KMV4ZWNDsbJGbP83Lo1w.jpeg")',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color:'white',
      height: '600px',

    },
    afterHomeDivOverlay: {
      backgroundSize: 'cover',
      backgroundImage: 'linear-gradient(to bottom right,#002f4b,#dc4225)',
      opacity: .6,
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: 'bold',
      paddingTop: '100px',
      height: '500px',
    },
    midDiv: {
      height: '500px',
    },
    midSecDiv: {
      display: 'inline-block',
      width: '25%',
      textAlign: 'center',
      padding: '60px',
    },
    footer: {
      backgroundColor: '#80ced6',
      height: '400px',
    },
  };
  return (
    <div>
    <Navigation />
    <div style={style.div}>
    <div style={style.headerP}>
    <h1> Welcome to Hispanic Hackers</h1>
     <p>Come meet with us,  showcase your accomplishments, <br/>
      learn  from each other, and get to know your fellow Hispanic <br/>
      hackers! All skill levels and career stages are welcome.
     </p>
     <RaisedButton
      label={<strong>Join Us!</strong>}
      labelPosition="before"
      primary={true}
      icon={<i className="fa fa-meetup" aria-hidden="true" />}
      style={style.button}
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
      <i className="fa fa-handshake-o" aria-hidden="true" style={{fontSize:'130'}}></i>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
       Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
      vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

    </div>
    <div style={style.midSecDiv}>
    <h2>Hack</h2>
    <i className="fa fa-laptop" aria-hidden="true" style={{fontSize:'130'}}></i>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
    vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
    <div style={style.midSecDiv}>
    <h2>Hire</h2>
    <i className="fa fa-users" aria-hidden="true" style={{fontSize:'130'}}></i>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
     Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
    vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

    </div>
    </div><br />
    <div style={style.footer}>
      <p> FOOTER</p>


    </div>
    </div>
    );
  }
}
