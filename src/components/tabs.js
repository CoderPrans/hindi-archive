import React from 'react'

export default function Tabs({media, setMedia}) {
    return (
    <div className="tabs">
	{
	    ['texts', 'audio', 'image', 'movies'].map(t => (
	    <button
		key={t}
		className={media == t ? 'active-tab' : 'tab'}
		onClick={() => setMedia(t)}>
		{t}
	    </button>
	    ))
	}
    <style jsx>{`
	.tabs {
	    margin: 30px auto;
	    padding: 5px 0;
	    width: clamp(270px, 40vw, 370px);
	    background-color: #ededed;
	    display: flex;
	    justify-content: space-evenly;
	    border-radius: 10px;
	}
	.tabs button {
	    cursor: pointer;
	    font-size: 16px;
	    color: #000;
            transition: width 1s;
	}
	.tab {
	    background: transparent;
	    border: none;
	}
	.active-tab{
	    background: #dadada;
	    border-radius: 10px;
	    border: none;
	    height: 100%;
	    padding: 8px 21px;
	}
    `}</style>
    </div>
    )
}
