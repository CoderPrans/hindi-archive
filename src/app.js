import React, {useState} from 'react';
//import Navbar from './components/navbar.js'
import Home from './home.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = function() {
    return (
    <>
	<Router>
	<div className="App">
	    <div className="header">
		{/*<Navbar/>*/}
		<h1><span style={{
			      fontSize: '45px',
			      padding: '10px'
			  }}>हिन्दी</span>archive</h1>
	    </div>
	    <div className="content">
	    <Route path="/">
		<Home />
	    </Route>
	    </div>
	</div>
	</Router>

	<style jsx global>{`
	h1 {
	    text-align: center;
	    margin: 20px;
            font-weight: normal;
	} 
	.content {
	    text-align: center;
	    background-color: #ddd;
	background-image: linear-gradient(135deg, #bfffcf, #bfcfff);
	    padding: 20px;
	}
	.App {
	    display: grid;
	    grid-template-rows: auto 1fr;
	    height: 100%;
	}
	.svg-icon path,
	.svg-icon polygon,
	.svg-icon rect {
            fill: rgba(40, 40, 40, 0.8);
	}
	.svg-icon circle {
            stroke: rgba(40, 40, 40, 0.8);
	    stroke-width: 1;
	}
	`}</style>
    </>
    )
    
}

export default App;
