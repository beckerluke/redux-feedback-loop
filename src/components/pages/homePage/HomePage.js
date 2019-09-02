import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class HomePage extends Component {

    // storing user input for feeling rating in state 
    state = {
        feelingRating: '',
    }

    // takes you to Understand Page
    clickNext = (event) => {
        const feelingRating = this.state.feelingRating;
        this.props.dispatch({type: 'ADD_FEELING', payload: feelingRating});
        this.props.history.push('/understand');
    }

    updateFeelingForm = (event) => {
        this.setState({
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