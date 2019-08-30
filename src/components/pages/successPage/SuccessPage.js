import React, {Component} from 'react';

class SuccessPage extends Component {

    // takes you to Success Page after submission clicked
    clickNext = (event) => {
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.clickNext}>Leave New Feedback</button>
            </div>
        )
    }
}

export default SuccessPage;