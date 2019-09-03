import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class CommentsPage extends Component {
    
    state = {
        comment: ''
    }
    
    clickNext = (event) => {
        const comment = this.state.comment;
        // dispatching user input for for comment form to addFeedbackReducer
        this.props.dispatch({type: 'SET_COMMENT', payload: comment});
        // takes you to Review Page
        this.props.history.push('/review');
    }
    
    updateCommentForm = (event) => {
        this.setState({
            // changes state to whatever user is inputting in comments form
            comment: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <div>
                    <label>Comments</label>
                </div>
                <input onChange={this.updateCommentForm} type="text" placeholder="enter your comments"/>
                <button onClick={this.clickNext}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(CommentsPage);