import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const configureStore = preloadedState => createStore(reducers, preloadedState, applyMiddleware(reduxThunk));

export default configureStore;