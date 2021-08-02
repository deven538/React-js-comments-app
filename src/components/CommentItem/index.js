// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachItem, onClickCommentDelete, onClickLikeButton} = props
  const {name, comment, id, isLiked, date, bgColor} = eachItem

  const likeImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const deleteComment = () => {
    onClickCommentDelete(id)
  }
  const likeButton = () => {
    onClickLikeButton(id)
  }

  const isImageLiked = isLiked ? [likedImage, 'like'] : [likeImage, 'unLike']

  const getFirstLetter = () => {
    const firstLetter = name.slice(0, 1)
    console.log(firstLetter)
    return firstLetter
  }

  return (
    <li className="review-item">
      <div className="main-container">
        <div className="first-letter-div">
          <p className={`first-letter ${bgColor}`}>{getFirstLetter()}</p>
        </div>
        <div className="bottom-container">
          <div className="name-time-container">
            <h1 className="user-name">{name}</h1>
            <p className="time-display">{formatDistanceToNow(date)}</p>
          </div>

          <p className="comment">{comment}</p>
          <div className="images">
            <button type="button" className="button" onClick={likeButton}>
              <img src={isImageLiked[0]} className="like-image" alt="like" />
            </button>
            <p className={`like-description ${isImageLiked[1]}`}>Like</p>
            <button
              type="button"
              className="delete-button"
              onClick={deleteComment}
              testId="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
                className="delete-image"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
