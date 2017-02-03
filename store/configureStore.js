import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState = {
  messages:[]
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk, createLogger()))

if (module.hot) {
	module.hot.accept('../reducers', () => {
	  const nextRootReducer = require('../reducers')
	  store.replaceReducer(nextRootReducer)
	})
}

export default store