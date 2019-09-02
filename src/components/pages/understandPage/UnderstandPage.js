import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class UnderstandPage extends Component {
    state = {
        understandRating: '',
    }
    
    clickNext = (event) => {
        const understandRating = this.state.understandRating;
        // Make sure user inputs something before moving to next page
        if (understandRating === '') {
            return alert('Please Enter Your Level Of Understanding');
        } 
        // dispatching user input in understanding form to addFeedbackReducer
        this.props.dispatch({type: 'ADD_UNDERSTAND', payload: understandRating});
        // takes you to support page 
        this.props.history.push('/support')
    }

    updateUnderstandForm = (event) => {
        this.setState({
             // changes state to whatever user is inputting in Understanding form
            understandRating: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <div>
                    <label>Understanding?</label>
                </div>
                <input onChange={this.updateUnderstandForm} type="number" placeholder="enter rating of understanding"/>
                <button onClick={this.clickNext}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(UnderstandPage);