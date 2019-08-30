import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

// PAGE COMPONENTS
import HomePage from '../pages/homePage/HomePage';
import UnderstandPage from '../pages/understandPage/UnderstandPage';
import CommentsPage from '../pages/commentsPage/CommentsPage';
import ReviewPage from '../pages/reviewPage/ReviewPage';
import SuccessPage from '../pages/successPage/SuccessPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/understand" component={UnderstandPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/success" component={SuccessPage} />         
        </Router>
      </div>
    );
  }
}

export default App;
