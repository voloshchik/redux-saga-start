import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from './types'

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

export const showAlert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message })

    setTimeout(() => {
      dispatch({ type: HIDE_ALERT })
    }, 3000)
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  }
}
