import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home.js';
import Feed from './components/feed/Feed.js';
import {Provider} from './context';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      onPhone: false
    };
    this.handleCall = this.handleCall.bind(this);
  }

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header onPhone={this.state.onPhone} handleCall={this.handleCall} />
              <div className="container">
                <Switch>
                  <Route exact path="/" render={()=><Home onPhone={this.state.onPhone} handleCall={this.handleCall} />} />
                  <Route exact path="/feed" component={Feed} />
                  <Route component={NotFound} />
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
  handleCall = () => {
    // Fetch window.Twilio token
    if (!this.state.onPhone) {
      this.setState({onPhone: true})
      let that = this;
      axios.post('https://safe-inlet-79187.herokuapp.com/token/generate')
        .then((response) => {
          console.log(response);
          window.Twilio.Device.setup(response.data.token);
          window.Twilio.Device.disconnect(function() {
            that.setState({onPhone: false});
            window.Twilio.Device.disconnectAll();
          });
          window.Twilio.Device.ready(function() {
            const n = '+16476884244';
            window.Twilio.Device.connect({ phoneNumber: n });
          });
        })
    }
    else {
      this.setState({onPhone: false})
      window.Twilio.Device.disconnectAll();
    }
  }
}

export default App;
