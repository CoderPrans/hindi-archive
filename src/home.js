import React, {useState, useEffect, useRef} from 'react';
import List from './components/list.js';
import About from './about.js';
import Contact from './contact.js';
// import Tabs from './components/tabs.js';
import {Switch, Link, Route, useLocation, useHistory} from 'react-router-dom';
import {QueryCache, ReactQueryCacheProvider} from 'react-query'

const queryCache = new QueryCache()

function useUrlQuery() {
    return new URLSearchParams(useLocation().search)
}

function Home() {
    const [title, setTitle] = useState('')

    const ref = useRef();
    const history = useHistory()

    useEffect(() => {
        ref.current.focus();
    }, []);
    
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
        ref={ref}
	    value={title}
	    onChange={e => setTitle(e.target.value)}
	    placeholder='Search'/>
	    <button type="submit">

	<svg className="svg-icon" viewBox="0 0 20 20">
	<path fill="none" d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
	c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
	c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
	s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"></path>
	</svg>
		
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
	    align-items: center;
	    background: transparent;
	    border: none;
	    cursor: pointer;
	    position: absolute; 
	    right: 0;
	    opacity: 0.5;
	  }
	  form input:hover, form input:focus{
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
         .svg-icon {
	    width: 1.5em;
	    height: 1.5em;
	}

        `}</style>
    </>
    )
}

export default Home
