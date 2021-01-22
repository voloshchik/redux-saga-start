import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <p className='text-center'>Постов пока нету</p>
  }
  return posts.map((post) => <Post key={post} post={post} />)
}

export default Posts
