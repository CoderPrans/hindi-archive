import React, {useState} from 'react'
import List from './components/list.js'
import About from './about.js'
import Contact from './contact.js'
import {Switch, Link, Route, useLocation, useHistory} from 'react-router-dom'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'

const queryCache = new QueryCache()

function useUrlQuery() {
    return new URLSearchParams(useLocation().search)
}

function Home() {
    const [title, setTitle] = useState('')

    const history = useHistory()

    function handleSubmit(e) {
	e.preventDefault()
	history.push(`/list?title=${title}`)
    }

    let query = useUrlQuery();

    return (
    <>
	<div className="home">
	<form
	    onSubmit={handleSubmit}>
	<input
	    value={title}
	    onChange={e => setTitle(e.target.value)}
	    placeholder='Search'/>
	    <button type="submit">
	    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABL0lEQVRIie3UsUpDQRCF4U9RREwlWCqonZYpxE4fwDfwCQJJa5VagkVArPQJRBstU6axsLHUQgtBEQRtVMQiWuwGJCZk15BGPHBZLnf2/DN7Z5Z/DaBJVNDEI95xjX0UBzVfwS0+cY5d1HCIZ7Swh/Hfmr/hCqtdvhcirIUjjOSYT8bMLzHdJ7YsVFjKAVRiZt0y76YGHjCWCmgKZ56qDaGK9V4Box3vSzjLALRjl1MBU3jNALzEtZAKuMd8BmAhrnepGw6EPu+ZUYeqQlPMpQKKcUMtIXYWTzhJNW9rL0LKfcwv8IHFXMA4joX2awitOIMJocuqQuYfMaaeCyCMf0kYos+Op4XTmHl9EAhhQteE49rCpp8/dGBIira/QbIuvxy1K9kZFkA0vxkm4A/qCzQ5RK3c4OI+AAAAAElFTkSuQmCC"/>
	    </button>
	</form>

	<Switch>
	<Route exact={true} path="/">
	    <div className="welcome">
		<p className="message">
		    हिन्दी archive मे आपका स्वागत है । <br />
		     उपर box पे keyword लिख के search करें ।
		</p>
	    </div>
	</Route>
	<Route path="/list">
	    <ReactQueryCacheProvider queryCache={queryCache}>
	    <List
		title={query.get('title')}
	    />
	    </ReactQueryCacheProvider>
	</Route>
	<Route path="/about">
	    <About />
	</Route>
	<Route path="/contact">
	    <Contact />
	</Route>
	</Switch>
	</div>
	<style jsx>{`
          .home {
	    height: 100%;
          }
	  .welcome {
            display:grid;
            place-items: center;
            height: 400px;
	    padding: 0 28px ;
	  }
          .message {
            font-size: 26px;
            margin: 10px;
            line-height: 1.8;
          }
          [type=submit] {
	    padding: 8px;
	    display: flex;
	    align-items: flex-end;
	    background: transparent;
	    border: none;
	    cursor: pointer;
	    position: absolute; 
	    right: 0;
	    opacity: 0.5;
	  }
	  form input:hover, form input:focus{
	    box-shadow: 0 0 25px #a8a8a8;
	    outline: none;
	  }
	  form, input {
	    width: clamp(300px, 60vw, 600px);
	    height: 30px;
	  }
          form {
	    position: relative;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    margin: 10px auto;
	  }
          form input {
	    padding: 4px 10px;
	    border: 1px solid #c8c8c8;
	    border-radius: 7px;
	    font-size: 17px;
	  }
        `}</style>
    </>
    )
}

export default Home
