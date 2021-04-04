import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from './types'

export const createPost = (post) => {
  return { type: CREATE_POST, payload: post }
}

export const fetchPost = () => {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER })
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

    const data = await response.json()
    dispatch({ type: HIDE_LOADER })
    dispatch({ type: FETCH_POSTS, payload: data })
  }
}
