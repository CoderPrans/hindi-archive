import React from 'react'

const imgUrl = 'https://archive.org/services/img/'
const detailsUrl = 'https://archive.org/details/'
function Item({children}) {
    let c = children
    return (
	<>
	<div>
	    <img className="item-image"
	       src={`${imgUrl}${c.identifier}`}/>
	    <p className="title"><b>{c.title}</b></p>
	    <p className="desc">{
		c.description
		 ? c.description.length > 50
			? `${c.description.slice(0, 50)}...`
			: c.description
		    : ''
	    }</p>
	    <p className="extra">
		<img style={{marginRight: '3px'}}
		     src="https://img.icons8.com/fluent-systems-regular/24/000000/downloads.png"/>
{c.downloads}
	    <a href={`${detailsUrl}${c.identifier}`}>प्राप्त करें</a></p>
	</div>
	<style jsx>{`
            div {
                width: 180px;
                text-align: left;
            }
            .desc {
                color: #666;
		text-align: center;
            }
	    .extra{
		display: flex;
		align-items: center;
	    }
	    .extra a {
		flex: 1;
		text-align: right;
		font-size: 20px;
	    }
	    .title {
		text-align: center;
	    }
            div p,a {
                margin: 5px;
            }
	    .item-image {
		display: block;
		margin: 0 auto;
                border-radius: 10px;
                margin-bottom: 8px;
	    }

	`}</style>
	</>
    )
}

export default Item
