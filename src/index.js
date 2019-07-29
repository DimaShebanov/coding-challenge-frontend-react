import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Route>
            <App/>
        </Route>
    </Router>,
    document.getElementById('root'),
);
