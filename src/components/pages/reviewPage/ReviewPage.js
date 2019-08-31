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
        return(
            <div>
                <h1>Review Your Feedback</h1>
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