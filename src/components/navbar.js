import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({setPage}) {
    return (
    <>
	<ul>
	    <Link to='/'>
		<li>Home</li>
	    </Link>
	    <Link to='/about'>
		<li>About</li>
	    </Link>
	    <Link to='/contact'>
		<li>Contact</li>
	    </Link>
	</ul>
	<style jsx>{`
	    ul {
		display: flex;
		justify-content: center;
                margin: 0;
		padding: 0;
	    }
            li {
                list-style-type: none;
                text-decoration: underline;
                margin: 10px 20px;
                font-size: 14px;
                color: black;
                padding: 2px;
                cursor: pointer;
            }
            li:hover {
                color: blue;
            }
	`}</style>
    </>
    )
}

export default Navbar
