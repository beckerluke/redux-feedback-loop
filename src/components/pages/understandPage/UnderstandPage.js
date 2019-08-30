import React, {Component} from 'react';

class UnderstandPage extends Component {
    
    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <div>
                    <label>Understanding?</label>
                </div>
                <input type="number" placeholder="enter understanding"/>
                <button>NEXT</button>
            </div>
        )
    }
}

export default UnderstandPage;