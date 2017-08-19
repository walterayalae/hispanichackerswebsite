import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import BrowserHistory from 'react-router';
import Routes from './Routes';
import Navigation from './Navigation';
import Footer from './Footer';


export default class Main extends React.Component {

  render() {
    const defaultTheme = {
      fontFamily: 'Roboto, sans-serif',
      palette: {
        primary1Color: '#00CED1',
        primary2Color: '#e67e22',
        primary3Color: 'white',
        accent1Color: '#ff7855',
        accent2Color: '#ED2B2B',
        accent3Color: '#F58C8C',
      },
    };
    // Function required by material-UI to apply theme to app
    const muiTheme = getMuiTheme(defaultTheme);

    return (
      <Router history={BrowserHistory}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Navigation />
            <Routes />
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>

    );
  }
}
