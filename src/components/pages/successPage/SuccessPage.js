import React, {Component} from 'react';
import {connect} from 'react-redux'
import mapStoreToProps from '../../../modules/mapStoreToProps';

class SuccessPage extends Component {

    clickNext = (event) => {
        // takes you to Admin Page after submission clicked
        this.props.history.push('/');
        // RESETS DATA IN addFeedbackReducer
        this.props.dispatch({type: 'SET_FEELING', payload: ''});
        this.props.dispatch({type: 'SET_UNDERSTAND', payload: ''});
        this.props.dispatch({type: 'SET_SUPPORT', payload: ''});
        this.props.dispatch({type: 'SET_COMMENT', payload: ''});
    }

    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.clickNext}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SuccessPage);