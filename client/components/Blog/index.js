import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="Coding Interview Practice" subtitle="Wednesday, April 11, 2018" />}
      >
        <img style={{ height: 500 }} src="https://cdn-images-1.medium.com/max/1600/1*hQiATpJ1fA8IwK2qbNMVkQ.jpeg" alt="" />
      </CardMedia>
      <CardText>
        The Austin Hispanic Hackers are here to help you overcome the butterflies in your stomach!
        The best way to ace these interviews is to be cool, confident, and above all:
        PRACTICE, PRACTICE, PRACTICE!!!
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/249204249/"
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
