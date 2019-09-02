import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// REDUCERS
import baseReducer from './modules/reducers/base.reducer';
import feedbackReducer from './modules/reducers/feedback.reducer';
import addFeedbackReducer from './modules/reducers/addFeedback.reducer';

const store = createStore(
    combineReducers({
        baseReducer,
        feedbackReducer,
        addFeedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
