/**
 * Single post component
 */

import React, { Component } from 'react';
import { getPost, getUser } from '../../utils/api';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      error: null,
      userId: null,
      publisher: ''
    };
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    getPost(id).then(response => {
      this.setState(
        {
          post: response.data,
          userId: response.data.userId,
          error: null
        },
        () => this.getPublisher(this.state.userId)
      );
    });
  }

  /**
   * Function calls network call function to get user info
   * 
   * @param {string} id
   * 
   * @returns {void}
   */
  getPublisher = id => {
    getUser(id).then(response => {
      this.setState({ publisher: response.data.name });
    });
  };

  render() {
    const { post, publisher } = this.state;
    return (
      <React.Fragment>
        <div className="container post">
          <div className="card post-card">
            <div className="card-header">{post.title}</div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer">
              <span className="user">Publisher: {publisher}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
