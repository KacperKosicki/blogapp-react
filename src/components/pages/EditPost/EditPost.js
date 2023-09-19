import React from 'react';
import EditPostForm from '../../features/EditPostForm/EditPostForm';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  
  const { postId } = useParams();

  return (
    <div>
      <EditPostForm postId={postId} />
    </div>
  );
};

export default EditPost;