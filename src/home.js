import React, {useState} from 'react'
import List from './components/list.js'
import {Switch, Link, Route, useLocation} from 'react-router-dom'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'

const queryCache = new QueryCache()

function useUrlQuery() {
    return new URLSearchParams(useLocation().search)
}

function Home() {
    const [title, setTitle] = useState('')

    let query = useUrlQuery();

    return (
    <>
	<div>
	<input
	    value={title}
	    onChange={e => setTitle(e.target.value)}
	    placeholder='search..'/>
	<Link to={`/list?title=${title}`}>
	    <button>Search</button>
	</Link>
	<Switch>
	<Route exact={true} path="/">
	    <div className="welcome">
		<p className="message">हिन्दी आर्काइव मॆ आपका स्वागत है ।</p>
		<p className="message">👆 उपर box पॆ keyword लिख कॆ search करॆ ।</p>
	    </div>
	</Route>
	<Route path="/list">
	    <ReactQueryCacheProvider queryCache={queryCache}>
	    <List
		title={query.get('title')}
	    />
	    </ReactQueryCacheProvider>
	</Route>
	</Switch>
	</div>
	<style jsx>{`
          div {
	    height: 100%;
          }
	  .welcome {
	    height: 78vh;
	    display: flex;
            flex-direction: column;
	    justify-content: center;
	    align-items: center;
	  }
          .message {
            font-size: 26px;
            margin: 10px;
          }
        `}</style>
    </>
    )
}

export default Home
