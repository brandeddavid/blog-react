import React, { Component } from 'react';
import { getPost } from '../../utils/api';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      error: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    getPost(id).then(response => {
      console.log(response);
      this.setState(() => ({ post: response.data, error: null }));
    });
  }

  render() {
    const { post } = this.state;
    return (
      <React.Fragment>
        <div className="container post">
          <div className="card post-card">
            <div className="card-header">{post.title}</div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer">
              <span className="user">Publisher: {post.userId}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
