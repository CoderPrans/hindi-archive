import React from 'react'

function Navbar({setPage}) {
    return (
    <>
	<ul>
	    <li onClick={() => setPage('Home')}>Home</li>
	    <li onClick={() => setPage('About')}>About</li>
	    <li onClick={() => setPage('Contact')}>Contact</li>
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
                font-size: 13px;
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
