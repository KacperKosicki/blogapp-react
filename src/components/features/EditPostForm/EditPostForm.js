import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useNavigate, useParams } from 'react-router-dom';

const EditPostForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postToEdit = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const handleSubmit = (post) => {
    dispatch(editPost(post));
    navigate('/');
  };

  return (
    <PostForm
      action={handleSubmit}
      actionText="Edit Post"
      initialData={postToEdit}
    />
  );
};

export default EditPostForm;