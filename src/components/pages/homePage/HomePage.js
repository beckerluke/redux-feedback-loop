import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class HomePage extends Component {

    // storing user input for feeling rating in state 
    state = {
        feelingRating: '',
    }

    clickNext = (event) => {
        const feelingRating = this.state.feelingRating;
        // Make sure user inputs something before moving to next page
        if (feelingRating === '') {
            return alert('Please Enter How You Are Feeling');
        } 
        // dispatching user input to addFeedbackReducer
        this.props.dispatch({type: 'SET_FEELING', payload: feelingRating});
        // takes you to Understand Page
        this.props.history.push('/understand');
        
    }

    updateFeelingForm = (event) => {
        this.setState({
            // changes state to whatever user is inputting in feelings form
            feelingRating: event.target.value
        })
    }
    
    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <div>
                    <label>Feeling?</label>
                </div>
                <input onChange={this.updateFeelingForm} type="number" placeholder="enter your feeling"/>
                <button onClick={this.clickNext}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(HomePage);