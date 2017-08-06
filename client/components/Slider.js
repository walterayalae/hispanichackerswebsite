import React from 'react';
import { Jumbotron,Button, Media, Breadcrumb, Grid, Row, Col, Image, Modal, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

export default class Slider extends React.Component {



  render() {
    const imgstyle = {
      paddingTop:'100px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'

    }

    const jumbotrontext = {
      textAlign:'right',
      fontSize: '16px'
    }

    const textstyle = {
      textAlign:'center',
      fontSize: '20px',
      paddingBottom: '80px'
    }

    const midsectionstyle = {
      textAlign:'center',
      fontSize: '20px',
      paddingTop: '90px'
    }

    const mainimg = {
      backgroundImage: 'url("https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg")',
      paddingBottom: '400px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1000px 600px',
    }

    const footerstyle = {
      backgroundColor:'#80ced6',
      paddingBottom: '300px',
    }
    const footerimg = {
      marginRight:'80px',
      marginTop: '20px'

    }

    const padleft = {
      paddingRight:'100px'
    }

    const padright = {
      paddingLeft: '100px'
    }

    const navstyle ={
      textAlign:'center',
      fontSize: '20px',
      paddingTop: '30px',
      fontWeight: 'bold'
    }

    const h3style = {
      color:'white',
      textAlign: 'center'
    }

    const justifytext = {
      textAlign:'justify'
    }

    return (
      <div>
      <Breadcrumb style={navstyle}>
    <Breadcrumb.Item href="https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/">
      Join Us!
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
      Blog
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      Contact Us
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      Become a Sponsor
    </Breadcrumb.Item>
    <Breadcrumb.Item >
      Our Team
    </Breadcrumb.Item>
  </Breadcrumb>
      <Jumbotron style={mainimg} width={900} height={500}>
    <div style={jumbotrontext}>
    <div style={padleft}>
    <h1>Bienvenidos!</h1>
    <p>Come meet with us,  showcase your accomplishments, <br/> learn  from each other,and get to know your fellow Hispanic <br/>hackers! All skill levels and career stages are welcome. </p>
    <br/>
    <h2> Next Meet Up is July 12</h2>
    <Button bsStyle="info" href='https://www.meetup.com/Austin-Hispanic-Hackers-Meetup/' >RSVP Now</Button>
    </div>
    </div>
  </Jumbotron>
  <div style={textstyle}>
  <h1>Hispanic Hackers</h1>
  <p>This is a group for software and hardware engineers of Hispanic ethnicity to showcase their knowledge and experience,<br/>
  and to build their professional network. If you're not Hispanic, this is a great place to get to know Austin's Hispanic hacker<br/>
  community! Our meetings feature topics in software and hardware technology presented by Austin's Hispanic hackers. </p>
  </div>
  <div>
  <hr width="80%"/>
  <div>
      <Media>
        <Media.Body style={midsectionstyle}>
          <Media.Heading>HELP</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.<br/> Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
        <Media.Right>
          <Image width={650} height={400} style={padleft} src="https://cdn-images-1.medium.com/max/800/1*dotUSNYMU9YDyNogkXx8cw.jpeg" alt="Image" rounded/>
        </Media.Right>
      </Media>

    </div>
<hr width="80%"/>
  <div>
  <Media>
    <Media.Left>
      <Image style={padright} width={650} height={400} src="https://pbs.twimg.com/media/C9QDWqSXsAIUuO1.jpg" alt="Image" rounded/>
    </Media.Left>
    <Media.Body style={midsectionstyle}>
      <Media.Heading>HACK</Media.Heading>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.<br/> Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </Media.Body>
  </Media>
</div>

  <hr width="80%"/>
  <div>
      <Media>
        <Media.Body style={midsectionstyle}>
          <Media.Heading>HIRE</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.<br/> Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
        <Media.Right>
          <Image width={650} height={400} style={padleft} src="http://blndedmedia.com/wp-content/uploads/2017/05/VM-450x300.jpeg" alt="Image" rounded/>
        </Media.Right>
      </Media>

    </div>
</div>
<hr width="80%"/>
<div>
  <Modal.Footer style={footerstyle}>
      <h3 style={h3style}>Our Sponsors</h3>
      <div>
      <Image width={100} height={100} style={footerimg} src="https://pbs.twimg.com/profile_images/785571630235791360/csckoW9l.jpg" alt="Image" circle/>
      <Image width={100} height={100} style={footerimg} src="https://secure.meetupstatic.com/photos/sponsor/6/8/1/6/iab120x90_2666646.jpeg" alt="Image" rounded/>
      <Image width={100} height={100} style={footerimg} src="https://secure.meetupstatic.com/photos/sponsor/6/8/1/b/iab120x90_2666651.jpeg" alt="Image" rounded/>
      <Image width={100} height={100} style={footerimg} src="https://secure.meetupstatic.com/photos/sponsor/5/1/c/f/iab120x90_2660943.jpeg" alt="Image" rounded/>
      <Image width={100} height={100} style={footerimg} src="https://secure.meetupstatic.com/photos/sponsor/8/7/3/6/iab120x90_2554614.jpeg" alt="Image" rounded/>
      <Image width={200} height={90} style={footerimg} src="https://secure.meetupstatic.com/photos/sponsor/9/5/c/0/iab120x90_2678336.jpeg" alt="Image" rounded/>
      <Image width={200} height={90} style={footerimg} src="https://res.cloudinary.com/crunchbase-production/image/upload/v1397183571/a01361198c7c87f4daa07f232e6ac000.jpg" alt="Image" rounded/>
      </div>
         </Modal.Footer>
</div>


      </div>
    );
  }
}
