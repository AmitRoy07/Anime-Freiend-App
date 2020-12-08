import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {searchAnime} from './reducers';
import 'tachyons';
// import { Animename } from './Animename';


const store = createStore(searchAnime)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	 document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
