import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class Slider extends React.Component {



  render() {
    const imgstyle = {
      paddingTop:'100px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'

    }

    const textstyle = {
      textAlign:'center'
    }
    return (
      <div>
      <Carousel >
        <Carousel.Item >
          <img width={500} height={100}  style={imgstyle} alt="200x500" src="https://secure.meetupstatic.com/photos/event/b/7/0/6/global_458746854.jpeg"/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} style={imgstyle} alt="900x500" src="https://cdn-images-1.medium.com/max/2000/1*nVQtsq2UX-fFEtBmPJWoaA.jpeg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} style={imgstyle} alt="900x500" src="https://cdn-images-1.medium.com/max/800/1*dotUSNYMU9YDyNogkXx8cw.jpeg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 style={textstyle}>Hispanic Hackers</h1>
      <h3 style={textstyle}>Come meet with us, showcase your accomplishments, learn from each other, and get to know your fellow Hispanic hackers! <br/>All skill levels and career stages are welcome.</h3>
      </div>
    );
  }
}
