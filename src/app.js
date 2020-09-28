import React, {useState} from 'react';
import Navbar from './components/navbar.js'
import Home from './home.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = function() {
    return (
    <>
	<Router>
	<div className="App">
	    <div className="header">
	    <Navbar/>
	    <h1>हिन्दी archive</h1>
	    </div>
	    <div className="content">
	    <Route path="/">
		<Home />
	    </Route>
	    </div>
	</div>
	</Router>

	<style jsx>{`
	h1 {
	    text-align: center;
	    margin: 20px;
	} 
	.content {
	    text-align: center;
	    background-color: #ddd;
	background-image: linear-gradient(135deg, #afffcf, #afcfff);
	    padding: 20px;
	}
	.App {
	    display: grid;
	    grid-template-rows: auto 1fr;
	    height: 100%;
	}
	`}</style>
    </>
    )
    
}

export default App;
