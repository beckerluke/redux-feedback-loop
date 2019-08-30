import React, {Component} from 'react';

class ReviewPage extends Component {

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

export default ReviewPage;