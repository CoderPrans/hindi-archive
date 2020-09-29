import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query'
import Tabs from './tabs.js'
import Item from './item.js'

async function fetchData(key, title, media, page) {
    const baseUrl = 'https://archive-flask.herokuapp.com/'
    let queries = `title=${title}&media=${media}&lang=hin&page=${page}` 
    const res = await fetch(`${baseUrl}?${queries}`)
    return res.json()
}

function List({title}) {
    const [page, setPage] = useState(1)
    const [media, setMedia] = useState('texts')
    const {refetch, isLoading, error, data} = useQuery(['items', title, media, page], fetchData)

    useEffect(() => {
	refetch()
    }, [title, page, media])

    useEffect(() => {
	setPage(1)
    }, [title, media])

    if(isLoading) return (<>
	<Tabs media={media} setMedia={setMedia}/>
	<div>'Loading...'</div>
    </>)
    if(error) return (<>
	<Tabs media={media} setMedia={setMedia} />
	<div>{error.message}</div>
    </>)

    console.log(data)
    return (
    <>
	<Tabs media={media} setMedia={setMedia} />
	<h2 style={{display: 'inline'}}>"{title}"</h2><span> has {data.numFound} items</span>
	<div className="items">
	{
	    data.items.map(i => (
		<div key={i.identifier}><Item>{i}</Item></div>
	    ))
	}
	</div>
	<button
	    onClick={() => setPage(page - 1)}
	    disabled={page === 1}>
	    Prev Page
	</button>
	<button
	    onClick={() => setPage(page + 1)}
	    disabled={data.items.length < 19}>
	    Next Page
	</button>

    <style jsx>{`
	.items {
	    display: flex;
	    justify-content: space-around;
	    flex-wrap: wrap;
	}
	.items div {
	    /*flex: <grow> <shrink> <baseWidth> */
	    flex: 1 1 200px;
	    flex: 0 1 200px;
	    margin: 20px;
            padding: 10px;
	}
    `}</style>
    </>
    )

}


export default List

//    useEffect(() => {
//	const baseUrl = 'https://archive-flask.herokuapp.com/'
//	let queries = `title=${title}&media=${media}&lang=hin&page=${pageN}` 
//	fetch(`${baseUrl}?${queries}`)
//	    .then(res => res.json())
//	    .then(d => {
//		console.log(d)
//		setData(d)
//	    })
//	    .catch(e => console.log(e))
//    }, [title])
//
