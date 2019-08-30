import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <input type="number" placeholder="enter your feeling"/>
            </div>
        )
    }
}

export default HomePage;