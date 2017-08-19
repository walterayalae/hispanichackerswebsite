const styles = {
  mainDiv:{
    fontFamily: 'Roboto, sans-serif',
  },
  div: {
    height: '600px',
    background: 'url("https://secure.meetupstatic.com/photos/event/b/7/0/6/highres_458746854.jpeg")',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'block',
  },
  headerP: {
    marginLeft: '800px',
    marginTop: '200px',
    fontSize: '20px',
    position: 'absolute',
  },
  button: {
    marginTop: 40,
    position: 'relative',
    marginRight: 60,
    width: 180,
  },
  afterHomeDiv: {
    background: 'url("https://cdn-images-1.medium.com/max/1600/1*S8KMV4ZWNDsbJGbP83Lo1w.jpeg")',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color:'white',
    height: '600px',

  },
  afterHomeDivOverlay: {
    backgroundSize: 'cover',
    backgroundImage: 'linear-gradient(to bottom right,#002f4b,#dc4225)',
    opacity: .6,
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: 'bold',
    paddingTop: '100px',
    height: '500px',
  },
  midDiv: {
    height: '500px',
  },
  midSecDiv: {
    display: 'inline-block',
    width: '25%',
    textAlign: 'center',
    padding: '60px',
  },
  footer: {
    backgroundColor: '#80ced6',
    height: '400px',
    textAlign: 'center',
  },
};

export default styles;
