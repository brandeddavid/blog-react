/**
 * Blog articles component
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../utils/api';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    getPosts().then(response => {
      this.setState(() => ({
        posts: response.data,
        error: null
      }));
    });
  }

  render() {
    const { posts } = this.state;
    const postCards = posts.map(post => {
      return (
        <div className="card post-card text-center" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <div className="card-header">
              <h3>{post.title}</h3>
            </div>
          </Link>
          <div className="card-body">
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
