import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/')
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  )
};

export default AddPostForm;