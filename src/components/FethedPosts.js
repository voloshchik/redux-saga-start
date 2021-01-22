import React from 'react'

export const FethedPosts = ({ posts }) => {
  if (!posts.length) {
    return <button className='btn btn-primary'>Загрузить</button>
  }
  return (
    <div>
      <h2>FetchedPosts</h2>
    </div>
  )
}
