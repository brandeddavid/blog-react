import React, { Component } from 'react';
import { getPost, getUser } from '../../utils/api';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      error: null,
      userId: null,
      publisher: 'David Mwangi'
    };
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    getPost(id).then(response => {
      console.log(response);
      this.setState(() => ({
        post: response.data,
        userId: response.data.userId,
        error: null
      }));
    });
  }

  getPublisher = () =>{
    getUser(this.state.userId).then(response => {
      console.log('===>', response);
      this.setState(() => ({ publisher: response.data }));
    });
  }

  

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
