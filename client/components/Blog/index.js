import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="Coming Soon!" subtitle="Wednesday October 11, 2017" />}
      >
        <img style={{ height: 500 }} src="https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg" alt="" />
      </CardMedia>
      <CardText>
         COMING SOON!
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/242928848/"
          secondary
          disabled
        />
        <FlatButton
          label="More Info"
          primary
          href="https://latinosintechseptember.splashthat.com/"
          disabled
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;
