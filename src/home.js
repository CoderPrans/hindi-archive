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
	    placeholder='search..'/>
	<button type="submit">Search</button>
	</form>
	<Switch>
	<Route exact={true} path="/">
	    <div className="welcome">
		<p className="message">
		    हिन्दी archive मे आपका स्वागत है । <br />
		    👆 उपर box पे keyword लिख के search करें ।
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
        `}</style>
    </>
    )
}

export default Home
