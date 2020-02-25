import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteCommentFromState} from '../Redux/actions'

class Comment extends Component {
    handleDelete=() => {
        console.log(this.props.user.comment)

        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/comments/${this.props.user.comment.id}`, {
            method: "DELETE",
            body: JSON.stringify(this.props.user.comment),
            headers: {
              'content-type': "application/json",
              "Authorization": `bearer ${token}`
            }
          })
          .then(r => r.json())
          .then((comment) => {
            // this.props.deleteCommentFromState(comment)
          })

        
    }
    render() {
        const {id,user_comment}=this.props.user.comment
        return (
            <div>
                <h2>{user_comment}</h2>
                <button onClick={this.handleDelete}>X</button>
            </div>
        );
    }
}

export default connect(null,{deleteCommentFromState})(Comment);