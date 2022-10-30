import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from
'redux-devtools-extension'

const LOCAL_STORAGE_KEY = 'state'

const preloadedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined

export const store = createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
})

export default store
