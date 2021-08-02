import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  textAreaChange = event => {
    this.setState({comment: event.target.value})
  }

  onClickCommentDelete = uid => {
    const {commentsList} = this.state
    const filterComments = commentsList.filter(
      eachComment => eachComment.id !== uid,
    )
    this.setState(prevState => ({...prevState, commentsList: filterComments}))
  }

  onClickLikeButton = uid => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (uid === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      bgColor: newColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    const arrayLength = commentsList.length

    return (
      <div className="background-container">
        <h1 className="comments-heading-1">Comments</h1>
        <div className="form-and-image-container">
          <div className="form-container">
            <p className="description">Say something about 4.o technologies</p>
            <form className="form-control" onSubmit={this.onAddComment}>
              <input
                placeholder="Your name"
                className="name-search"
                onChange={this.nameChange}
                value={name}
              />
              <textarea
                type="search"
                className="text-area"
                onChange={this.textAreaChange}
                placeholder="Your comments"
                value={comment}
              />
              <button type="submit" className="button-style">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image-edit"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="count-of-comments-container">
          <span className="count-of-comments">{arrayLength}</span>
          <p className="comments-heading">comments</p>
        </div>
        <ul className="unordered_list">
          {commentsList.map(eachItem => (
            <CommentItem
              eachItem={eachItem}
              key={eachItem.id}
              onClickCommentDelete={this.onClickCommentDelete}
              onClickLikeButton={this.onClickLikeButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
