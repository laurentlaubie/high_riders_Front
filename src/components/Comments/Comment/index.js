import PropTypes from 'prop-types';

import './style.scss';

const Comment = ({ userName, commentDate, textContent }) => (
  <div className="comment">
    <div className="comment__data">
      <h3 className="comment__data__username">{userName}</h3>
      <span className="comment__data__date">{commentDate}</span>
    </div>
    <p className="comment__textcontent">{textContent}</p>
  </div>
);

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  commentDate: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default Comment;
