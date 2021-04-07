import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUES_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from './types'

export const createPost = (post) => {
  return { type: CREATE_POST, payload: post }
}

export const fetchPost = () => {
  return { type: REQUES_POSTS }
  //   return async (dispatch) => {
  //     try {
  //       dispatch({ type: SHOW_LOADER })
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  //       const data = await response.json()
  //       dispatch({ type: HIDE_LOADER })
  //       dispatch({ type: FETCH_POSTS, payload: data })
  //     } catch (error) {
  //       dispatch(showAlert('Что-то пошло не так'))
  //       dispatch({ type: HIDE_LOADER })
  //     }
  //   }
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
