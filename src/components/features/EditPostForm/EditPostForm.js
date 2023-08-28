import React from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useNavigate } from 'react-router-dom';

const EditPostForm = ({ postToEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id: postToEdit.id }));
    navigate('/');
  };

  return (
    <PostForm action={handleSubmit} actionText="Edit Post" initialData={postToEdit.id} />
  );
};

export default EditPostForm;