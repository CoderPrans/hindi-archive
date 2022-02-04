import React, {useState, useEffect} from 'react'


function Pages({page, setPage, numFound}) {
    const [pageArr, setPageArr] = useState([]) 
    const pageCount = Math.ceil(numFound/20)

    useEffect(() => {
	let arr = []

/* 1 2 3 ... 10 */
/* 1 ... 3 4 5 ... 10 */
/* 1 ... 6 7 8 ... 10 */
/* 1 ... 7 8 9 10 */

        if (pageCount > 1) {
            if (pageCount === 2) {
                arr = [1, 2];
            } else if (pageCount == 3) {
                arr = [1, 2, 3];
            } else if (page === pageCount) {
                arr = [1,
                       ...(pageCount > 3 ? ['...'] : [pageCount-2]),
                       pageCount-1,
                       pageCount];
            } else if (page === 1) {
                arr = [1,
                       page+1,
                       ...(pageCount > 3 ? ['...'] : [pageCount+2]),
                       pageCount];
            } else {
                arr = [
                    1,
                    ...(page == 2 ? []
                        : page == 3 ? [2]
                        : ['...', page-1]),
                    page,
                    ...(page == pageCount-1 ? []
                        : page == pageCount-2 ? [pageCount-1]
                        : [page+1, '...']),
                    pageCount
                ];
            }
        } else {
            arr = [];
        }

	setPageArr(arr);

    }, [page, numFound]); 
    
    return (
	<>
	    {pageArr.length ? pageArr.map((i,c) => (
		<button key={c}
			disabled={i === '...' || i > pageCount || i < 1}
			onClick={() => setPage(i)}
			className={i === page ? 'selected' : ''}
		>{i}</button>
	    )) : ""
	    }
	    <style jsx>{`
.selected {
 color: white;
 background: dodgerblue;
}
button {
 background: transparent;
 border: none;
 cursor: pointer;
 width: 33px;
 height: 33px;
 text-align: center;
 border-radius: 50%;
}
	    `}</style>
	</>
    )
}

export default Pages
