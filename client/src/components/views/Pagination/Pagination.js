import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <div>
      {pageNumber.map((number,index)=>(
        <div key={index}>
          <a onClick={()=> paginate(number)}href="" className>
            {number}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Pagination
