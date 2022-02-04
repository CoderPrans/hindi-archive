import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query'
import Tabs from './tabs.js'
import Item from './item.js'
import Pages from './pages.js'

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
      <span><b>{data.numFound}</b> {data.numFound > 1 ? 'matches' : 'match'} found</span>
	<div className="items">
	{
	    data.items.map(i => (
		<div key={i.identifier}><Item>{i}</Item></div>
	    ))
	}
	</div>
	<Pages page={page} setPage={setPage} numFound={data.numFound} />

    <style jsx>{`
	.items {
	    display: flex;
	    justify-content: center;
	    flex-wrap: wrap;
	}
	.items div {
	    /*flex: <grow> <shrink> <baseWidth> */
	    /*flex: 1 1 220px;*/
	    flex: 0 1 230px;
	    margin: 25px;
	    background: #fafafa;
	    border: 1px solid #ddd;
	    border-radius: 12px;
	    overflow: hidden;
	    height: 100%;
            box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
