import PropTypes from 'prop-types';

import Comment from './Comment';

import './style.scss';

const Comments = ({ comments }) => (
  <div className="comments">
    {comments.map((comment) => (
      <Comment
        key={comment.id}
        userName={comment.user.pseudo}
        commentDate={comment.createdAt.slice(0, 10)}
        textContent={comment.content}
      />
    ))}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
