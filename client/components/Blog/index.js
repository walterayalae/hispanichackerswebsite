import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="" subtitle="Wednesday December 13th, 2017" />}
      >
        <img style={{ height: 500 }} src="https://frontdoorsmedia.com/wp-content/uploads/2014/08/Splash-hacks.jpg" alt="" />
      </CardMedia>
      <CardText>
         It"s the holiday season and a perfect time to talk about incredible
         Social Good Initiatives in Austin. ATX Hispanic Hackers is excited to
         host a dynamic group of Social Good Change Makers in our community
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup/"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="https://www.meetup.com/es/Austin-Hispanic-Hackers-Meetup/events/244535818/"
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;
