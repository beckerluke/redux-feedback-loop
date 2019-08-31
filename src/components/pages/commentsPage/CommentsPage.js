import React, {Component} from 'react';

class CommentsPage extends Component {

    // takes you to Review Page
    clickNext = (event) => {
        this.props.history.push('/review');
    }
    
    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <div>
                    <label>Comments</label>
                </div>
                <input type="text" placeholder="enter your feeling"/>
                <button onClick={this.clickNext}>NEXT</button>
            </div>
        )
    }
}

export default CommentsPage;