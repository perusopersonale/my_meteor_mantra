import React from 'react';
import CommentCreate from '../containers/comment_create.js';
import { Col, ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';

const CommentList = ({ comments, postId }) => {
  const commentNodes = comments.map(comment => (
    <ListGroupItem key={comment._id} className="comment">
      <strong>{comment.username}</strong> - {comment.createdAt.toLocaleDateString()}
      <p>{comment.text}</p>
      {comment.saving ? 'saving... ' : null}
    </ListGroupItem>
  ));
  const commentNone = (
    <ListGroupItem>
      No comments yet!
    </ListGroupItem>
  );
  return (
    <Row>
      <Col xs={12} sm={8} smOffset={2} className="comments">
        <Panel header="Add Comment">
          <CommentCreate postId={postId} />
        </Panel>
        <Panel header="Comments">
          <ListGroup fill>
            {comments.length === 0 ? commentNone : null}
            {commentNodes}
          </ListGroup>
        </Panel>
      </Col>
    </Row>
  );
};

export default CommentList;

CommentList.propTypes = {
  comments: React.PropTypes.array,
  postId: React.PropTypes.string,
};
