import React, {Component} from 'react';
import {connect} from 'react-redux'
import mapStoreToProps from '../../../modules/mapStoreToProps';

class SuccessPage extends Component {

    // takes you to Home Page after submission clicked
    clickNext = (event) => {
        this.props.history.push('/');
        // RESETS DATA IN addFeedbackReducer
        this.props.dispatch({type: 'ADD_FEELING', payload: ''});
        this.props.dispatch({type: 'ADD_UNDERSTAND', payload: ''});
        this.props.dispatch({type: 'ADD_SUPPORT', payload: ''});
        this.props.dispatch({type: 'ADD_COMMENT', payload: ''});
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