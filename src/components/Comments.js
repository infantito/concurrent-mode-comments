import React, {SuspenseList, Suspense} from 'react';
import PropTypes from 'prop-types';
import loader from '../logo.svg';

const SUSPENSE_CONFIG = {timeoutMs: 2000};

const fetchComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();

  return comments;
};

const Comments = props => {
  const [comments, setComments] = React.useState([]);
  const [setTransition, isPending] = React.useTransition(SUSPENSE_CONFIG);

  React.useEffect(() => {
    fetchComments()
      .then(data => {
        setTransition(() => {
          setComments(
            props.comment.trim()
              ? data.filter(({name}) => name.includes(props.comment))
              : data,
          );
        });
      })
      .catch(() => {});

    return () => {
      setComments([]);
    };
  }, [setTransition, props.comment]);

  return (
    <div className="app-matching">
      <h5 className="app-total">Total: {comments.length} comments</h5>
      {isPending ? <span>Loading...</span> : null}
      <ul className="app-comments">
        <SuspenseList revealOrder="forwards">
          {comments.map(comment => (
            <Suspense
              key={comment.id}
              fallback={<img src={loader} alt="⚛️" className="app-loading" />}
            >
              <li>
                <span className="app-thumbnail" role="img" aria-label="React">
                  ⚛️
                </span>
                <p className="app-comment">{comment.name}</p>
              </li>
            </Suspense>
          ))}
        </SuspenseList>
      </ul>
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default React.memo(Comments);
