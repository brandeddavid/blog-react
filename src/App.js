/**
 * Parent component 
 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:postId" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
