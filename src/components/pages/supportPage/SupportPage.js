import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class SupportPage extends Component {
    state = {
        supportRating: '',
    }
    
    clickNext = (event) => {
        const supportRating = this.state.supportRating;
        this.props.dispatch({type: 'ADD_SUPPORT', payload: supportRating});
        // takes you to support page 
        this.props.history.push('/comments');
    }

    updateSupportForm = (event) => {
        this.setState({
            // what user inputs in Support Form
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