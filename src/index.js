/**
 * @Author: harsha
 * @Date:   2018-09-13T13:58:38+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-13T17:02:04+05:30
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import './index.css';
import App from './App';

// const composeEnhancers =
// 	typeof window !== 'undefined' ||
// 	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
// 	compose;

const Initial_state = [];

// const enhancer = composeEnhancers(
// 	applyMiddleware(thunk)
// 	// other store enhancers if any
// );

const store = createStore(
	reducers,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
