import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../redux/actions'
import Loader from './Loader'
import Post from './Post'

export const FethedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.fetchedPosts)
  const loading = useSelector((state) => state.app.loading)

  if (loading) {
    return <Loader />
  }

  if (!posts.length) {
    return (
      <button className='btn btn-primary' onClick={() => dispatch(fetchPost())}>
        Загрузить
      </button>
    )
  }
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  )
}
