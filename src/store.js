import { createStore } from 'redux'
// import reducers from './reducers'

import { reducerCurr } from './reducers/currency'

const LOCAL_STORAGE_KEY = 'state'

const preloadedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined

export const store = createStore(reducerCurr, preloadedState)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
})

export default store
