import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class SupportPage extends Component {
    state = {
        supportRating: '',
    }
    
    clickNext = (event) => {
        const supportRating = this.state.supportRating;
        // Make sure user inputs something before moving to next page
        if (supportRating === '') {
            return alert('Please Enter How Well You Are Being Supported');
        } 
        // dispatching user input to addFeedbackReducer
        this.props.dispatch({type: 'SET_SUPPORT', payload: supportRating});
        // takes you to comments page 
        this.props.history.push('/comments');
    }

    updateSupportForm = (event) => {
        this.setState({
             // changes state to whatever user is inputting in Support form
            supportRating: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>How well are you being supported?</h1>
                <div>
                    <label>Support?</label>
                </div>
                <input onChange={this.updateSupportForm} type="number" placeholder="enter support rating"/>
                <button onClick={this.clickNext}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(SupportPage);