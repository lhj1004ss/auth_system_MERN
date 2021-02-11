import React from 'react'
import './Posts.css';

function Posts({loading, posts}) {
  if(loading){
    return <h2>loading...</h2>
  }
  return (
    <div className="post">
      {posts && posts.map((post, index) =>(
        <div key={index}>        
          <div>{post.category}</div>
          <div>{post.title}</div>
          <div>{post.view}</div>
          <div>{post.createdAt}</div>
        </div>

      ))}
    </div>
  )
}

export default Posts
