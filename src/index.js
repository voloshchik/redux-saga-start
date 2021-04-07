import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { forbiddenWordsMiddleware } from './redux/middleware'
import createSageMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas'

const saga = createSageMiddleware()
const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagaWatcher)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
