import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
//import {userQuery, QueryCache}

//const hello = <>
//		  <h1>HELLO WORLD !!</h1>
//		  <button onClick={() => alert('Heya')}>Click Me</button>
//	      </>;

ReactDOM.render(
    <>
	<App />
    </>,
    document.querySelector('#root')
);
