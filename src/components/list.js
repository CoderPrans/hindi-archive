import React, {useState, useEffect} from 'react'
import {useQuery} from 'react-query'

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
    }, [title])

    if(isLoading) return <div>'Loading...'</div>
    if(error) return <div>{error.message}</div>

    const imgUrl = 'https://archive.org/services/img/'
    console.log(data)
    return (
    <>
	<div className="tabs">
	    {
		['texts', 'audio', 'image', 'movies'].map(t => (
		    <button
			key={t}
			style={{background: media == t ? 'red': ''}}
		        onClick={() => setMedia(t)}>
			{t}
		    </button>
		))
	    }
	</div>
	<p>{title} has {data.numFound} items</p>
	<div className="items">
	{
	    data.items.map(i => (
		<p key={i.identifier}>
		    <img src={`${imgUrl}${i.identifier}`}/>
		    {i.title}
		</p>
	    ))
	}
	</div>
	<button
	    onClick={old => setPage(old - 1)}
	    disabled={page === 1}>
	    Prev Page
	</button>
	<button
	    onClick={old => setPage(old + 1)}
	    disabled={data.items.length < 19}>
	    Next Page
	</button>

    <style jsx>{`
    img {
	display: block;
	margin: 0 auto;
    }
    div {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
    }
    p {
	width: 200px;
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