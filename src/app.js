import React, {useState} from 'react';
import Navbar from './components/navbar.js'
import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'
import {BrowserRouter as Router} from 'react-router-dom'

const App = function() {
    const [page, setPage] = useState('Home')
    return (
    <>
	<div className="App">
	    <Navbar setPage={setPage}/>
	    <h1>हिन्दी archive</h1>
	    <Router>
	    <div className="content">
	    {/* Home or About or Contact component */}
		{
		    page === 'Home' ? <Home />
		    : page === 'About' ? <About />
		    : page === 'Contact' ? <Contact />
		    : null
		}
	    </div>
	    </Router>
	</div>

	<style jsx>{`
h1 {
    text-align: center;
    margin: 10px;
} 
.content {
    text-align: center;
    background-color: #ddd;
    padding: 20px;
}
.App, .content {
}
	`}</style>
    </>
    )
    
}

export default App;
