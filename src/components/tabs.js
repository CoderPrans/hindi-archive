import React from 'react'

export default function Tabs({media, setMedia}) {
    return (
    <div className="tabs">
	{
	    ['texts', 'audio', 'image', 'movies'].map(t => (
	    <button
		key={t}
		className={media == t ? `active ${t}` : 'tab'}
		onClick={() => setMedia(t)}>
		{t}
	    </button>
	    ))
	}
    <style jsx>{`
	.tabs {
	    margin: 30px auto 15px auto;
	    /* padding: 5px; */
	    /* width: clamp(300px, 30vw, 400px); */
            width: 
	    background-color: #f3f3f3;
	    /* display: flex; */
	    /* justify-content: space-evenly; */
	    border-radius: 12px;
	}
	.tabs button {
	    cursor: pointer;
	    font-size: 16px;
	    border-radius: 12px;
	    color: #000;
	    height: 40px;
            transition: background 0.5s;
            padding: 2px 20px;
	}
	.tab {
	    background: transparent;
	    border: none;
            /* width: 60px; */
            /* padding: 10px; */
	}
	.active{
	    border: none;
	    /*padding: 8px 21px;*/
            /* width: 90px; */
	}
        .texts {
            background: rgba(250, 171, 60, 0.5);
        }
        .audio {
            background: rgba(0, 173, 239, 0.5);
        }
        .image {
            background: rgba(170, 153, 201, 0.5);
        }
        .movies {
            background: rgba(241, 100, 75, 0.5);
        }
    `}</style>
    </div>
    )
}
