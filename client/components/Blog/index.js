import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="Pushing Back: Austin's Diverse Startup Community Showcase" subtitle="Wednesday October 11, 2017" />}
      >
        <img style={{ height: 500 }} src="http://austinstartupweek.com/images/getstarted.png" alt="" />
      </CardMedia>
      <CardText>
         Diversity and Startups are not always synonymous,
         join us in seeing how Austin is pushing back! We are
         celebrating Austin's unique and richly diverse startup community.
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/243895362/"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="http://austinstartupweek.com/"
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;
