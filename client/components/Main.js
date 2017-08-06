import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomePage from './HomePage';



export default class Main extends React.Component {

  render() {
    const defaultTheme = {
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
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <HomePage />
      </MuiThemeProvider>
     </div>

    );
  }
}
