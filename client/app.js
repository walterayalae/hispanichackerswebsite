import React from 'react'
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');
import Main from './components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



ReactDOM.render((

    <Main />

), document.getElementById('app'))
