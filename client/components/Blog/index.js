import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="SXSW Fogata: Austria, Austin, and Mexico Entrepreneurs Mixer!!" subtitle="Sunday March 11th, 2018" />}
      >
        <img style={{ height: 500 }} src="https://pbs.twimg.com/profile_images/708386879188504576/gBTTafCu_400x400.jpg" alt="" />
      </CardMedia>
      <CardText>
        Do not miss the coolest gathering of entrepreneurs during the SXSW season!
        In collaboration with
        Casa Mexico and the Office of Science and Technology of Austria,
        we are excited to announce our annual Fogata gathering!
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/248214463/"
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;


// <div><br />
//   <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
//     <CardMedia
//       overlay={<CardTitle title="Coming Soon" subtitle="Wednesday February 14th, 2018" />}
//     >
//       <img style={{ height: 500 }} src="https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg" alt="" />
//     </CardMedia>
//     <CardText>
//        Coming Soon!
//     </CardText>
//     <CardActions>
//       <FlatButton
//         label="RSVP"
//         href="https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup"
//         secondary
//         disabled
//       />
//       <FlatButton
//         label="More Info"
//         primary
//         href="https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup/events/244535897/"
//         disabled
//       />
//     </CardActions>
//   </Card>
//   {addBlog()}
// </div>
