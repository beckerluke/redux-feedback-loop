import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getFeedback } from '../../modules/services/feedback.service';
import mapStoreToProps from '../../modules/mapStoreToProps';

class ReviewPage extends Component {

    componentDidMount() {
        // calls function that sparks GET request for feedback
        // response is the array of objects with feedback data from database
        getFeedback().then((response) => {
            console.log(response.data);
            this.props.dispatch({type: 'SET_FEEDBACK', payload: response.data})
        })
    }
    
    // takes you to Success Page after submission clicked
    clickNext = (event) => {
        this.props.history.push('/success');
    }


    render() {
        const feedbackArray = this.props.store.feedbackReducer.map((feedback, i) => {
            return (
                <div key={i}>
                    <h3>Feelings: {feedback.feeling}</h3>
                    <h3>Understanding: {feedback.understanding}</h3>
                    <h3>Support: {feedback.support}</h3>
                    <h3>Comments: {feedback.comments}</h3>
                </div>
            )
        })
        return(
            <div>
                <h1>Review Your Feedback</h1>
                {feedbackArray}
                 {/* Displays User's Feelings Input Data
                     Displays User's Understanding Input Data
                     Displays User's Support Input Data
                     Displays User's Comments Input Data*/}
                <button onClick={this.clickNext}>SUBMIT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ReviewPage);