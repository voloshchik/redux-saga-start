import { call, put, takeEvery } from 'redux-saga/effects'
import { showAlert } from './actions'
import { FETCH_POSTS, HIDE_LOADER, REQUES_POSTS, SHOW_LOADER } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUES_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put({ type: SHOW_LOADER })
    const payload = yield call(fetchPost)
    yield put({ type: FETCH_POSTS, payload })
    yield put({ type: HIDE_LOADER })
  } catch (error) {
    yield put(showAlert('Something went wrong'))
    yield put({ type: HIDE_LOADER })
  }
}

async function fetchPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  return await response.json()
}
