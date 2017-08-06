import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Blog extends React.Component {

  render() {
    const style= {
      midDiv: {
        height: '500px',

      },
      midSecDiv: {
        display: 'inline-block',
        width: '25%',
        textAlign: 'center',
        padding: '60px',
      },
    };

    return (
  <div><br />
    <Card style={{width: '800px', height: '650px', textAlign:'center', marginLeft:'380px'}}>
    <CardMedia
      overlay={<CardTitle title="Fireside Chat: Women Of Color In Tech" subtitle="August 9th 2017" />}
    >
      <img src="https://icdn2.digitaltrends.com/image/eniac-women.jpg" alt="" />
    </CardMedia>
    <CardText>
      August is Women's month at Capital Factory. To celebrate,
      we will be hosting a fireside chat with women of color who
      are doing great things in tech and in Austin.
    </CardText>
    <CardActions>
      <FlatButton
        label="RSVP"
        href= "https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"
        secondary= {true}
      />
      <FlatButton
        label="More Info"
        primary= {true}
        href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/242011678/"
      />
    </CardActions>
  </Card>
  <div style={style.midDiv}>
  <div style={style.midSecDiv}>
  <Card style={{width: '400px', height: '415px', textAlign:'center'}}>
  <CardMedia
    overlay={<CardTitle title="Coding Interview Practice" subtitle="July 12th 2017" />}
  >
    <img src="https://cdn-images-1.medium.com/max/2000/1*nVQtsq2UX-fFEtBmPJWoaA.jpeg" alt="" />
  </CardMedia>
  <CardText>
  The Austin Hispanic Hackers are here to help you overcome the butterflies
  in your stomach! The best way to ace these interviews is to be cool.
  confident, and above all: PRACTICE, PRACTICE, PRACTICE!!!
  </CardText>
  <CardActions>

    <FlatButton
      label="More Info"
      primary= {true}
      href="https://medium.com/@blnded/preparing-for-the-coding-interview-48f540b92878"
    />
  </CardActions>
</Card>

  </div>
  <div style={style.midSecDiv}>
  <Card style={{width: '400px', height: '415px', textAlign:'center'}}>
  <CardMedia
    overlay={<CardTitle title="Technology Choices for Startups" subtitle="June 14th 2017" />}
  >
    <img src="http://blndedmedia.com/wp-content/uploads/2017/05/VM-450x300.jpeg" alt="" />

  </CardMedia>
  <CardText>
    When you build a startup, you come face to face with the challenge of building
    something out of nothing. This craziness is somehow great fun and a huge struggle
    all at the same time!
  </CardText>
  <CardActions>

    <FlatButton
      label="More Info"
      primary= {true}
      href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/240411432/"
    />
  </CardActions>
</Card>


  </div>
  <div style={style.midSecDiv}>
  <Card style={{width: '400px', height: '415px', textAlign:'center'}}>
  <CardMedia
    overlay={<CardTitle title="Paul O'Brien- How to Pitch to Investors + YOU GET TO PITCH!!" subtitle="May 10th 2017" />}
  >
    <img src="http://blndedmedia.com/wp-content/uploads/2017/05/Pchat-450x300.jpeg" alt="" />
  </CardMedia>
  <CardText>
    Are you trying to get your tech business going? Are you curious about what it takes
    to craft a successful pitch? If so, you definitely don’t want to miss the next Hispanic Hackers
  </CardText>
  <CardActions>
    <FlatButton
      label="More Info"
      primary= {true}
      href="https://medium.com/@blnded/fundamentals-to-use-when-pitching-investors-18f60169aebc"
    />
  </CardActions>
</Card>

  </div>
  </div><br />

  <div style={style.midSecDiv}>
  <Card style={{width: '400px', height: '415px', textAlign:'center'}}>
  <CardMedia
    overlay={<CardTitle title="Coding Interview Practice (sponsored by HomeAway!)" subtitle="April 12th 2017" />}
  >
    <img src="https://cdn-images-1.medium.com/max/1600/1*DCaBsYlgZhRSytlr4AgkCQ.jpeg" alt="" />
  </CardMedia>
  <CardText>
    The whiteboard coding interview is often the typical rite of passage most developers have to overcome to land that nice job.
  </CardText>
  <CardActions>
    <FlatButton
      label="More Info"
      primary= {true}
      href="https://medium.com/@blnded/fundamentals-to-use-when-pitching-investors-18f60169aebc"
    />
  </CardActions>
</Card>

  </div>
  <div style={style.midSecDiv}>
  <Card style={{width: '400px', height: '415px', textAlign:'center'}}>
  <CardMedia
    overlay={<CardTitle title="SXSW Startup Crawl" subtitle="March 13th 2017" />}
  >
    <img src="http://techzette.com/wp-content/uploads/2013/10/edited-3174.jpg" alt="" />
  </CardMedia>
  <CardText>
    The Austin Hispanic Hackers will have a spot at one of the biggest parties in town!
    Come out and join 12,000+ people as the Austin tech startup scene takes over downtown!
  </CardText>
  <CardActions>
    <FlatButton
      label="More Info"
      primary= {true}
      href="https://medium.com/@blnded/fundamentals-to-use-when-pitching-investors-18f60169aebc"
    />
  </CardActions>
</Card>

  </div>
  <div style={style.midSecDiv}>
  <Card style={{width: '400px', height: '415px', textAlign:'center'}}>
  <CardMedia
    overlay={<CardTitle title="SXSW Fogata: Entrepreneur Mixer with Casa Mexico" subtitle="March 11th 2017" />}
  >
    <img src="http://www.elinkstoday.com/wp-content/uploads/2016/03/12246911_932287363491960_6685810832235407268_n.jpg" alt="" />
  </CardMedia>
  <CardText>
  No SXSW badge? No Problem!
  Looking to hang out with a smart and connected group of people during SXSW?
  We've got you covered!
  </CardText>
  <CardActions>
    <FlatButton
      label="More Info"
      primary= {true}
      href="https://medium.com/@blnded/fundamentals-to-use-when-pitching-investors-18f60169aebc"
    />
  </CardActions>
</Card>

  </div>
  </div>


    );
  }
}
