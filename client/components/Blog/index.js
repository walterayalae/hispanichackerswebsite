import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="Latinos in Tech Austin Celebration" subtitle="Thursday September 21, 2017" />}
      >
        <img style={{ height: 500 }} src="https://www.ebsco.com/files/blog/img/uploads/National_Hispanic_Heritage_Month_.png" alt="" />
      </CardMedia>
      <CardText>
         In honor of Hispanic Heritage Month, more than 10 tech companies in
         Austin have come together to unite the Latinos in Tech community.
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/242928848/"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="https://latinosintechseptember.splashthat.com/"
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;
