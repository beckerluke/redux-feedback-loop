import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class CommentsPage extends Component {
    
    state = {
        comment: ''
    }
    
    clickNext = (event) => {
        const comment = this.state.comment;
        this.props.dispatch({type: 'ADD_COMMENT', payload: comment});
        // takes you to Review Page
        this.props.history.push('/review');
    }
    
    updateCommentForm = (event) => {
        this.setState({
            // what user inputs in Comment Form
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