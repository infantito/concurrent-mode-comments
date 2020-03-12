import React from 'react';
import PropTypes from 'prop-types';
import loader from '../logo.svg';

const fetchComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const comments = await response.json();

  return comments;
};

const Comments = props => {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetchComments()
      .then(data => {
        setLoading(false);
        setComments(props.comment.trim() ? data.filter(({ title }) => title.includes(props.comment)) : data);
      })
      .catch(() => {
        setLoading(false);
      });

    return () => {
      setComments([]);
    };
  }, [props.comment]);

  return (
    <div className="app-matching">
      <h5 className="app-total">Total: {comments.length} comments</h5>
      <ul className="app-comments">
        {loading ? (
          <li>
            <img src={loader} alt="⚛️" className="app-loading" />
          </li>
        ) : comments.length > 0 ? (
          comments.map(comment => (
            <li key={comment.id}>
              <img src={comment.thumbnailUrl} alt="⚛️" className="app-thumbnail" />
              <p className="app-comment">{comment.title}</p>
            </li>
          ))
        ) : (
          <li>
            <p className="app-comment">No Data!</p>
          </li>
        )}
      </ul>
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.string.isRequired
};

export default React.memo(Comments);
