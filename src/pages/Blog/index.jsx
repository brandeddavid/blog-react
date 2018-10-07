import React, { Component } from 'react';
import { getPosts } from '../../utils/api';
import './Blog.css';

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
    const { posts } = this.state;
    const postCards = posts.map(post => {
      return (
        <div className="card post-card" key={post.id}>
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <div className="card-text">{post.body}</div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="container">{postCards}</div>
      </React.Fragment>
    );
  }
}

export default Blog;
