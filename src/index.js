import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import Calculator from './Calculator'

const rootEl = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<div>
			<h2>Mortgage Calculator</h2>
			<Calculator onSubmit={() => alert('Hi')} />
		</div>
	</Provider>,
	rootEl
);



registerServiceWorker();
