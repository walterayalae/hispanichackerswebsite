import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="How to Start a Succesful Startup" subtitle="Wednesday January 10th, 2018" />}
      >
        <img style={{ height: 500 }} src="http://wylieblanchard.com/wp-content/uploads/Happy-New-Year-2018_Wylie-Blanchard.jpg" alt="" />
      </CardMedia>
      <CardText>
         Interested in creating a great Tech Startup but don’t necessarily know how?
         Have questions on how to get started, building your team, financing, marketing,
         Intellectual Property and more? Join us in a discussion with an extensive Question
         and Answer session to help answer these and other questions! Bring your questions,
         this is a soup to nuts discussion based in extensive hands on practical experience;
         we expect to go in-depth.
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
