import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="New Year's Social Mixer" subtitle="Wednesday January 10th, 2018" />}
      >
        <img style={{ height: 500 }} src="http://wylieblanchard.com/wp-content/uploads/Happy-New-Year-2018_Wylie-Blanchard.jpg" alt="" />
      </CardMedia>
      <CardText>
         Let's get the New Year started on the right note by having
         fun and hanging out with the Austin Hispanic Hackers!
         Let's meet and mingle with each other over drinks. It would be great to
         speak with everyone and hear about what great things you will up to in 2018!
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup/events/244535897/"
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;
