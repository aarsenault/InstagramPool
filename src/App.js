import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home.js';
import Feed from './components/feed/Feed.js';
import {Provider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/feed" component={Feed} />
                  <Route exact path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
