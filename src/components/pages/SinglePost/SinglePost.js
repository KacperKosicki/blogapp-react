import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { removePost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const post = posts.find(post => post.id === id);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    dispatch(removePost(id));
    setShowConfirmation(false);
    return <Navigate to="/" />;
  };

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-75 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{post.title}</h2>
          <div className="d-flex">
            <NavLink to={`/post/edit/${post.id}`}>
              <Button variant="info" className="mr-2">Edit</Button>
            </NavLink>
            <Button variant="danger" onClick={() => setShowConfirmation(true)} style={{ marginLeft: '10px' }}>Delete</Button>
          </div>
        </div>
        <div className="author-info">
          <div><strong>Author:</strong> {post.author}</div>
        </div>
        <div className="published-info">
          <div><strong>Published:</strong> {post.publishedDate}</div>
        </div>
        <p className="mt-2">{post.content}</p>
      </div>
      
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}> 
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this post?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SinglePost;