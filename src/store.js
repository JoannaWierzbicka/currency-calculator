import { createStore } from 'redux'
import reducers from './reducers'

const LOCAL_STORAGE_KEY = 'state'

const preloadedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined

export const store = createStore(reducers, preloadedState)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
})

export default store
