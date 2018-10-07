import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
