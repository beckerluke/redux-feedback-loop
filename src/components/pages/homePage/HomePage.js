import React, {Component} from 'react';

class HomePage extends Component {

    // takes you to Understand Page
    clickNext = (event) => {
        this.props.history.push('/understand')
    }
    
    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <div>
                    <label>Feeling?</label>
                </div>
                <input type="number" placeholder="enter your feeling"/>
                <button onClick={this.clickNext}>NEXT</button>
            </div>
        )
    }
}

export default HomePage;