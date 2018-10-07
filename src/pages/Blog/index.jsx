import React, { Component } from 'react';
import { getPosts } from '../../utils/api';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    getPosts().then(response => {
      this.setState(() => ({
        posts: response.data
      }));
    });
  }
  render() {
    return <React.Fragment />;
  }
}

export default Blog;
