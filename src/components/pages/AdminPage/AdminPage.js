import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getFeedback} from '../../../modules/services/feedback.service';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class AdminPage extends Component {

       componentDidMount() {
        // calls function that sparks GET request for feedback
        // response is the array of objects with feedback data from database
        getFeedback().then((response) => {
            this.props.dispatch({type: 'SET_FEEDBACK', payload: response.data})
        })
    }

    // takes you to Home Page after submission clicked
    clickNext = (event) => {
        this.props.history.push('/');
    }

    render() {

        const feedbackArray = this.props.store.feedbackReducer.map((feedback, i) => {
            return (
                <div key={i}>
                    <h3>Feelings: {feedback.feeling}</h3>
                    <h3>Understanding: {feedback.understanding}</h3>
                    <h3>Support: {feedback.support}</h3>
                    <h3>Comments: {feedback.comments}</h3>
                    <hr />
                </div>
            )
        })

        return(
            <div>
                {feedbackArray}
                <button onClick={this.clickNext}>Leave New Feedback</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(AdminPage);