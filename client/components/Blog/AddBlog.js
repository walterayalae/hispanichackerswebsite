import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import style from './style';

// Use DB to save data, implement uuid for id property
// create endpoint to fetch data

const blogData = [
  {
    id: 12,
    title: 'How to Start a Succesful Startup',
    date: 'Wednesday January 10th, 2018',
    image: 'http://wylieblanchard.com/wp-content/uploads/Happy-New-Year-2018_Wylie-Blanchard.jpg',
    texto: 'Interested in creating a great Tech Startup but don’t necessarily know how?, ',
    moreInfo: 'More Info',
    moreInfoLink: 'https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup/events/244535897/',
  },
  {
    id: 11,
    title: 'Hacking for Social Good and Change',
    date: 'Wednesday December 13th, 2017',
    image: 'https://frontdoorsmedia.com/wp-content/uploads/2014/08/Splash-hacks.jpg',
    texto: 'It is the holiday season and a perfect time to talk about incredible Social Good Initiatives in Austin. ATX Hispanic Hackers is excited to host a dynamic group of Social Good Change Makers in our community',
    moreInfo: 'More Info',
    moreInfoLink: 'https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup/events/244535818/',
  },
  {
    id: 10,
    title: 'Pushing Back: Austin"s Diverse Startup Community Showcase',
    date: 'Wednesday October 11, 2017',
    image: 'http://austinstartupweek.com/images/getstarted.png',
    texto: 'Diversity and Startups are not always synonymous join us in seeing how Austin is pushing back! We are celebrating Austin"s unique and richly diverse startup community.',
    moreInfo: 'More Info',
    moreInfoLink: 'http://austinstartupweek.com/',
  },
  {
    id: 9,
    title: 'Latinos In Tech Austin Celebration',
    date: 'September 21, 2017',
    image: 'https://www.ebsco.com/files/blog/img/uploads/National_Hispanic_Heritage_Month_.png',
    texto: 'In honor of Hispanic Heritage Month, more than 10 tech companies in Austin have come together to unite the Latinos in Tech community.',
    moreInfo: 'More Info',
    moreInfoLink: 'https://latinosintechseptember.splashthat.com/',
  },
  {
    id: 8,
    title: 'Austin Diversity Hackathon: Pitch Ideas, Form Teams',
    date: 'September 13, 2017',
    image: 'https://cdn-images-1.medium.com/max/2000/1*1l9qS_4zWTwLvS-CpAv4ig.jpeg',
    texto: 'Are you a newbie to programming, and looking for a way to learn from other experienced developers? Are you an experienced developer looking to build something cool while mentoring newcomers to technology / programming?',
    moreInfo: 'More Info',
    moreInfoLink: 'https://www.eventbrite.com/e/3rd-austin-diversity-hackathon-sponsored-by-google-fiber-bazaarvoice-at-capital-factory-tickets-36978567892?aff=erelexpmlt',
  },
  {
    id: 7,
    title: 'Fireside Chat: Women Of Color In Tech',
    date: 'August 9th 2017',
    image: 'https://pbs.twimg.com/media/DG6UbjeVYAAZ_Y7.jpg:large',
    texto: "August is Women's month at Capital Factory. To celebrate, we will be hosting a fireside chat with women of color who are doing great things in tech and in Austin.",
    moreInfo: 'More Info',
    rsvp: 'RSVP',
    rsvpLink: 'https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/',
    moreInfoLink: 'https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/242011678/',
  },
  {
    id: 6,
    title: 'Coding Interview Practice',
    date: 'July 12th 2017',
    image: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAm0AAAAJDIwNDJkNGY2LTUyYzQtNGNhZS1hYTQxLWNjN2E2YThlMGI3Nw.jpg',
    texto: 'The Austin Hispanic Hackers are here to help you overcome the butterfliesin your stomach! The best way to ace these interviews is to be cool,confident, and above all: PRACTICE, PRACTICE, PRACTICE!!!',
    moreInfo: 'More Info',
    moreInfoLink: 'https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/241122037/',
  },
  {
    id: 5,
    title: 'Technology Choices for Startups',
    date: 'June 14th 2017',
    image: 'http://blndedmedia.com/wp-content/uploads/2017/05/VM-450x300.jpeg',
    texto: 'When you build a startup, you come face to face with the challenge of building something out of nothing. This craziness is somehow great fun and a huge struggle all at the same time!',
    moreInfo: 'More Info',
    moreInfoLink: 'https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/240411432/',
  },
  {
    id: 4,
    title: 'Paul O"Brien- How to Pitch to Investors + YOU GET TO PITCH!!',
    date: 'May 10th 2017',
    image: 'http://blndedmedia.com/wp-content/uploads/2017/05/Pchat-450x300.jpeg',
    texto: 'Are you trying to get your tech business going? Are you curious about what it takes to craft a successful pitch? If so, you definitely don’t want to miss the next Hispanic Hackers',
    moreInfo: 'More Info',
    moreInfoLink: 'https://medium.com/@blnded/fundamentals-to-use-when-pitching-investors-18f60169aebc',
  },
  {
    id: 3,
    title: 'Coding Interview Practice (sponsored by HomeAway!)',
    date: 'April 12th 2017',
    image: 'https://cdn-images-1.medium.com/max/2000/1*nVQtsq2UX-fFEtBmPJWoaA.jpeg',
    texto: 'The whiteboard coding interview is often the typical rite of passage most developers have to overcome to land that nice job.',
    moreInfo: 'More Info',
    moreInfoLink: 'https://medium.com/@blnded/preparing-for-the-coding-interview-48f540b92878',
  },
  {
    id: 2,
    title: 'SXSW Startup Crawl',
    date: 'March 13th 2017',
    image: 'http://techzette.com/wp-content/uploads/2013/10/edited-3174.jpg',
    texto: '  The Austin Hispanic Hackers will have a spot at one of the biggest parties in town! Come out and join 12,000+ people as the Austin tech startup scene takes over downtown!',
    moreInfo: 'More Info',
    moreInfoLink: 'https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/238071261/',
  },
  {
    id: 1,
    title: 'SXSW Fogata: Entrepreneur Mixer with Casa Mexico',
    date: 'March 11th 2017',
    image: 'http://www.elinkstoday.com/wp-content/uploads/2016/03/12246911_932287363491960_6685810832235407268_n.jpg',
    texto: 'No SXSW badge? No Problem! Looking to hang out with a smart and connected group of people during SXSW? We"ve got you covered!',
    moreInfo: 'More Info',
    moreInfoLink: 'http://casamexicosxsw.com/',
  },
];

const addBlog = () => {
  const result = blogData.map(data => (

    <div style={style.midSecDiv}>
      <Card style={{ width: '400px', height: '415px', textAlign: 'center', display: 'table' }} key={data.id}>
        <CardMedia
          overlay={<CardTitle title={data.title} subtitle={data.date} />}
        >
          <img src={data.image} style={style.image} alt="" />
        </CardMedia>
        <CardText>
          {data.texto}
        </CardText>
        <CardActions>
          <FlatButton
            label={data.moreInfo}
            primary
            href={data.moreInfoLink}
          />
        </CardActions>
      </Card>
    </div>
  ),
  );
  return result;
};
export default addBlog;

// <Card style={{width: '800px', height: '650px', textAlign:'center', marginLeft:'380px'}}>
// <CardMedia
// overlay={<CardTitle title="Fireside Chat: Women Of Color In Tech" subtitle="August 9th 2017" />}
// >
// <img src="https://icdn2.digitaltrends.com/image/eniac-women.jpg" alt="" />
// </CardMedia>
// <CardText>
// August is Women"s month at Capital Factory. To celebrate,
// we will be hosting a fireside chat with women of color who
// are doing great things in tech and in Austin.
// </CardText>
// <CardActions>
// <FlatButton
// label="RSVP"
// href= "https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"
// secondary= {true}
// />
// <FlatButton
// label="More Info"
// primary= {true}
// href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/242011678/"
// />
// </CardActions>
// </Card>
