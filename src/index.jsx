import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import history from './history';
import App from './components/App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const appStore = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={appStore}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root')
);
