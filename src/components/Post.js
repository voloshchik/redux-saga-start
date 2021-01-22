import React from 'react'

const Post = ({ post }) => {
  console.log(post)
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>Post here {post}</div>
      </div>
    </div>
  )
}

export default Post
