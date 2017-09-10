import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import addBlog from '../Blog/AddBlog';

const Blog = () => (

  <div><br />
    <Card style={{ width: '750px', height: '650px', textAlign: 'center', marginLeft: '420px' }}>
      <CardMedia
        overlay={<CardTitle title="Austin Diversity Hackathon: Pitch Ideas, Form Teams" subtitle="Wednesday September 13, 2017" />}
      >
        <img style={{ height: 500 }} src="https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/20914558_2005168883036133_7509652378930836727_n.png?oh=82605d72d3bb434e545d808adc73d8b1&oe=5A54E09D" alt="" />
      </CardMedia>
      <CardText>
      Are you a newbie to programming, and looking for a way to learn from other experienced developers?
      Are you an experienced developer looking to build something cool while mentoring newcomers to technology / programming?
      </CardText>
      <CardActions>
        <FlatButton
          label="RSVP"
          href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/events/242928728/"
          secondary
        />
        <FlatButton
          label="More Info"
          primary
          href="https://www.eventbrite.com/e/3rd-austin-diversity-hackathon-sponsored-by-google-fiber-bazaarvoice-at-capital-factory-tickets-36978567892?aff=erelexpmlt"
        />
      </CardActions>
    </Card>
    {addBlog()}
  </div>

);

export default Blog;
